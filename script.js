(function(){
  var KEY='dizva-lang';
  function all(sel){return [].slice.call(document.querySelectorAll(sel))}
  // Atributos que cambian según el idioma: [atributo en inglés, atributo original]
  var attrs=[['data-en-alt','alt'],['data-en-href','href'],['data-en-ph','placeholder'],['data-en-aria','aria-label']];
  var els=all('[data-en]');
  els.forEach(function(e){e.setAttribute('data-es',e.innerHTML)});
  attrs.forEach(function(a){all('['+a[0]+']').forEach(function(e){e.setAttribute('data-es-'+a[1],e.getAttribute(a[1])||'')})});
  var titles={es:document.title,en:document.documentElement.getAttribute('data-title-en')||'DIZVA Studio — Your essence, in digital'};
  function set(l){
    var en=l==='en';
    els.forEach(function(e){e.innerHTML=e.getAttribute(en?'data-en':'data-es')});
    attrs.forEach(function(a){all('['+a[0]+']').forEach(function(e){e.setAttribute(a[1],e.getAttribute(en?a[0]:'data-es-'+a[1]))})});
    all('input[name="idioma"]').forEach(function(i){i.value=l});
    document.documentElement.lang=l; document.title=titles[l];
    all('.lang button').forEach(function(b){b.setAttribute('aria-pressed',String(b.getAttribute('data-lang')===l))});
    try{localStorage.setItem(KEY,l)}catch(e){}
  }
  all('.lang button').forEach(function(b){b.addEventListener('click',function(){set(b.getAttribute('data-lang'))})});
  var saved=null; try{saved=localStorage.getItem(KEY)}catch(e){}
  var q=(location.search.match(/lang=(es|en)/)||[])[1];
  if(q||saved==='en') set(q||saved);
})();
