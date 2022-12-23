// Navbar Change Color 
$(window).scroll(function(){
	$('nav').toggleClass('scrolled', $(this).scrollTop() > 80);
});


// Wait until DOM is ready
$(window).on("load", function(){
  gsap.registerPlugin(ScrollTrigger)


        // GSAP custom code goes here
        ScrollTrigger.matchMedia({
  
          // desktop
          "(min-width: 795px)": function() {
            // setup animations and ScrollTriggers for screens over 795px wide (desktop) here...
            // ScrollTriggers will be reverted/killed when the media query doesn't match anymore

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

            //  3 Photo Section
            // Left Image 
            gsap.to(".animateimage1", {
              duration: 0,  
              x: -100,
              opacity: 0,
            });

            gsap.to(".animateimage1", {
              duration: 1,  
              x: 0, 
              opacity: 1,
              ease: "ease",
              scrollTrigger : { 
                trigger: ".gallery2", 
                markers: false,
                start: "top 50%",
                end: "center 30%",
              }, 
            });

            // Top Right Image 
            gsap.to(".animateimage2", {
              duration: 0,  
              y: -100,
              opacity: 0,
            });

            gsap.to(".animateimage2", {
              duration: 1,  
              y: 0, 
              opacity: 1,
              delay: 0.5,
              ease: "ease",
              scrollTrigger : { 
                trigger: ".gallery2", 
                markers: false,
                start: "top 50%",
                end: "center 30%",
              }, 
            });

            // Bottom Right Image 
            gsap.to(".animateimage3", {
              duration: 0,  
              y: 100,
              opacity: 0,
            });

            gsap.to(".animateimage3", {
              duration: 1,  
              y: 0, 
              opacity: 1,
              delay: 1,
              ease: "ease",
              scrollTrigger : { 
                trigger: ".gallery2", 
                markers: false,
                start: "top 50%",
                end: "center 30%",
              }, 
            });
 
          }
        });

        // All
        //  Under Carousel 1
        gsap.to(".mySwiper", {
          duration: 0,  
          y: -100,
          opacity: 0,
        });

        gsap.to(".mySwiper", {
          duration: 1,  
          y: 0, 
          opacity: 1,
          ease: "ease",
          scrollTrigger : { 
            trigger: ".mySwiper", 
            markers: false,
            start: "top 80%",
            end: "center 30%",
          }, 
        });

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
            trigger: ".mySwiper", 
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
            trigger: ".mySwiper", 
            markers: false,
            start: "top 80%",
            end: "center 30%",
          }, 
        });

        //  Under Carousel 2
        gsap.to(".mySwiper3", {
          duration: 0,  
          y: -100,
          opacity: 0,
        });

        gsap.to(".mySwiper3", {
          duration: 1,  
          y: 0, 
          opacity: 1,
          ease: "ease",
          scrollTrigger : { 
            trigger: ".mySwiper3", 
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
            trigger: ".mySwiper3", 
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
            trigger: ".mySwiper3", 
            markers: false,
            start: "top 80%",
            end: "center 30%",
          }, 
        });

        //  Under Carousel 3
        gsap.to(".mySwiper5", {
          duration: 0,  
          y: -100,
          opacity: 0,
        });

        gsap.to(".mySwiper5", {
          duration: 1,  
          y: 0, 
          opacity: 1,
          ease: "ease",
          scrollTrigger : { 
            trigger: ".mySwiper5", 
            markers: false,
            start: "top 80%",
            end: "center 30%",
          }, 
        });

        // Arrow Animation for Slider 
        // Next 
        gsap.to(".arrow-next-animate3", {
          duration: 0,  
          x: 10,
          scale: 5,
          rotation: 360,
          opacity: 0,
        });

        gsap.to(".arrow-next-animate3", {
          duration: 1,  
          x: 0,
          rotation: 0,
          opacity: 1,
          scale: 1,
          delay: 1,
          ease: "ease",
          scrollTrigger : { 
            trigger: ".mySwiper5", 
            markers: false,
            start: "top 80%",
            end: "center 30%",
          }, 
        });

        // Prev 
        gsap.to(".arrow-prev-animate3", {
          duration: 0,  
          x: 10,
          scale: 5,
          rotation: -360,
          opacity: 0,
        });

        gsap.to(".arrow-prev-animate3", {
          duration: 1,  
          x: 0,
          rotation: 0,
          opacity: 1,
          scale: 1,
          delay: 1,
          ease: "ease",
          scrollTrigger : { 
            trigger: ".mySwiper5", 
            markers: false,
            start: "top 80%",
            end: "center 30%",
          }, 
        });

        //  3 Photo Section
        // Left Image 
        gsap.to(".animateimage1", {
          duration: 0,  
          x: -100,
          opacity: 0,
        });

        gsap.to(".animateimage1", {
          duration: 1,  
          x: 0, 
          opacity: 1,
          ease: "ease",
          scrollTrigger : { 
            trigger: ".gallery2", 
            markers: false,
            start: "top 50%",
            end: "center 30%",
          }, 
        });

        // Top Right Image 
        gsap.to(".animateimage2", {
          duration: 0,  
          x: 100,
          opacity: 0,
        });

        gsap.to(".animateimage2", {
          duration: 1,  
          x: 0, 
          opacity: 1,
          delay: 0.5,
          ease: "ease",
          scrollTrigger : { 
            trigger: ".gallery2", 
            markers: false,
            start: "top 50%",
            end: "center 30%",
          }, 
        });

        // Bottom Right Image 
        gsap.to(".animateimage3", {
          duration: 0,  
          x: 100,
          opacity: 0,
        });

        gsap.to(".animateimage3", {
          duration: 1,  
          x: 0, 
          opacity: 1,
          delay: 1,
          ease: "ease",
          scrollTrigger : { 
            trigger: ".gallery2", 
            markers: false,
            start: "top 50%",
            end: "center 30%",
          }, 
        });
      });



// Buttons 
// Offcanvas Nav Bar Reserve Button
document.querySelector('.button-reservenavbar').addEventListener('click', () => {
if (Weglot.getCurrentLang() == "es") {
  document.location.href = "casaloscorralesbookingES.html"
}
else {
  document.location.href = "casaloscorralesbookingEN.html"
}
})

// First Section 
document.querySelector('.btn-book1').addEventListener('click', () => {
if (Weglot.getCurrentLang() == "es") {
  document.location.href = "casaloscorralesbookingES.html"
}
else {
  document.location.href = "casaloscorralesbookingEN.html"
}
})

// Second Section
document.querySelector('.btn-book2').addEventListener('click', () => {
if (Weglot.getCurrentLang() == "es") {
  document.location.href = "casaloscorralesbookingES.html"
}
else {
  document.location.href = "casaloscorralesbookingEN.html"
}
})

// Third Section
document.querySelector('.btn-book3').addEventListener('click', () => {
if (Weglot.getCurrentLang() == "es") {
  document.location.href = "casaloscorralesbookingES.html"
}
else {
  document.location.href = "casaloscorralesbookingEN.html"
}
})

document.querySelector('.btn-goservices').addEventListener('click', () => {
  document.location.href = "servicios.html"
})

