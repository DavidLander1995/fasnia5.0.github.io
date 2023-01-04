// Navbar
$(window).scroll(function () {
  $('nav').toggleClass('scrolled', $(this).scrollTop() > 80);
});
// Navbar END

// Wait until DOM is ready
$(window).on("load", function () {
  gsap.registerPlugin(ScrollTrigger)


  // GSAP custom code goes here
  ScrollTrigger.matchMedia({

    // desktop
    "(min-width: 795px)": function () {
      // setup animations and ScrollTriggers for screens over 795px wide (desktop) here...
      // ScrollTriggers will be reverted/killed when the media query doesn't match anymore

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


    }
  });

  // All 

});

// Buttons 
document.querySelector('.button-contacto1').addEventListener('click', () => {
  document.location.href = "./contacto.html"
})

document.querySelector('.button-contacto2').addEventListener('click', () => {
  document.location.href = "./contacto.html"
})