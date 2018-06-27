// Password stuff
$(document).ready(function(){
    $('#page').hide();

});

function checkPassword() {

    var password = document.getElementById("passwordBox");
    var passwordText = password.value;

if(passwordText == "pass") {
     $('#password').remove()
     $('#page').show();
     AOS.init();
     return true;
    }
    $('.err').removeClass('hide');
    return false;
  }
  
  $(document).on("keyup", "input", function(){
    $('.err').addClass('hide');
  });
  
  $("#password").keyup(function(event) {
    if (event.keyCode === 13) {
        $("#enter").click();
    }
  });
  


AOS.init({easing:"ease-out-back",duration:1e3}),function(e){e(".js-scroll-trigger").click(function(){e(".navbar-collapse").collapse("hide")});new Swiper("#galleryIntro",{slidesPerView:"1",speed:1,centeredSlides:!0,autoplay:!0,effect:"fade"}),new Swiper("#gallery2018",{slidesPerView:"auto",centeredSlides:!0,spaceBetween:14,keyboard:{enabled:!0,onlyInViewport:!1},pagination:{el:".pag2018",type:"fraction"},navigation:{nextEl:".gallery2018-b",prevEl:".gallery2018-a"}}),new Swiper("#gallery2017",{slidesPerView:"auto",centeredSlides:!0,spaceBetween:14,keyboard:{enabled:!0,onlyInViewport:!1},pagination:{el:".pag2017",type:"fraction"},navigation:{nextEl:".gallery2017-b",prevEl:".gallery2017-a"}}),new Swiper("#gallery2016",{slidesPerView:"auto",centeredSlides:!0,spaceBetween:14,keyboard:{enabled:!0,onlyInViewport:!1},pagination:{el:".pag2016",type:"fraction"},navigation:{nextEl:".gallery2016-b",prevEl:".gallery2016-a"}}),new Swiper("#gallery2015",{slidesPerView:"auto",centeredSlides:!0,spaceBetween:14,keyboard:{enabled:!0,onlyInViewport:!1},pagination:{el:".pag2015",type:"fraction"},navigation:{nextEl:".gallery2015-b",prevEl:".gallery2015-a"}}),new Swiper("#gallery2014",{slidesPerView:"auto",centeredSlides:!0,spaceBetween:14,keyboard:{enabled:!0,onlyInViewport:!1},pagination:{el:".pag2014",type:"fraction"},navigation:{nextEl:".gallery2014-b",prevEl:".gallery2014-a"}}),new Swiper("#gallery2013",{slidesPerView:"auto",centeredSlides:!0,spaceBetween:14,keyboard:{enabled:!0,onlyInViewport:!1},pagination:{el:".pag2013",type:"fraction"},navigation:{nextEl:".gallery2013-b",prevEl:".gallery2013-a"}})}(jQuery),$(".video").parent().click(function(){$(this).children(".video").get(0).paused?($(this).children(".video").get(0).play(),$(this).children(".playpause").fadeOut()):($(this).children(".video").get(0).pause(),$(this).children(".playpause").fadeIn())}),$(".video").hover(function(){this.hasAttribute("controls")?this.removeAttribute("controls"):this.setAttribute("controls","controls")});

