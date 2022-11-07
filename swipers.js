 // Homepage Swiper
var swiper = new Swiper(".mySwiper", {
spaceBetween: 10,
slidesPerView: 4,
freeMode: true,
watchSlidesProgress: true,
});
var swiper2 = new Swiper(".mySwiper2", {
spaceBetween: 10,
navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
},
thumbs: {
    swiper: swiper,
},
});


// Homepage 
var swiper = new Swiper(".mySwiper3", {
spaceBetween: 10,
slidesPerView: 4,
freeMode: true,
watchSlidesProgress: true,
});
var swiper2 = new Swiper(".mySwiper4", {
spaceBetween: 10,
navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
},
thumbs: {
    swiper: swiper,
},
});


// Homepage 
var swiper = new Swiper(".mySwiper5", {
spaceBetween: 10,
slidesPerView: 4,
freeMode: true,
watchSlidesProgress: true,
});
var swiper2 = new Swiper(".mySwiper6", {
spaceBetween: 10,
navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
},
thumbs: {
    swiper: swiper,
},
});


// Section 2 - Homepage
var swiper = new Swiper(".mySwiper7", {
    effect: "cube", 
    loop: true,
    grabCursor: true,
    cubeEffect: {
      shadow: true,
      slideShadows: true,
      shadowOffset: 20,
      shadowScale: 0.94,
    },
    pagination: {
      el: ".swiper-pagination",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    // autoplay: {
    //   delay: 2000,
    //   disableOnInteraction: true,
// }
  });

  
  // Section 4 - Homepage
  var swiper = new Swiper(".mySwiper8", {
    effect: "flip",
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


 // Section 6 - Homepage
var swiper = new Swiper(".mySwiper9", {
    effect: "coverflow",
    loop: true,
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
},
    pagination: {
      el: ".swiper-pagination",
},
    navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
}
    // autoplay: {
    //   delay: 1000,
    //   disableOnInteraction: true,
});



// // Galeria de Fotos
// // Light Gallery 
// lightGallery(document.getElementById('lightgallery'), {
//   plugins: [lgZoom, lgThumbnail],
//   licenseKey: 'F9F48B9D-CE914B87-82A8E8C8-1F2BF649',
//   speed: 500,
//   // ... other settings
// });



// La Casa de Los Corrales
var swiper = new Swiper(".mySwiper1000", {
  loop: true,
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
});
var swiper2 = new Swiper(".mySwiper10001", {
  loop: true,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: swiper,
  },
});









