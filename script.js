
document.querySelectorAll('.faq-btn').forEach(btn=>{
 btn.addEventListener('click',()=>{
   const c=btn.nextElementSibling;
   c.style.display=c.style.display==='block'?'none':'block';
 });
});
