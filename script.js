'use strict';
    const navArr = document.querySelectorAll('.menu__links-item');
    const secArr = document.querySelectorAll('section');
    const toTop = document.querySelector('.to-top');

    toTop.addEventListener('click',()=>{
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    })

    window.addEventListener('scroll',() => {
        if(window.scrollY > 300){
            toTop.style.display = "block";
        } else {
            toTop.style.display = "none";
        }
    })

    navArr.forEach((el,i) =>{
        if(i > 0 && i < 4){
            el.addEventListener('click', ()=>{
                secArr[i-1].scrollIntoView({block: "start", behavior: "smooth"})
            })
        } else {
            el.addEventListener('click', ()=>{
                secArr[i].scrollIntoView({block: "start", behavior: "smooth"})
            })
    
        }
    })