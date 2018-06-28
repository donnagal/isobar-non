AOS.init({
  easing: 'ease-out-back',
  duration: 1000
});

(function($) {

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
      $('.navbar-collapse').collapse('hide');
  });


  //idangero.us/swiper/api/

  var swiper = new Swiper('#galleryIntro', {
      lazy: true,
      slidesPerView: '1',
      speed: 1,
      centeredSlides: true,
      autoplay: true,
      effect: 'fade',
  });

  var swiper = new Swiper('#gallery2018', {
      lazy: true,
      slidesPerView: 'auto',
      centeredSlides: true,
      spaceBetween: 14,
      keyboard: {
          enabled: true,
          onlyInViewport: false,
      },
      pagination: {
          el: '.pag2018',
          type: 'fraction',
      },
      navigation: {
          nextEl: '.gallery2018-b',
          prevEl: '.gallery2018-a',
      },
  });

  var swiper = new Swiper('#gallery2017', {
      lazy: true,
      slidesPerView: 'auto',
      centeredSlides: true,
      spaceBetween: 14,
      keyboard: {
          enabled: true,
          onlyInViewport: false,
      },
      pagination: {
          el: '.pag2017',
          type: 'fraction',
      },
      navigation: {
          nextEl: '.gallery2017-b',
          prevEl: '.gallery2017-a',
      },
  });

  var swiper = new Swiper('#gallery2016', {
      lazy: true,
      slidesPerView: 'auto',
      centeredSlides: true,
      spaceBetween: 14,
      keyboard: {
          enabled: true,
          onlyInViewport: false,
      },
      pagination: {
          el: '.pag2016',
          type: 'fraction',
      },
      navigation: {
          nextEl: '.gallery2016-b',
          prevEl: '.gallery2016-a',
      },
  });


  var swiper = new Swiper('#gallery2015', {
      lazy: true,
      slidesPerView: 'auto',
      centeredSlides: true,
      spaceBetween: 14,
      keyboard: {
          enabled: true,
          onlyInViewport: false,
      },
      pagination: {
          el: '.pag2015',
          type: 'fraction',
      },
      navigation: {
          nextEl: '.gallery2015-b',
          prevEl: '.gallery2015-a',
      },
  });


  var swiper = new Swiper('#gallery2014', {
      lazy: true,
      slidesPerView: 'auto',
      centeredSlides: true,
      spaceBetween: 14,
      keyboard: {
          enabled: true,
          onlyInViewport: false,
      },
      pagination: {
          el: '.pag2014',
          type: 'fraction',
      },
      navigation: {
          nextEl: '.gallery2014-b',
          prevEl: '.gallery2014-a',
      },
  });


  var swiper = new Swiper('#gallery2013', {
      lazy: true,
      slidesPerView: 'auto',
      centeredSlides: true,
      spaceBetween: 14,
      keyboard: {
          enabled: true,
          onlyInViewport: false,
      },
      pagination: {
          el: '.pag2013',
          type: 'fraction',
      },
      navigation: {
          nextEl: '.gallery2013-b',
          prevEl: '.gallery2013-a',
      },
  });

})(jQuery);

// Video player, play and pause 
$('.video').parent().click(function() {
  if ($(this).children(".video").get(0).paused) {
      $(this).children(".video").get(0).play();
      $(this).children(".playpause").fadeOut();
  } else {
      $(this).children(".video").get(0).pause();
      $(this).children(".playpause").fadeIn();
  }
});

// Video player, show controls on hover 
$('.video').hover(function toggleControls() {
  if (this.hasAttribute("controls")) {
      this.removeAttribute("controls")
  } else {
      this.setAttribute("controls", "controls")
  }
})

