// Wait until DOM is ready
$(window).on("load", function () {
  gsap.registerPlugin(ScrollTrigger)

  // GSAP custom code goes here
  ScrollTrigger.matchMedia({

    // desktop
    "(min-width: 795px)": function () {
      // setup animations and ScrollTriggers for screens over 795px wide (desktop) here...
      // ScrollTriggers will be reverted/killed when the media query doesn't match anymore.

      // Social Media Icons Dekstop
      gsap.to(".animatesocial1", {
        duration: 0,
        x: 100,
        opacity: 1,
      });

      gsap.to(".animatesocial1", {
        duration: 2,
        x: 0,
        opacity: 1,
        ease: "expo",
        scrollTrigger: {
          trigger: "mySwiperhero",
          markers: false,
          start: "top 65%",
          end: "center 30%",
        },
      });

      gsap.to(".animatesocial2", {
        duration: 0,
        x: 100,
        opacity: 1,
      });

      gsap.to(".animatesocial2", {
        duration: 2,
        x: 0,
        opacity: 1,
        delay: 0.5,
        ease: "expo",
        scrollTrigger: {
          trigger: "mySwiperhero",
          markers: false,
          start: "top 65%",
          end: "center 30%",
        },
      });

      gsap.to(".animatesocial3", {
        duration: 0,
        x: 100,
        opacity: 1,
      });

      gsap.to(".animatesocial3", {
        duration: 2,
        x: 0,
        opacity: 1,
        delay: 1,
        ease: "expo",
        scrollTrigger: {
          trigger: "mySwiperhero",
          markers: false,
          start: "top 65%",
          end: "center 30%",
        },
      });


      // Icons
      gsap.to(".animateicons1", {
        duration: 0,
        x: 2500,
        opacity: 1,
      });

      gsap.to(".animateicons1", {
        duration: 3,
        x: 0,
        opacity: 1,
        ease: "expo",
        scrollTrigger: {
          trigger: "#iconsection",
          markers: false,
          start: "top 65%",
          end: "center 30%",
        },
      });
      // Icons

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
        scrollTrigger: {
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
        scrollTrigger: {
          trigger: "#banner-selection",
          markers: false,
          start: "top 40%",
          end: "center 30%",
        },
      });
      // Banner

      // Icons
      gsap.to(".animateicons2", {
        duration: 0,
        x: 2500,
        opacity: 1,
      });

      gsap.to(".animateicons2", {
        duration: 3,
        x: 0,
        opacity: 1,
        ease: "expo",
        scrollTrigger: {
          trigger: ".home-icons2",
          markers: false,
          start: "top 80%",
          end: "center 30%",
        },
      });

      // Icons 


      // Facilities 
      // gsap.to(".mySwiper9", {
      //   duration: 0,  
      //   x: -100,
      //   opacity: 0,
      // });

      // gsap.to(".mySwiper9", {
      //   duration: 2,  
      //   opacity: 1,
      //   x: 0,
      //   ease: "ease",
      //   scrollTrigger : { 
      //     trigger: ".mySwiper9", 
      //     markers: false,
      //     start: "top 60%",
      //     end: "center 30%",
      //   }, 
      // });
      // Facilities Slider


      // Experiences 
      // Title     
      gsap.to(".experienceanimatetitle", {
        duration: 0,
        x: -100,
        opacity: 0,
      });

      gsap.to(".experienceanimatetitle", {
        duration: 4,
        x: 0,
        opacity: 1,
        ease: "expo",
        scrollTrigger: {
          trigger: ".experience-intro",
          markers: false,
          start: "top 30%",
          end: "center 30%",
        },
      });
      // Experiences 

      //  Find Us
      gsap.to(".findusanimate1", {
        duration: 0,
        opacity: 0,
      });

      gsap.to(".findusanimate1", {
        duration: 1,
        opacity: 1,
        ease: "ease",
        scrollTrigger: {
          trigger: "#section_findus",
          markers: false,
          start: "top 30%",
          end: "center 30%",
        },
      });

      // Find Us Map
      gsap.to(".findusmapanimate", {
        duration: 0,
        opacity: 0,
        scale: 0,
        x: 200,
      });

      gsap.to(".findusmapanimate", {
        duration: 1,
        opacity: 1,
        delay: 0.5,
        x: 0,
        scale: 1,
        ease: "ease",
        scrollTrigger: {
          trigger: "#section_findus",
          markers: false,
          start: "top 30%",
          end: "center 30%",
        },
      });

      // Gallery
      // Image Far Left 
      gsap.to(".gallery1animate", {
        duration: 0,
        opacity: 0,
        x: -200,
      });

      gsap.to(".gallery1animate", {
        duration: 1,
        opacity: 1,
        x: 0,
        ease: "ease",
        scrollTrigger: {
          trigger: ".gallery",
          markers: false,
          start: "top 30%",
          end: "center 30%",
        },
      });

      // Image Middle Top
      gsap.to(".gallery2animate", {
        duration: 0,
        opacity: 0,
        y: -200,
      });

      gsap.to(".gallery2animate", {
        duration: 1,
        opacity: 1,
        delay: 0.5,
        y: 0,
        ease: "ease",
        scrollTrigger: {
          trigger: ".gallery",
          markers: false,
          start: "top 30%",
          end: "center 30%",
        },
      });

      // Image Far Right
      gsap.to(".gallery3animate", {
        duration: 0,
        opacity: 0,
        x: 200,
      });

      gsap.to(".gallery3animate", {
        duration: 1,
        opacity: 1,
        delay: 0.75,
        x: 0,
        ease: "ease",
        scrollTrigger: {
          trigger: ".gallery",
          markers: false,
          start: "top 30%",
          end: "center 30%",
        },
      });

      // Middle Bottom
      gsap.to(".gallery4animate", {
        duration: 0,
        opacity: 0,
        y: 200,
      });

      gsap.to(".gallery4animate", {
        duration: 1,
        opacity: 1,
        delay: 1,
        y: 0,
        ease: "ease",
        scrollTrigger: {
          trigger: ".gallery",
          markers: false,
          start: "top 30%",
          end: "center 30%",
        },
      });

      // Video 
      gsap.to(".animatevideo1", {
        duration: 0,
        opacity: 0,
        scale: 0,
      });

      gsap.to(".animatevideo1", {
        duration: 2,
        opacity: 1,
        scale: 1,
        ease: "slow",
        scrollTrigger: {
          trigger: "#section8",
          markers: false,
          start: "top 30%",
          end: "center 30%",
        },
      });

      // Clients Reviews
      gsap.to(".reviewanimatetitle", {
        duration: 0,
        y: -100,
        opacity: 0,
      });

      gsap.to(".reviewanimatetitle", {
        duration: 1,
        y: 0,
        opacity: 1,
        ease: "power1",
        scrollTrigger: {
          trigger: "#housereviews",
          markers: false,
          start: "top 60%",
          end: "center 30%",
        },
      });


    }
  });


  // All

  // Reserve Mobile
  gsap.to(".btn-bookmobile", {
    duration: 0,
    y: 100,
    scale: 0,
    opacity: 0,
  });

  gsap.to(".btn-bookmobile", {
    duration: 1,
    y: 0,
    scale: 1,
    opacity: 1,
    ease: "power2",
    scrollTrigger: {
      trigger: ".navbar",
      markers: false,
      start: "top 90%",
      end: "center 30%",
    },
  });

  // Social Media Icons Mobile
  gsap.to(".herosocial-iconsmobile", {
    duration: 0,
    y: 100,
    scale: 0,
    opacity: 0,
  });

  gsap.to(".herosocial-iconsmobile", {
    duration: 1,
    y: 0,
    scale: 1,
    delay: 1,
    opacity: 1,
    ease: "power2",
    scrollTrigger: {
      trigger: ".navbar",
      markers: false,
      start: "top 90%",
      end: "center 30%",
    },
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
    scrollTrigger: {
      trigger: ".index-start",
      markers: false,
      start: "top 90%",
      end: "center 30%",
    },
  });


  // Houses 
  gsap.to(".animatehouse1", {
    duration: 0,
    y: -100,
    opacity: 0,
  });

  gsap.to(".animatehouse1", {
    duration: 2,
    y: 0,
    opacity: 1,
    ease: "power2",
    scrollTrigger: {
      trigger: ".slider4",
      markers: false,
      start: "top 45%",
      end: "center 30%",
    },
  });
  // Houses

  // Facilities
  gsap.to(".animatefacility1", {
    duration: 0,
    y: -100,
    opacity: 0,
  });

  gsap.to(".animatefacility1", {
    duration: 2,
    delay: 0.5,
    y: 0,
    opacity: 1,
    ease: "power2",
    scrollTrigger: {
      trigger: ".slider5",
      markers: false,
      start: "top 50%",
      end: "center 30%",
    },
  });
  // Facilities

});






