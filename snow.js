function createSnowFlake(){const e=document.createElement("div");e.classList.add("snowflake"),e.innerHTML="&#10052;",e.style.left=`${Math.random()*window.innerWidth}px`,e.style.animationDuration=`${Math.random()*3+2}s`,e.style.opacity=Math.random(),e.style.fontSize=`${Math.random()*10+10}px`,document.body.appendChild(e),setTimeout(()=>{e.remove()},1e3*parseFloat(e.style.animationDuration))}function initSnowEffect(){setInterval(createSnowFlake,50)}document.addEventListener("DOMContentLoaded",initSnowEffect);
