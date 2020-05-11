(function ($) {
    "use strict";

    $.fn.andSelf = function () {
        return this.addBack.apply(this, arguments);
    }

    /* Loader Code Start */
    $(window).on("load", function () {
        $(".section-loader").fadeOut("slow");

        var $container = $('.portfolioContainer');
        $container.isotope({
            filter: '*',
            animationOptions: {
                queue: true
            }
        });

        $('.portfolio-nav li').click(function () {
            $('.portfolio-nav .current').removeClass('current');
            $(this).addClass('current');

            var selector = $(this).attr('data-filter');
            $container.isotope({
                filter: selector,
                animationOptions: {
                    queue: true
                }
            });
            return false;
        });
    });
    /* Loader Code End */


    // var height = $('.mh-service-item').height();
    // if($(window).width()){
    //   $('.mh-service-item').css('height', height);
    //   $('.mh-service-item').css('height', height);
    // }


    $(window).on('load', function () {
        $('#header-slider #animation-slide').owlCarousel({
            autoHeight: true,
            items: 1,
            loop: true,
            autoplay: true,
            dots: false,
            nav: false,
            autoplayTimeout: 3000,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            animateIn: "zoomIn",
            animateOut: "fadeOutDown",
            autoplayHoverPause: false,
            touchDrag: true,
            mouseDrag: true
        });
        $("#animation-slide").on("translate.owl.carousel", function () {
            $(this).find(".owl-item .slide-text > *").removeClass("fadeInUp animated").css("opacity", "0");
            $(this).find(".owl-item .slide-img").removeClass("fadeInRight animated").css("opacity", "0");
        });
        $("#animation-slide").on("translated.owl.carousel", function () {
            $(this).find(".owl-item.active .slide-text > *").addClass("fadeInUp animated").css("opacity", "1");
            $(this).find(".owl-item.active .slide-img").addClass("fadeInRight animated").css("opacity", "1");
        });
    });

    /*
    |====================
    | Mobile NAv trigger
    |=====================
    */

    var trigger = $('.navbar-toggler'),
        overlay = $('.overlay'),
        navc = $('.navbar-collapse'),
        active = false;


    $('.navbar-toggler, .navbar-nav li a, .overlay').on('click', function () {
        $('.navbar-toggler').toggleClass('active')
        //   $('#js-navbar-menu').toggleClass('active');
        //   $('.navbar-collapse').toggleClass('show');
        overlay.toggleClass('active');
        navc.toggleClass('active');
    });


    /*
    |=================
    | Onepage Nav
    |================
    */

    $('#mh-header').onePageNav({
        currentClass: 'active',
        changeHash: false,
        scrollSpeed: 750,
        scrollThreshold: 0.5,
    });

    /*
    |=================
    | fancybox
    |================
    */

    $("[data-fancybox]").fancybox({});


    /*
    |===============
    | WOW ANIMATION
    |==================
    */
    var wow = new WOW({
        mobile: false  // trigger animations on mobile devices (default is true)
    });
    wow.init();


    /*
    |=================
    | AOS
    |================
    */

    //AOS.init();

    /*
    | ==========================
    | NAV FIXED ON SCROLL
    | ==========================
    */
    $(window).on('scroll', function () {
        var scroll = $(window).scrollTop();
        if (scroll >= 50) {
            $(".nav-scroll").addClass("nav-strict");
        } else {
            $(".nav-scroll").removeClass("nav-strict");
        }
    });


    /*
    |=================
    | Progress bar
    |================
    */
    $(".determinate").each(function () {
        var width = $(this).text();
        $(this).css("width", width)
            .empty()
            .append('<i class="fa fa-circle"></i>');
    });

    /*
    |=================
    | Portfolio mixin
    |================
    */
    $('#portfolio-item').mixItUp();

    /*
    |=================
    | Client review
    |================
    */
    $('#mh-client-review').owlCarousel({
        loop: false,
        responsiveClass: true,
        nav: true,
        autoplay: false,
        smartSpeed: 450,
        stopOnHover: true,
        animateIn: 'slideInRight',
        animateOut: 'slideOutLeft',
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 2,
            },
            1170: {
                items: 3,
            }
        }
    });

    /*
    |=================
    | Project review slide
    |================
    */
    $('.mh-project-testimonial').owlCarousel({
        loop: true,
        responsiveClass: true,
        nav: false,
        dots: false,
        autoplay: true,
        smartSpeed: 450,
        stopOnHover: true,
        animateIn: 'slideInRight',
        animateOut: 'slideOutLeft',
        autoplayHoverPause: true,
        pagination: false,
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 1,
            },
            1170: {
                items: 1,
            }
        }
    });

    /*
    |=================
    | Single Project review
    |================
    */
    $('#single-project').owlCarousel({
        loop: false,
        responsiveClass: true,
        nav: false,
        dots: true,
        autoplay: false,
        smartSpeed: 450,
        stopOnHover: true,
        animateIn: 'slideInRight',
        animateOut: 'slideOutLeft',
        autoplayHoverPause: true,
        pagination: false,
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 1,
            },
            1170: {
                items: 1,
            }
        }
    });

    /*
    |=================
    | Project review slide
    |================
    */
    $('.mh-single-project-slide-by-side').owlCarousel({
        loop: false,
        responsiveClass: true,
        nav: true,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        dots: false,
        autoplay: false,
        smartSpeed: 450,
        stopOnHover: true,
        animateIn: 'slideInRight',
        animateOut: 'slideOutLeft',
        autoplayHoverPause: true,
        pagination: false,
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 1,
            },
            1170: {
                items: 1,
            }
        }
    });

    /*
    |=================
    | Single client review
    |================
    */
    $('#mh-single-client-review').owlCarousel({
        loop: false,
        responsiveClass: true,
        nav: true,
        autoplay: false,
        smartSpeed: 450,
        stopOnHover: true,
        animateIn: 'slideInRight',
        animateOut: 'slideOutLeft',
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 1,
            },
            1170: {
                items: 1,
            }
        }
    });

    /*
    |=================
    | Clint review slide
    |================
    */
    $('#mh-2-client-review').owlCarousel({
        loop: false,
        responsiveClass: true,
        nav: true,
        autoplay: false,
        smartSpeed: 450,
        stopOnHover: true,
        animateIn: 'slideInRight',
        animateOut: 'slideOutLeft',
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 2,
            },
            1170: {
                items: 2,
            }
        }
    });


    // Smooth Scroll
    $(function () {
        $('a[href*=#]:not([href=#])').click(function () {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top
                    }, 600);
                    return false;
                }
            }
        });
    });


    /*
    |=================
    | CONTACT FORM
    |=================
    */
    let targetBodyClass = $('body');
    var contactFrom = $("#contactForm");
    contactFrom.validator().on("submit", function (event) {
        if (event.isDefaultPrevented()) {
            // handle the invalid form...
            formError();
            submitMSG(false, "Did you fill the form properly?");
        } else {
            // everything looks good!
            event.preventDefault();
            submitForm();
            // _.throttle(submitForm,2000)
        }
    });

    function submitForm() {
        let firstName = $("input[name='first_name']").val();
        let lastName = $("input[name='last_name']").val();
        let email = $("input[name='email']").val();
        let subject = "mail from islammaruf.github.io";
        let message = $("textarea[name='message']").val();
        let name = firstName + ' ' + lastName;
        let data = `name=${name}&_replyto=${email}&subject=${subject}&message=${message}`;
        let encodeData = encodeURI(data);
        $('#form-submit').prop('disabled',true);
        $.ajax({
            type: "POST",
            url: "https://formspree.io/maypnqgk",
            data: encodeData,
            dataType: "json",
            success: function (response) {
                if (response.ok) {
                    formSuccess();
                } else {
                    formError();
                    submitMSG(false, "Do you fill your from correctly ?");
                }
            },
            error : function (response) {
                formError();
                submitMSG(false, "Do you fill your from correctly ?");
            }
        });
    }

    function formSuccess() {
        contactFrom[0].reset();
        submitMSG(true, "Thanks for you mail")
    }

    function formError() {
        contactFrom.removeClass().addClass('shake animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
            $(this).removeClass();
        });
    }

    function submitMSG(valid, msg) {
        let msgClasses;
        let msgSubmit = $("#msgSubmit");
        if (valid) {
            msgClasses = "h3 text-center fadeInUp animated text-success";
        } else {
            msgClasses = "h3 text-center shake animated text-danger";
        }
        msgSubmit.removeClass().addClass(msgClasses).text(msg);
    }

    targetBodyClass.on('keyup', 'input,textarea', function (event) {
        $('#form-submit').prop('disabled',false);
        submitMSG(true, "")
    });

    /*
    |=================
    | SET NIGHT THEME DEPENDING ON TIME
    |=================
    */
    function isDay() {
        const hours = (new Date()).getHours();
        return (hours >= 6 && hours < 18);
    }


    if (isDay()) {
        if (targetBodyClass.hasClass("dark-vertion")) {
            targetBodyClass.removeClass("dark-vertion")
        }
        targetBodyClass.addClass("white-vertion")
    } else {
        if (targetBodyClass.hasClass("white-vertion")) {
            targetBodyClass.removeClass("white-vertion")
        }
        targetBodyClass.addClass('dark-vertion')
    }


}(jQuery));
