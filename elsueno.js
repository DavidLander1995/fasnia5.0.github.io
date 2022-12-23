// Navbar 
$(window).scroll(function(){
  $('nav').toggleClass('scrolled', $(this).scrollTop() > 80);
  });
// Navbar END 

// Wait until DOM is ready
$(window).on("load", function(){
  gsap.registerPlugin(ScrollTrigger)


        // GSAP custom code goes here
        ScrollTrigger.matchMedia({
  
          // desktop
          "(min-width: 795px)": function() {
            // setup animations and ScrollTriggers for screens over 795px wide (desktop) here...
            // ScrollTriggers will be reverted/killed when the media query doesn't match anymore.


            // 3 Pictures
            // Left Image 
            gsap.to(".animateimg-1", {
              duration: 0,  
              x: -100,
              opacity: 0,
            });

            gsap.to(".animateimg-1", {
              duration: 1,  
              x: 0, 
              opacity: 1,
              ease: "ease",
              scrollTrigger : { 
                trigger: "#elsuenoStory", 
                markers: false,
                start: "bottom 65%",
                end: "center 30%",
              }, 
            });

            // Right Image 
            gsap.to(".animateimg-3", {
              duration: 0,  
              x: 100,
              opacity: 0,
            });

            gsap.to(".animateimg-3", {
              duration: 1,  
              x: 0, 
              opacity: 1,
              ease: "ease",
              scrollTrigger : { 
                trigger: "#elsuenoStory", 
                markers: false,
                start: "bottom 65%",
                end: "center 30%",
              }, 
            });

            // Middle Image
            gsap.to(".animateimg-2", {
              duration: 0,  
              y: 100,
              opacity: 0,
            });

            gsap.to(".animateimg-2", {
              duration: 1,  
              y: 0, 
              opacity: 1,
              delay: 1,
              ease: "ease",
              scrollTrigger : { 
                trigger: "#elsuenoStory", 
                markers: false,
                start: "bottom 65%",
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
              scrollTrigger : { 
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
              scrollTrigger : { 
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
              scrollTrigger : { 
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
              scrollTrigger : { 
                trigger: ".gallery", 
                markers: false,
                start: "top 30%",
                end: "center 30%",
              } 
            });
   
          }
        });
            
            
      });

      // All 
      // Arrow Animation for Slider 
        // Next 
        gsap.to(".arrow-next-animate1", {
          duration: 0,  
          x: 10,
          scale: 5,
          rotation: 360,
          opacity: 0,
        });

        gsap.to(".arrow-next-animate1", {
          duration: 1,  
          x: 0,
          rotation: 0,
          opacity: 1,
          scale: 1,
          delay: 1,
          ease: "ease",
          scrollTrigger : { 
            trigger: ".mySwiper11", 
            markers: false,
            start: "top 80%",
            end: "center 30%",
          }, 
        });

        // Prev 
        gsap.to(".arrow-prev-animate1", {
          duration: 0,  
          x: 10,
          scale: 5,
          rotation: -360,
          opacity: 0,
        });

        gsap.to(".arrow-prev-animate1", {
          duration: 1,  
          x: 0,
          rotation: 0,
          opacity: 1,
          scale: 1,
          delay: 1,
          ease: "ease",
          scrollTrigger : { 
            trigger: ".mySwiper11", 
            markers: false,
            start: "top 80%",
            end: "center 30%",
          }, 
        });


         // Arrow Animation for Slider 
        // Next 
        gsap.to(".arrow-next-animate2", {
          duration: 0,  
          x: 10,
          scale: 5,
          rotation: 360,
          opacity: 0,
        });

        gsap.to(".arrow-next-animate2", {
          duration: 1,  
          x: 0,
          rotation: 0,
          opacity: 1,
          scale: 1,
          delay: 1,
          ease: "ease",
          scrollTrigger : { 
            trigger: ".mySwiper12", 
            markers: false,
            start: "top 80%",
            end: "center 30%",
          }, 
        });

        // Prev 
        gsap.to(".arrow-prev-animate2", {
          duration: 0,  
          x: 10,
          scale: 5,
          rotation: -360,
          opacity: 0,
        });

        gsap.to(".arrow-prev-animate2", {
          duration: 1,  
          x: 0,
          rotation: 0,
          opacity: 1,
          scale: 1,
          delay: 1,
          ease: "ease",
          scrollTrigger : { 
            trigger: ".mySwiper12", 
            markers: false,
            start: "top 80%",
            end: "center 30%",
          }, 
        });

        // Read More Button Animation
        gsap.to(".SeeMore", {
          duration: 0,  
          y: -100,
          opacity: 0,
          scale: 2.5
        });

        gsap.to(".SeeMore", {
          duration: 1, 
          scale: 1,
          delay: 2,
          y: 0, 
          opacity: 1,
          ease: "bounce",
          scrollTrigger : { 
            trigger: "#elsuenoStory", 
            markers: false,
            start: "top 20%",
            end: "center 30%",
          }, 
        });

        
