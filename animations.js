
// wait until DOM is ready
document.addEventListener("DOMContentLoaded", function(event) {
  gsap.registerPlugin(ScrollTrigger)


  
        // GSAP custom code goes here
        ScrollTrigger.matchMedia({
  
          // desktop
          "(min-width: 795px)": function() {
            // setup animations and ScrollTriggers for screens over 795px wide (desktop) here...
            // ScrollTriggers will be reverted/killed when the media query doesn't match anymore.

            // Title Hero
            gsap.to(".animatetitle1", {
              duration: 0,  
              y: -100,
              scale: 0,
              opacity: 0,
            });

            gsap.to(".animatetitle1", {
              duration: 1,  
              y: 0, 
              scale: 1,
              opacity: 1,
              ease: "circ",
              scrollTrigger : { 
                trigger: ".mySwiperhero", 
                markers: false,
                start: "top 45%",
                end: "center 30%",
              }, 
            });
          
            // Reserve Button Hero
            gsap.to(".animateherobutton1", {
              duration: 0,  
              y: -100,
              opacity: 0,
            });

            gsap.to(".animateherobutton1", {
              duration: 2,
              delay: 1,  
              y: 0, 
              opacity: 1,
              ease: "bounce",
              scrollTrigger : { 
                trigger: ".mySwiperhero", 
                markers: false,
                start: "top 45%",
                end: "center 30%",
              }, 
            });
            // Reserve Button 

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
              scrollTrigger : { 
                trigger: "#iconsection", 
                markers: false,
                start: "top 65%",
                end: "center 30%",
              }, 
            });
             // Icons


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
              scrollTrigger : { 
                trigger: ".slider4", 
                markers: false,
                start: "top 45%",
                end: "center 30%",
              }, 
            });
            // Houses 

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
              scrollTrigger : { 
                trigger: ".home-icons2", 
                markers: false,
                start: "top 80%",
                end: "center 30%",
              }, 
            });

            // Icons 

            // Facilities
            gsap.to(".animatefacility1", {
              duration: 0,  
              y: -100,
              opacity: 0,
            });

            gsap.to(".animatefacility1", {
              duration: 2,  
              y: 0, 
              opacity: 1,
              ease: "power2",
              scrollTrigger : { 
                trigger: ".slider5", 
                markers: false,
                start: "top 45%",
                end: "center 30%",
              }, 
            });
            // Facilities

            // Facilities 
            gsap.to(".mySwiper9", {
              duration: 0,  
              x: -100,
              opacity: 0,
            });

            gsap.to(".mySwiper9", {
              duration: 2,  
              opacity: 1,
              x: 0,
              ease: "slow",
              scrollTrigger : { 
                trigger: ".mySwiper9", 
                markers: false,
                start: "top 60%",
                end: "center 30%",
              }, 
            });

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
              scrollTrigger : { 
                trigger: ".experience-intro", 
                markers: false,
                start: "top 30%",
                end: "center 30%",
              }, 
            });
            
            // // Slider 
            // gsap.to(".experienceanimate1", {
            //   duration: 0,  
            //   x: 500, 
            //   opacity: 0,
            // });

            // gsap.to(".experienceanimate1", {
            //   duration: 4,
            //   delay: 0.5,  
            //   x: 0, 
            //   opacity: 1,
            //   ease: "expo",
            //   scrollTrigger : { 
            //     trigger: ".experience-intro", 
            //     markers: false,
            //     start: "top 30%",
            //     end: "center 30%",
            //   }, 
            // });
            // Experiences

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
              scrollTrigger : { 
                trigger: "#section8", 
                markers: false,
                start: "top 30%",
                end: "center 30%",
              }, 
            });

          }
        });


        // All 

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
            markers: false,
            start: "top 90%",
            end: "center 30%",
          }, 
        });

        // Mobile Reserve Button
        gsap.to(".animatemobilebook", {
          duration: 0,  
          y: 100,
          scale: 0,
          opacity: 0,
        });

        gsap.to(".animatemobilebook", {
          duration: 2,  
          y: 0, 
          scale: 1,
          opacity: 1,
          ease: "power2",
          scrollTrigger : { 
            trigger: ".mySwiperhero", 
            markers: false,
            start: "top 90%",
            end: "center 30%",
          }, 
        });


   

            
        });






