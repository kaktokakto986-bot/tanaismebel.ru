/* Танаис — профессиональные дополнения. Подключается одной строкой перед </body>:
   <script src="pro.js"></script> */
(function(){
const BT=D.title,SK=D.createElement('style');
SK.textContent='#qb{display:flex;gap:8px;flex-wrap:wrap;margin:0 0 22px}#st:empty{display:none}'
+'.sk2{position:fixed;left:12px;top:-70px;z-index:300;padding:10px 16px;background:var(--ink);color:var(--bg);border-radius:10px}.sk2:focus{top:12px}'
+'.fb{position:fixed;right:16px;bottom:calc(16px + env(safe-area-inset-bottom,0px));z-index:90;display:flex;flex-direction:column;gap:10px;align-items:flex-end}'
+'.fb a,.fb button{border:0;border-radius:99px;min-width:48px;height:48px;padding:0 20px;font:500 15px Inter,sans-serif;color:#fff;background:linear-gradient(135deg,var(--ac),#ff8a3c);box-shadow:0 8px 20px -6px rgba(255,90,60,.6);cursor:pointer;text-decoration:none;display:grid;place-items:center}'
+'.fb #up{padding:0;width:48px;background:var(--ink);color:var(--bg);opacity:0;pointer-events:none;transition:opacity .3s}.fb #up.on{opacity:1;pointer-events:auto}'
+'#ck{position:fixed;left:12px;right:12px;bottom:calc(12px + env(safe-area-inset-bottom,0px));z-index:120;max-width:520px;background:var(--card);border:2px solid var(--ln);border-radius:18px;padding:14px 16px;box-shadow:0 12px 30px rgba(0,0,0,.4);font-size:14px;display:none}#ck.on{display:block}body.ck .fb{display:none}#ck .b{margin-top:10px}'
+'#pp{max-width:560px;width:calc(100% - 28px);max-height:86vh;border:2px solid var(--ln);border-radius:22px;background:var(--card);color:var(--ink);padding:22px}#pp::backdrop{background:rgba(20,23,43,.6)}#pp p{color:var(--mut);font-size:15px}'
+'#cx{margin-top:44px}#cx .md{white-space:pre-line}a[data-pp]{color:inherit}';
D.head.appendChild(SK);
/* фавикон из логотипа */
try{const u=(getComputedStyle($('.lg b')).getPropertyValue('--tn').match(/url\(["']?([^"')]+)/)||[])[1];
if(u){const im=new Image();im.onload=()=>{const c=D.createElement('canvas');c.width=c.height=96;const k=Math.min(96/im.width,96/im.height),w=im.width*k,h=im.height*k;c.getContext('2d').drawImage(im,(96-w)/2,(96-h)/2,w,h);const d=c.toDataURL('image/png');['icon','apple-touch-icon'].forEach(r=>{const l=D.createElement('link');l.rel=r;l.href=d;D.head.appendChild(l)})};im.src=u}}catch(e){}
/* ссылка «к каталогу», окно политики, уведомление о хранении данных */
D.body.insertAdjacentHTML('afterbegin','<a class="sk2" href="#catalog">Перейти к каталогу</a>');
D.body.insertAdjacentHTML('beforeend','<dialog id="pp"><h2 class="nm">Политика конфиденциальности</h2><p>Сайт не собирает имена, телефоны и адреса посетителей. В браузере сохраняется только небольшая отметка визита — для анонимной статистики посещений и чтобы не показывать это уведомление повторно.</p><p>Каталог хранится в сервисе Firebase (Google). Вход через Google нужен только владельцам сайта.</p><p>Когда вы нажимаете «Заказать», сообщение уходит в выбранный мессенджер, на почту или телефон — эти сервисы обрабатывают данные по собственным правилам. Если на сайте подключена Яндекс Метрика, она использует cookie для обезличенной статистики.</p><p>Вопросы по данным — через контакты на этой странице.</p><button type="button" class="b" data-pp="x">Закрыть</button></dialog><div id="ck" role="region" aria-label="Уведомление о данных">Сайт хранит в вашем браузере отметку визита для анонимной статистики. <a href="#" data-pp>Подробнее</a><br><button type="button" class="b" data-ck>Понятно</button></div><div class="fb" id="fb"><a id="fc" hidden></a><button type="button" id="up" aria-label="Наверх">↑</button></div>');
try{if(!localStorage.getItem('ckok')){$('#ck').classList.add('on');D.body.classList.add('ck')}}catch(e){}
const ft=$('footer');if(ft)ft.insertAdjacentHTML('beforeend','<a href="#" data-pp>Политика конфиденциальности</a>');
/* блок «О нас и контакты» */
const cs=D.createElement('section');cs.id='cx';if(ft)ft.before(cs);
let SI={};
function cx(){const l=lk(contact),a=SI.about,ad=SI.address,h=SI.hours,r=(k,v)=>v?'<div class="sr"><span>'+k+'</span><b>'+v+'</b></div>':'';
cs.innerHTML=(a||ad||h||l||own)?'<h2 class="nm">О нас и контакты</h2>'+(a?'<p class="md mm">'+esc(a)+'</p>':'')+'<div class="sp">'+r('Адрес',esc(ad))+r('Время работы',esc(h))+r('Связь',l?'<a href="'+esc(l)+'">'+esc(contact)+'</a>':'')+'</div>'+(own&&db?'<p><button type="button" class="b g" data-cx>Изменить описание и контакты</button></p>':''):''}
function fc(){const l=lk(contact),a=$('#fc');if(!a)return;if(l){a.hidden=false;a.href=l;a.textContent=/^tel:/.test(l)?'Позвонить':'Написать'}else a.hidden=true}
/* микроразметка для поисковиков */
function ld(){let s=$('#ld');if(!s){s=D.createElement('script');s.type='application/ld+json';s.id='ld';D.head.appendChild(s)}
const o={'@context':'https://schema.org','@graph':[{'@type':'Store','name':'Танаис','description':'Тумбы, зеркала и раковины для ванной и спальни','url':location.origin+location.pathname,telephone:/^tel:/.test(lk(contact))?lk(contact).slice(4):undefined,address:SI.address||undefined,openingHours:SI.hours||undefined},{'@type':'ItemList','itemListElement':items.map((i,k)=>({'@type':'ListItem','position':k+1,'item':{'@type':'Product','name':i.name,'description':i.desc||undefined,'category':C[i.cat],'offers':i.price?{'@type':'Offer','price':i.price,'priceCurrency':'RUB','availability':i.st=='order'?'https://schema.org/PreOrder':'https://schema.org/InStock'}:undefined}}))}]};
s.textContent=JSON.stringify(o).replace(/</g,'\\u003c')}
const r1=rc;rc=function(){r1();fc();ld();cx()};
if(db)db.doc('settings/site').onSnapshot(s=>{SI=s.data()||{};cx();ld()},()=>{});
/* заголовок вкладки при открытом товаре */
const mo=$('#mo');if(mo)new MutationObserver(()=>{D.title=mo.classList.contains('on')?((($('#mt')||{}).textContent||'')+' — Танаис'):BT}).observe(mo,{attributes:true,attributeFilter:['class']});
/* клики */
D.addEventListener('click',e=>{const t=e.target;
const p=t.closest('[data-pp]');if(p){e.preventDefault();if(p.dataset.pp=='x')$('#pp').close();else $('#pp').showModal();return}
if(t.closest('[data-ck]')){try{localStorage.setItem('ckok','1')}catch(x){}$('#ck').classList.remove('on');D.body.classList.remove('ck');return}
if(t.closest('#up')){scrollTo({top:0,behavior:'smooth'});return}
if(t.closest('[data-cx]')&&own&&db){const a=prompt('О магазине (несколько предложений)',SI.address===undefined&&SI.about===undefined?'':SI.about||'');if(a===null)return;
const ad=prompt('Адрес',SI.address||'');if(ad===null)return;const h=prompt('Время работы, например: Пн–Сб 10:00–19:00',SI.hours||'');if(h===null)return;
db.doc('settings/site').set({about:a.trim(),address:ad.trim(),hours:h.trim()},{merge:true}).catch(x=>alert('Не удалось: '+(x.code||x.message)))}});
addEventListener('scroll',()=>{const u=$('#up');if(u)u.classList.toggle('on',scrollY>600)},{passive:true});
rc();
})();
