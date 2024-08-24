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
    $(window).on('scroll', function () {
        var scroll = $(window).scrollTop();
        if (scroll < 500) {
            $(".bottomToup").removeClass("active-top");
        } else {
            $(".bottomToup").addClass("active-top");
        }
    });

    // preloader
    jQuery(window).load(function () {
        $(".loader").fadeOut(1000);
    });


    $('.navigation-container').sticky({
        topSpacing: 0
    });


    $('#menu').slicknav({
        prependTo: '.header-area .navigation-container .main-menu',
        closeOnClick: true, // Close menu when a link is clicked.
    });


    $('.play-btn').magnificPopup({
        type: 'video'
    })

    var mixer = mixitup('.doctor-list');

    window.addEventListener("resize", resizeFunc);


}(jQuery));