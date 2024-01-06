var crsr = document.querySelector('.cursor');
var blur = document.querySelector('.blur-cursor');

document.addEventListener('mousemove',function(dets){
    crsr.style.left = dets.x+30+'px';
    crsr.style.top = dets.y+'px';
    blur.style.left = dets.x-250+'px';
    blur.style.top = dets.y-250+'px';
})
var navH4 = document.querySelectorAll('.nav h4');
navH4.forEach(function(elem){
    elem.addEventListener('mouseenter',function(){
        crsr.style.scale= 3;
        crsr.style.backgroundColor='transparent'
        crsr.style.border = '1px solid #fff'
    })
    elem.addEventListener('mouseleave',function(){
        crsr.style.scale= 1;
        crsr.style.backgroundColor='#95C00F'
        crsr.style.border = '0px solid #95C00F'
    })
})

gsap.to('.nav',{
    backgroundColor:'black',
    height:'90px',
    delay:0.5,
    scrollTrigger :{
        trigger:'.nav',
        scroller:'body',
        start:'top -2.5%',
        end:'-10%',
        scrub: 1
    }
})
gsap.to('.main',{
    backgroundColor:'#000',
    scrollTrigger:{
        trigger:'.main',
        scroll:'body',
        scrub:2,
        start:'top -30%',
        end:'top -70%'
    }
})
gsap.from('.about-us img,.about-us-in',{
    y:80,
    opacity:0,
    duration:1,
    stagger:0.4,
    scrollTrigger:{
        scroller:'body',
        trigger:'.about-us',
        // markers:true,
        start:'top 60%',
        end:'top 55%',
        scrub:1
    }
})
gsap.from('.card',{
    y:80,
    scale:0.8,
    opacity:0,
    duration:1,
    // stagger:0.4,
    scrollTrigger:{
        scroller:'body',
        trigger:'.card',
        // markers:true,
        start:'top 70%',
        end:'top 65%',
        scrub:1
    }
})
gsap.from('#colon1',{
    y:-60,
    x:-60,
    scrollTrigger:{
        scroller:'body',
        trigger:'#colon1',
        scrub:2,
        marker:true,
        start:'top 50%',
        end:'top 60%'
    }
})
gsap.from('#colon2',{
    y:60,
    x:60,
    scrollTrigger:{
        scroller:'body',
        trigger:'#colon1',
        scrub:2,
        marker:true,
        start:'top 50%',
        end:'top 60%'
    }
})
gsap.from('.page4>h1',{
    y:40,
    duration:1,
    scrollTrigger:{
        scroller:'body',
        trigger:'.page4>h1',
        scrub:2,
        // marker:true,
        start:'top 80%',
        end:'top 50%'
    }
})