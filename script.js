const menuBtn=document.querySelector('.menu-btn');
const nav=document.querySelector('.nav-links');
menuBtn?.addEventListener('click',()=>nav.classList.toggle('mobile'));

document.querySelectorAll('.nav-links a').forEach(a=>{
  a.addEventListener('click',()=>nav.classList.remove('mobile'));
});

const modal=document.getElementById('modal');
const openModal=()=>{modal.classList.add('open');modal.setAttribute('aria-hidden','false')};
const closeModal=()=>{modal.classList.remove('open');modal.setAttribute('aria-hidden','true')};

document.querySelectorAll('a[href="#contacts"], a[href="#contacts"] .x').forEach(el=>{
  el.addEventListener('click',(e)=>{
    // Only intercept CTA links; the footer itself remains normal.
    if(el.classList.contains('nav-cta') || el.classList.contains('btn-red')){
      e.preventDefault(); openModal();
    }
  });
});

document.querySelector('.modal-close')?.addEventListener('click',closeModal);
modal?.addEventListener('click',e=>{if(e.target===modal)closeModal()});
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeModal()});

document.getElementById('contactForm')?.addEventListener('submit',e=>{
  e.preventDefault();
  alert('Дякуємо! Демо-заявку сформовано. Для реального надсилання підключіть backend або Formspree.');
  e.target.reset(); closeModal();
});

const sections=[...document.querySelectorAll('main section[id]')];
const links=[...document.querySelectorAll('.nav-links a')];
const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      links.forEach(l=>l.classList.toggle('active',l.getAttribute('href')==='#'+entry.target.id));
    }
  });
},{rootMargin:'-45% 0px -50% 0px'});
sections.forEach(s=>observer.observe(s));
