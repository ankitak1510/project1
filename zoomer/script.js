const container= document.getElementById('container');
const img=  document.querySelectorAll('img');

container.addEventListener('mouseover',(e)=>{
    const x= e.clientX-e.target.offsetLeft;
    const y= e.clientY-e.target.offsetTop;
    

    img.style.transformOrigin = `${x}px ${y}px`;
    img.style.transform="scale2";
});
container.addEventListener('mouseleave',()=>{
    img.style.transformOrigin='center center';
    img.style.transform="scale(1)";
});