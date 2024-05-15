(function ($) {
  "use strict";

  // meanmenu
  $('#mobile-menu').meanmenu({
    meanMenuContainer: '.mobile-menu',
    meanScreenWidth: "992"
  });

  // $('.info-bar').on('click', function () {
  //   $('.extra-info').addClass('info-open');
  // })

  // $('.close-icon').on('click', function () {
  //   $('.extra-info').removeClass('info-open');
  // })


  // sticky
  var wind = $(window);
  var sticky = $('#sticky-header');
  wind.on('scroll', function () {
    var scroll = wind.scrollTop();
    if (scroll < 100) {
      sticky.removeClass('sticky');
    } else {
      sticky.addClass('sticky');
    }
  });

  // data - background
  $("[data-background]").each(function () {
    $(this).css("background-image", "url(" + $(this).attr("data-background") + ")")
  })

  /* case-active */
  $('.case-active').owlCarousel({
    loop: true,
    nav: false,
    dots: true,
    margin: 0,
    autoplay: false,
    navText: ['<i class="far fa-long-arrow-left"></i>', '<i class="far fa-long-arrow-right"></i>'],
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      576: {
        items: 1,
        nav: false,
      },
      768: {
        items: 2,
        nav: false,
      },
      992: {
        items: 3
      },
      1200: {
        items: 4
      }
    }
  })

  // scrollToTop
  $.scrollUp({
    scrollName: 'scrollUp', // Element ID
    topDistance: '300', // Distance from top before showing element (px)
    topSpeed: 300, // Speed back to top (ms)
    animation: 'fade', // Fade, slide, none
    animationInSpeed: 200, // Animation in speed (ms)
    animationOutSpeed: 200, // Animation out speed (ms)
    scrollText: '<i class="fas fa-angle-up"></i>', // Text for element
    activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
  });

  //Smooth scroll

  $(".nav-anchor")
    .not('[href=""]')
    .not('[href="#"]')
    .not('[href="#0"]')
    .on('click', function (event) {

      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();

        // Store hash
        var hash = this.hash;

        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function () {

          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      }
    });

})(jQuery);
