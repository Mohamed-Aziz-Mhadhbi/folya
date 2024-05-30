
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
