$(window).on("load", function () {
  // Preload
  $("#preload").fadeOut(500);
});


jQuery(document).ready(function () {

  // Owl Carousel Team
  $('.team-carousel').owlCarousel({
    loop: true,
    margin: 20,
    nav: false,
    dots: atrue,
    autoplay: false,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1000: {
        items: 4
      }
    }
  });

  // Accordion Faq
  $('.wrapper-accordion .content-accordion:first-of-type').show();
  $('.wrapper-accordion h3:first-of-type').children('.fa-solid').removeClass('fa-chevron-down').addClass('fa-chevron-up');

  var titleAccordion = $('.wrapper-accordion h3');
  var contentAccordion = $('.content-accordion');


  titleAccordion.click(function () {
    var content = $(this).next(contentAccordion);
    if (content.is(':visible')) {
      content.slideUp();
      $(this).children('.fa-solid').removeClass('fa-chevron-up').addClass('fa-chevron-down');
    } else {
      contentAccordion.slideUp();
      content.slideDown();
      titleAccordion.children('.fa-solid').removeClass('fa-chevron-up').addClass('fa-chevron-down');
      $(this).children('.fa-solid').removeClass('fa-chevron-down').addClass('fa-chevron-up');
    }

  });

  // OWl Carousel Testimonials
  $('.testimonials-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 1
      }
    }
  });

  // Scroll Top Button
  $('#scroll-top').click(function () {
    $('body,html').animate({
      scrollTop: 0
    }, 800);
    return false;
  });

  // Scroll Top
  $('#scroll-top').hide();
  $(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
      $('#scroll-top').fadeIn();
    } else {
      $('#scroll-top').fadeOut();
    }
  });

  // scroll fixed menu
  $(window).scroll(function () {
    var headerTop = $('.wrapper-top-header').height();
    if ($(this).scrollTop() >= headerTop) {
      $('.wrapper-bottom-header').addClass('fixedmenu');
    } else {
      $('.wrapper-bottom-header').removeClass('fixedmenu');
    }
  });

  // Scroll Menu
  $(".menu li").on("click", "a", function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({
      scrollTop: top
    }, 1500);
  });

  $("#logo,  .btn.appointment").on("click", function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({
      scrollTop: top
    }, 1500);
  });

  // Mobile Menu
  $('#openmenu').click(function (event) {
    event.preventDefault();
    $('#nav').animate({
      'left': 0
    }, 800);
  });

  $('#closemenu').click(function (event) {
    event.preventDefault();
    $('#nav').animate({
      'left': '-320px'
    }, 800);
  });

  $('#nav a').on("click", function () {
    $("#nav").animate({
      'left': '-320px'
    }, 800);
  });

  // Booking Ajax 
  $('#sendbook').click(function (event) {
    event.preventDefault();

    var name = $('input[name="name"]').val();
    var lastname = $('input[name="lastname"]').val();
    var phone = $('input[name="phone"]').val();
    var email = $('input[name="email"]').val();
    var date = $('input[name="date"]').val();
    var time = $('input[name="time"]').val();

    if (name == '' || lastname == '' || phone == '' || email == '' || date == '' || time == '') {

      $('.res-booking').fadeIn().html('<span class="error">All fields must be filled.</span>');
      $('input').focus(function () {
        $('.res-booking').fadeOut();
      });

    } else {

      $.ajax({
        url: '../booking.php',
        type: 'POST',
        data: {
          name: name,
          lastname: lastname,
          phone: phone,
          email: email,
          date: date,
          time: time
        },
        dataType: 'html',
        success: function (data) {
          if (data == 'Send') {

            $('.res-booking').fadeIn().html('<span class="send">Thanks. We will contact you shortly.</span>');

            $('input[name="name"]').val('');
            $('input[name="lastname"]').val('');
            $('input[name="phone"]').val('');
            $('input[name="email"]').val('');
            $('input[name="date"]').val('');
            $('input[name="time"]').val('');

          }
        }
      }); // ajax
    }
  });


}); // ready


 $(document).ready(function () {

    $('.client-single').on('click', function (event) {
        event.preventDefault();

        var active = $(this).hasClass('active');

        var parent = $(this).parents('.testimonial-wrap');

        if (!active) {
            var activeBlock = parent.find('.client-single.active');

            var currentPos = $(this).attr('data-position');

            var newPos = activeBlock.attr('data-position');

            activeBlock.removeClass('active').removeClass(newPos).addClass('inactive').addClass(currentPos);
            activeBlock.attr('data-position', currentPos);

            $(this).addClass('active').removeClass('inactive').removeClass(currentPos).addClass(newPos);
            $(this).attr('data-position', newPos);

        }
    });

    // scroll top
    $(window).on('scroll', function() {
        var scroll = $(window).scrollTop();
        if (scroll < 500) {
            $(".bottomToup").removeClass("active-top");
        } else {
            $(".bottomToup").addClass("active-top");
        }
    });

    // preloader
    jQuery(window).load(function() {
        $(".loader").fadeOut(1000);
    });


    $('.navigation-container').sticky({
        topSpacing:0
    });

            
    $('#menu').slicknav({
        prependTo: '.header-area .navigation-container .main-menu',
        closeOnClick: true, // Close menu when a link is clicked.
    });


    $('.play-btn').magnificPopup({
        type: 'video'
    })

    var mixer = mixitup('.doctor-list');


    $( "#datepicker" ).datepicker();

    const target = document.querySelector(".target");
    const links = document.querySelectorAll(".mynav .single-services-item");
    const colors = [""];

    function mouseenterFunc() {
      if (!this.parentNode.classList.contains("active")) {
        for (let i = 0; i < links.length; i++) {
          if (links[i].parentNode.classList.contains("active")) {
            links[i].parentNode.classList.remove("active");
          }
          links[i].style.opacity = "1";
        }

        this.parentNode.classList.add("active");
        this.style.opacity = "1";

        const width = this.getBoundingClientRect().width;
        const height = this.getBoundingClientRect().height;
        const left = this.getBoundingClientRect().left + window.pageXOffset;
        const top = this.getBoundingClientRect().top + window.pageYOffset;
        const color = colors[Math.floor(Math.random() * colors.length)];

        target.style.width = `${width}px`;
        target.style.height = `${height}px`;
        target.style.left = `${left}px`;
        target.style.top = `${top}px`;
        target.style.transform = "none";
      }
    }

    for (let i = 0; i < links.length; i++) {
      links[i].addEventListener("click", (e) => e.preventDefault());
      links[i].addEventListener("mouseenter", mouseenterFunc);
    }

    function resizeFunc() {
      const active = document.querySelector(".mynav .services-col.active");

      if (active) {
        const left = active.getBoundingClientRect().left + window.pageXOffset;
        const top = active.getBoundingClientRect().top + window.pageYOffset;

        target.style.left = `${left}px`;
        target.style.top = `${top}px`;
      }
    }

    window.addEventListener("resize", resizeFunc);


}(jQuery));
