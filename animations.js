gsap.registerPlugin(ScrollTrigger)


gsap.from(".navbar", {
  duration: 1,
  y: "-100%",
  ease: 'bounce',
});

// Logo
gsap.to(".intro-logo", {
  duration: 0,  
  y: -100,
  scale: 0,
  opacity: 0,
});

gsap.to(".intro-logo", {
  duration: 2,  
  y: 0, 
  scale: 1,
  opacity: 1,
  ease: "power2",
  scrollTrigger : { 
    trigger: ".index-start", 
    markers: true,
    start: "top 90%",
    end: "center 30%",
  }, 
});



// Banner
gsap.to([".banneranimate1", ".banneranimate3"], {
  duration: 0,  
  y: 100, 
  opacity: 0,
});

gsap.to(".banneranimate2", {
  duration: 0,  
  y: -100, 
  opacity: 0,
});

gsap.to([".banneranimate1", ".banneranimate3"], {
  duration: 1,  
  y: 0, 
  opacity: 1,
  stagger: 0.5,
  scrollTrigger : { 
    trigger: "#banner-selection", 
    markers: false,
    start: "top 40%",
    end: "center 30%",
  }, 
});

gsap.to(".banneranimate2", {
  duration: 1,  
  y: 0, 
  opacity: 1,
  scrollTrigger : { 
    trigger: "#banner-selection", 
    markers: false,
    start: "top 40%",
    end: "center 30%",
  }, 
});
// Banner

// Experiences 
gsap.to(".experienceanimate1", {
  duration: 0,  
  x: 500, 
  opacity: 0,
});

gsap.to(".experienceanimate1", {
  duration: 2,  
  x: 0, 
  opacity: 1,
  ease: "slow",
  scrollTrigger : { 
    trigger: ".experience-intro", 
    markers: false,
    start: "top 30%",
    end: "center 30%",
  }, 
});
// Experiences