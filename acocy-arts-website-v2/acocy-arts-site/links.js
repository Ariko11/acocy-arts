/* acocy arts - link-in-bio page. Edit social links in site-config.js only. */
'use strict';
(function () {
  const cfg = window.ACOCY || {};
  const status = document.getElementById('links-status-text');
  const dot = document.getElementById('links-status-dot');
  const year = document.getElementById('bio-year');
  if (year) year.textContent = String(new Date().getFullYear());
  if (status) status.textContent = cfg.commissionsOpen ? 'commissions open ♡' : 'commissions currently closed';
  if (!cfg.commissionsOpen && dot) dot.classList.add('closed');
  const list = document.getElementById('custom-social-links');
  const empty = document.getElementById('links-empty');
  if (!list) return;
  const entries = [];
  const validHandle = v => typeof v === 'string' && /^[a-zA-Z0-9_.]{1,30}$/.test(v);
  if (validHandle(cfg.tiktok)) entries.push({name:'TikTok',url:'https://www.tiktok.com/@'+cfg.tiktok,note:'watch my art process',symbol:'♪'});
  if (validHandle(cfg.instagram)) entries.push({name:'Instagram',url:'https://www.instagram.com/'+cfg.instagram+'/',note:'artwork, reels & updates',symbol:'✿'});
  if (validHandle(cfg.x)) entries.push({name:'X / Twitter',url:'https://x.com/'+cfg.x,note:'find me on X',symbol:'✧'});
  if (Array.isArray(cfg.extraLinks)) {
    for (const item of cfg.extraLinks) {
      if (!item || typeof item.name !== 'string' || typeof item.url !== 'string') continue;
      try {
        const target = new URL(item.url);
        if (target.protocol !== 'https:' && target.protocol !== 'http:') continue;
        entries.push({name:item.name.slice(0,60),url:target.href,note:String(item.note||'').slice(0,90),symbol:'♡'});
      } catch (_) { /* unfinished URL; don't show button */ }
    }
  }
  if (empty) empty.hidden = entries.length > 0;
  for (const item of entries) {
    const a=document.createElement('a'); a.className='bio-link'; a.href=item.url; a.target='_blank'; a.rel='noopener noreferrer';
    const icon=document.createElement('span');icon.className='bio-link-icon';icon.setAttribute('aria-hidden','true');icon.textContent=item.symbol;
    const body=document.createElement('span');body.className='bio-link-body';
    const title=document.createElement('strong');title.textContent=item.name;
    const subtitle=document.createElement('small');subtitle.textContent=item.note;
    body.append(title,subtitle);
    const arrow=document.createElement('span');arrow.className='bio-link-arrow';arrow.setAttribute('aria-hidden','true');arrow.textContent='↗';
    a.append(icon,body,arrow);list.appendChild(a);
  }
})();
