'use strict';
(function () {
  const cfg = window.ACOCY;
  if (!cfg) return;
  const money = (amount) => new Intl.NumberFormat('en-IE', {style:'currency',currency:cfg.currency,maximumFractionDigits:0}).format(amount);
  const year = document.getElementById('year'); if (year) year.textContent = new Date().getFullYear();
  const status = document.getElementById('hero-status');
  if (status) { status.textContent = cfg.commissionsOpen ? `Commissions open${cfg.slots===null ? ' ♡' : ` · ${cfg.slots} slot${cfg.slots===1?'':'s'} available`}` : 'Commissions currently closed'; if (!cfg.commissionsOpen) document.querySelector('.status-dot')?.classList.add('closed'); }
  const priceBody = document.getElementById('price-body');
  if (priceBody) {
    priceBody.innerHTML = '';
    for (const row of cfg.rows) {
      const tr=document.createElement('tr'); const name=document.createElement('th');name.scope='row';name.textContent=row.name;tr.appendChild(name);
      for (const style of cfg.styles) { const cell=document.createElement('td'); cell.textContent=money(row.prices[style.id]);tr.appendChild(cell); }
      priceBody.appendChild(tr);
    }
  }
  const sizeNode=document.getElementById('size-options'), styleNode=document.getElementById('style-options');
  if (!sizeNode || !styleNode) return;
  let selectedSize=cfg.defaultSize, selectedStyle=cfg.defaultStyle;
  const selectedRow=()=>cfg.rows.find(r=>r.id===selectedSize)||cfg.rows[0];
  const selectedFinish=()=>cfg.styles.find(s=>s.id===selectedStyle)||cfg.styles[0];
  const renderChoices=()=>{
    const build=(holder,items,current,handle)=>{
      holder.innerHTML='';
      items.forEach(item=>{const b=document.createElement('button');b.type='button';b.className='choice-pill';b.textContent=item.name;b.setAttribute('aria-pressed',String(current===item.id));b.addEventListener('click',()=>handle(item.id));holder.appendChild(b);});
    };
    build(sizeNode,cfg.rows,selectedSize,v=>{selectedSize=v;renderChoices();renderSummary();});
    build(styleNode,cfg.styles,selectedStyle,v=>{selectedStyle=v;renderChoices();renderSummary();});
  };
  const renderSummary=()=>{
    document.getElementById('summary-name').textContent=`${selectedRow().name} · ${selectedFinish().name}`;
    document.getElementById('summary-price').textContent=money(selectedRow().prices[selectedStyle]);
    document.getElementById('copy-feedback').textContent='';
  };
  const createRequest=()=>{
    const notes=document.getElementById('request-notes').value.trim();
    return [
      'Hi acocy! ♡ I would like to ask about an art commission.',
      '',`Size: ${selectedRow().name}`,`Style: ${selectedFinish().name}`,
      `Listed base price: ${money(selectedRow().prices[selectedStyle])} (subject to confirmation)`,
      `Character details: ${notes || '[I will send references and details in chat]'}`,
      '', 'I understand this is only an enquiry, not a confirmed order.',
      'I understand commissions are for personal use only; payment is arranged separately after the artist accepts the request.',
      'Thank you! ♡'
    ].join('\n');
  };
  const copyBtn=document.getElementById('copy-request'),copyFeedback=document.getElementById('copy-feedback');
  copyBtn.addEventListener('click',async()=>{
    const text=createRequest();
    try{await navigator.clipboard.writeText(text);copyFeedback.textContent='Copied! ♡ Paste it into a DM to acocy.';}
    catch(e){
      const area=document.createElement('textarea');area.value=text;area.setAttribute('readonly','');area.style.position='fixed';area.style.left='-9999px';document.body.appendChild(area);area.select();
      try{if(document.execCommand('copy')){copyFeedback.textContent='Copied! ♡ Paste it into a DM to acocy.';}else throw new Error('Copy unavailable');}
      catch{copyFeedback.textContent='Automatic copy unavailable. The request is selected below so you can copy it manually.';
        const manual=document.createElement('textarea');manual.value=text;manual.rows=10;manual.readOnly=true;manual.setAttribute('aria-label','Commission request to copy manually');manual.style.width='100%';manual.style.marginTop='8px';copyFeedback.after(manual);manual.focus();manual.select();}
      finally{area.remove();}
    }
  });
  const contact=document.getElementById('social-links');
  const safeHandle=s=>/^[\w.]{1,30}$/.test(s);
  if (contact){
    const links=[];
    if (cfg.instagram && safeHandle(cfg.instagram)) links.push({name:'Instagram ↗',href:`https://www.instagram.com/${cfg.instagram}/`});
    if (cfg.tiktok && safeHandle(cfg.tiktok)) links.push({name:'TikTok ↗',href:`https://www.tiktok.com/@${cfg.tiktok}`});
    for(const l of links){const a=document.createElement('a');a.href=l.href;a.target='_blank';a.rel='noopener noreferrer';a.textContent=l.name;contact.appendChild(a);}
    if(links.length) contact.hidden=false;
  }
  if(!cfg.commissionsOpen){copyBtn.disabled=true;copyBtn.textContent='commissions currently closed';copyBtn.style.opacity='.55';copyFeedback.textContent='Please check back when commissions reopen.';}
  renderChoices();renderSummary();
})();
