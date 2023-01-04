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
      // ScrollTriggers will be reverted/killed when the media query doesn't match anymore.


      // Animation Slider TOP
      gsap.to(".sliderservices", {
        duration: 0,
        x: 1500,
        opacity: 0,
      });

      gsap.to(".sliderservices", {
        duration: 2,
        x: 0,
        opacity: 1,
        ease: "power3",
        scrollTrigger: {
          trigger: "#serviceSlider",
          markers: false,
          start: "top 40%",
          end: "center 30%",
        },
      });

      // Extra Services
      // Middle Card
      gsap.to(".animatecard-2", {
        y: 100,
        duration: 0,
        opacity: 0,
      });

      gsap.to(".animatecard-2", {
        y: 0,
        duration: 1,
        opacity: 1,
        ease: "ease",
        scrollTrigger: {
          trigger: "#serviceextraCards",
          markers: false,
          start: "top 60%",
          end: "center 30%",
        },
      });

      // Left Card
      gsap.to(".animatecard-1", {
        duration: 0,
        x: -100,
        opacity: 0,
      });

      gsap.to(".animatecard-1", {
        duration: 1,
        x: 0,
        opacity: 1,
        delay: 1,
        ease: "ease",
        scrollTrigger: {
          trigger: "#serviceextraCards",
          markers: false,
          start: "top 60%",
          end: "center 30%",
        },
      });

      // Right Card
      gsap.to(".animatecard-3", {
        duration: 0,
        x: 100,
        opacity: 0,
      });

      gsap.to(".animatecard-3", {
        duration: 1,
        x: 0,
        opacity: 1,
        delay: 1,
        ease: "ease",
        scrollTrigger: {
          trigger: "#serviceextraCards",
          markers: false,
          start: "top 60%",
          end: "center 30%",
        },
      });
    }
  });

  // All 

});

// Buttons 
document.querySelector('.button-reservemobile').addEventListener('click', () => {
  if (Weglot.getCurrentLang() == "es") {
    document.location.href = "reservationgeneralES.html"
  }
  else {
    document.location.href = "reservationgeneralEN.html"
  }
})

document.querySelector('.button-contacto1').addEventListener('click', () => {
  document.location.href = "./contacto.html"
})

document.querySelector('.button-contacto2').addEventListener('click', () => {
  document.location.href = "./contacto.html"
})

document.querySelector('.button-contacto3').addEventListener('click', () => {
  document.location.href = "./contacto.html"
})
// Buttons END

