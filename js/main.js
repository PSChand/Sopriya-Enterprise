document.addEventListener('DOMContentLoaded',()=>{
  const h=document.querySelector('.hamburger');
  const links=document.querySelector('.nav-links');
  if(h&&links){h.addEventListener('click',()=>links.classList.toggle('open'));}
  // active nav
  const path=location.pathname.split('/').pop()||'index.html';
  document.querySelectorAll('.nav-links a').forEach(a=>{
    if(a.getAttribute('href')===path) a.classList.add('active');
  });
  // fade in
  const obs=new IntersectionObserver(entries=>{
    entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')});
  },{threshold:.1});
  document.querySelectorAll('.fade-in').forEach(el=>obs.observe(el));
  // form
  const form=document.getElementById('enquiryForm');
  if(form){
    form.addEventListener('submit',e=>{
      e.preventDefault();
      const data=new FormData(form);
      const msg=`Enquiry from ${data.get('name')}\nCompany: ${data.get('company')}\nPhone: ${data.get('phone')}\nEmail: ${data.get('email')}\nProduct: ${data.get('product')}\nQuantity: ${data.get('quantity')}\nMessage: ${data.get('message')}`;
      const wa=document.getElementById('waNumber')?.value||'919999999999';
      window.open(`https://wa.me/${wa}?text=${encodeURIComponent(msg)}`,'_blank');
      alert('Thank you! Your enquiry has been prepared. Please send the WhatsApp message or email us.');
      form.reset();
    });
  }
});
