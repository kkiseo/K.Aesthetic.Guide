
const observer=new IntersectionObserver(entries=>{
entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('show');});
});
document.querySelectorAll('section').forEach(s=>observer.observe(s));

window.addEventListener('scroll',()=>{
const nav=document.querySelector('nav');
window.scrollY>50?nav.classList.add('scrolled'):nav.classList.remove('scrolled');
});

document.querySelectorAll('.counter').forEach(counter=>{
const target=+counter.dataset.target;
let n=0;
const step=()=>{
n+=Math.ceil(target/100);
if(n<target){counter.textContent=n;requestAnimationFrame(step);}
else counter.textContent=target;
};
step();
});
