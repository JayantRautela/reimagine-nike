//animations for page 1.

function animatePage1(){
    const timeline1 = gsap.timeline();

    timeline1.from(".navbar .heading", {
        opacity: 0,
        delay: 0.4,
        duration: 0.8,      
        y: 40
    })

    timeline1.from(".navbar-right p", {
        opacity: 0,
        x: 50,
        duration: 0.4,
        stagger: 0.4
    })

    timeline1.from(".hero-section img", {   
    opacity: 0,
    duration: 0.5
    })

    timeline1.from(".first", {  
    opacity: 0,
    y: -50,
    duration: 1
    })
}

animatePage1();


//animations for page2.
