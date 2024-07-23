$(window).on("load", function () {
   // Preload
   $("#preload").fadeOut(1500);
});


jQuery(document).ready(function () {

   // Owl Carousel Team
   $('.team-carousel').owlCarousel({
      loop: true,
      margin: 20,
      nav: false,
      dots: true,
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

   $("#logo").on("click", function (event) {
      event.preventDefault();
      $('body,html').animate({
         scrollTop: 0
      }, 1500);
   });


   $(".btn.appointment").on("click", function (event) {
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