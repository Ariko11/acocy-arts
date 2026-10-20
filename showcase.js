'use strict';
(()=>{const cfg=window.ACOCY||{};document.querySelectorAll('[data-year]').forEach(n=>n.textContent=new Date().getFullYear());document.querySelectorAll('[data-status]').forEach(n=>n.textContent=cfg.commissionsOpen?'commissions open':'commissions closed');
const list=document.getElementById('social-links');if(!list)return;const links=[];const valid=s=>typeof s==='string'&&/^[a-zA-Z0-9_.]{1,30}$/.test(s);
if(valid(cfg.tiktok))links.push({name:'TikTok',url:'https://www.tiktok.com/@'+cfg.tiktok});
if(valid(cfg.instagram))links.push({name:'Instagram',url:'https://www.instagram.com/'+cfg.instagram+'/'});
if(valid(cfg.x))links.push({name:'X / Twitter',url:'https://x.com/'+cfg.x});
for(const item of cfg.extraLinks||[]){if(!item||typeof item.name!=='string')continue;try{const u=new URL(item.url);if(u.protocol==='https:')links.push({name:item.name,url:u.href});}catch{}}
for(const item of links){const a=document.createElement('a');a.className='link-card';a.href=item.url;a.target='_blank';a.rel='noopener noreferrer';const label=document.createElement('span');label.textContent=item.name;const arrow=document.createElement('span');arrow.textContent='↗';arrow.setAttribute('aria-hidden','true');a.append(label,arrow);list.append(a);}
document.getElementById('social-empty').hidden=links.length>0;})();