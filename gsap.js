var tl = gsap.timeline()

tl.from("nav ",{
    y:-80,
    opacity:0,
    duration: 0.5,
    delay: 0.3,
    stagger: 0.3
})

gsap.from("#main #page1 ",{
    y:-20,
    opacity:0,
    duration: 0.5,
    delay: 0.3,
    stagger: 0.3
})

gsap.to("#nav",{
    backgroundColor:"black",
    duration: 1,
    height: "100px",
    scrollTrigger:{
        trigger: "#nav",
        scroller: "body",
       
        start: "top -10%",
        end: "top -30%%",
        scrub:1,
    }
})
//page2
tl.from(".page2 .campagins",{
    x:-30,
    opacity:0,
    duration: 0.5,
    delay: 0.3,
    stagger: 0.3,
    scrollTrigger:{
        trigger: ".page2 .campagins",
        scroller: "body",
       markers:true,
        start: "top 70%",
        end: "top 60%",
        scrub:1,
    }
})

tl.from(".page2 .flex-item .rowItem",{
    y:50,
    opacity:0,
    duration: 0.5,
    delay: 2,
    stagger: 1,
    scrollTrigger:{
        trigger: ".page2 .flex-item",
        scroller: "body",
       
        start: "top 60%",
        end: "top 30%",
        scrub:1,
    }
})

//page3

tl.from(".page3-left div",{
    x:50,
    opacity:0,
    duration: 1,
    delay: 2,
    stagger: 0.3,
    scrollTrigger:{
        trigger: ".page3-left div",
        scroller: "body",
       
        start: "top 70%",
        end: "top 50%",
        scrub:1,
    }
})

tl.from(".page3-right ",{
    x:-30,
    opacity:0,
    duration: 1,
    delay: 2,
    
    stagger: 1,
    scrollTrigger:{
        trigger: ".page3-right",
        scroller: "body",
       
        start: "top 50%",
        end: "top 30%",
        scrub:1,
    }
})


//page4
tl.from(".page4 .campagins",{
    x:-30,
    opacity:0,
    duration: 0.5,
    delay: 0.3,
    stagger: 0.3,
    scrollTrigger:{
        trigger: ".page4 .campagins",
        scroller: "body",
       
        start: "top 70%",
        end: "top 50%",
        scrub:1,
    }
})

tl.from(".page4 .flex-item .rowItem",{
    y:50,
    opacity:0,
    duration: 0.5,
    delay: 0.3,
    rotate:90,
    stagger: 1,
    scrollTrigger:{
        trigger: ".page4 .flex-item",
        scroller: "body",
       
        start: "top 50%",
        end: "top 10%",
        scrub:1,
    }
})

//page5

tl.from(".page5 .campagins",{
    x:30,
    opacity:0,
    duration: 0.5,
    delay: 0.3,
    stagger: 0.3,
    scrollTrigger:{
        trigger: ".page5 .campagins",
        scroller: "body",
       
        start: "top 70%",
        end: "top 50%",
        scrub:1,
    }
})

tl.from(".page5 .flex-item .rowItem",{
    x:50,
    opacity:0,
    duration: 0.5,
    delay: 0.3,
    
    stagger: 1,
    scrollTrigger:{
        trigger: ".page5 .flex-item",
        scroller: "body",
       
        start: "top 50%",
        end: "top 30%",
        scrub:1,
    }
})