(function(){
  var KEY='dizva-lang';
  var els=[].slice.call(document.querySelectorAll('[data-en]'));
  var alts=[].slice.call(document.querySelectorAll('[data-en-alt]'));
  els.forEach(function(e){e.setAttribute('data-es',e.innerHTML)});
  alts.forEach(function(e){e.setAttribute('data-es-alt',e.getAttribute('alt'))});
  var titles={es:document.title,en:'DIZVA Studio — Your essence, in digital'};
  function set(l){
    els.forEach(function(e){e.innerHTML=e.getAttribute(l==='en'?'data-en':'data-es')});
    alts.forEach(function(e){e.setAttribute('alt',e.getAttribute(l==='en'?'data-en-alt':'data-es-alt'))});
    document.documentElement.lang=l; document.title=titles[l];
    [].forEach.call(document.querySelectorAll('.lang button'),function(b){b.setAttribute('aria-pressed',String(b.getAttribute('data-lang')===l))});
    try{localStorage.setItem(KEY,l)}catch(e){}
  }
  [].forEach.call(document.querySelectorAll('.lang button'),function(b){b.addEventListener('click',function(){set(b.getAttribute('data-lang'))})});
  var saved=null; try{saved=localStorage.getItem(KEY)}catch(e){}
  var q=(location.search.match(/lang=(es|en)/)||[])[1];
  if(q||saved==='en') set(q||saved);
})();
