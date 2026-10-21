(function(){
  var d=document, root=d.documentElement, C=window.SAMS||{};

  /* booking buttons, contact links, map */
  d.querySelectorAll('.book-link').forEach(function(a){
    if(C.bookingUrl){a.href=C.bookingUrl;a.target='_blank';a.rel='noopener'}
  });
  d.querySelectorAll('[data-link]').forEach(function(a){
    var k=a.getAttribute('data-link');
    if(k==='whatsapp'&&C.whatsapp) a.href='https://wa.me/'+String(C.whatsapp).replace(/\D/g,'');
    else if(k==='email'&&C.email) a.href='mailto:'+C.email;
    else if(k==='instagram'&&C.instagram) a.href=C.instagram;
    if((k==='whatsapp'&&C.whatsapp)||(k==='instagram'&&C.instagram)){a.target='_blank';a.rel='noopener'}
  });
  var map=d.querySelector('.map');
  if(map&&C.mapEmbed){map.innerHTML='<iframe src="'+C.mapEmbed+'" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="Map to Sam\'s Kitchen + Bar"></iframe>'}

  /* phone menu */
  var bg=d.getElementById('bg'), nv=d.getElementById('nv');
  function closeNav(){if(nv){nv.classList.remove('is-open');bg&&bg.setAttribute('aria-expanded','false')}}
  if(bg&&nv){
    bg.addEventListener('click',function(e){e.stopPropagation();var o=nv.classList.toggle('is-open');bg.setAttribute('aria-expanded',o?'true':'false')});
    nv.addEventListener('click',function(e){if(e.target.tagName==='A')closeNav()});
    d.addEventListener('click',function(e){if(!e.target.closest('.topbar'))closeNav()});
    d.addEventListener('keydown',function(e){if(e.key==='Escape')closeNav()});
    window.addEventListener('scroll',closeNav,{passive:true});
  }

  /* gentle reveal on scroll */
  root.classList.add('js');
  var els=d.querySelectorAll('.rv');
  if('IntersectionObserver' in window){
    var io=new IntersectionObserver(function(es){es.forEach(function(x){if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}})},{threshold:.1,rootMargin:'0px 0px -5% 0px'});
    els.forEach(function(el){io.observe(el)});
  }else{els.forEach(function(el){el.classList.add('in')})}
})();
