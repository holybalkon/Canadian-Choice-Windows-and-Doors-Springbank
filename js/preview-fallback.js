document.addEventListener('click',function(e){
  var q=e.target.closest('[data-accordion-link]');
  if(q){var was=q.classList.contains('is-active');
    setTimeout(function(){ if(q.classList.contains('is-active')!==was) return;
      var a=q.parentNode.querySelector('[data-accordion-body]');var open=!was;
      q.classList.toggle('is-active',open);a.classList.toggle('is-open',open);q.setAttribute('aria-expanded',open);},60);}
  var t=e.target.closest('[data-photo-tab]');
  if(t){var wasT=t.classList.contains('_is-active');
    setTimeout(function(){ if(t.classList.contains('_is-active')!==wasT) return;
      var box=t.closest('[data-photo-toggle]');var v=t.getAttribute('data-photo-tab');
      box.querySelectorAll('[data-photo-tab]').forEach(function(b){b.classList.toggle('_is-active',b===t)});
      box.querySelectorAll('[data-photo-view]').forEach(function(p){p.classList.toggle('_is-active',p.getAttribute('data-photo-view')===v)});},60);}
});
