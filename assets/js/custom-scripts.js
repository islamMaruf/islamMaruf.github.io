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
        let name = firstName + ' ' + lastName;
        let email = $("input[name='email']").val();
        let subject = `Email From ${name}`
        let message = $("textarea[name='message']").val();
        $('#form-submit').prop('disabled', true);
        let _token = "f34742e7-9459-4a22-a7cd-cd3f8f7762dc"
        message = generateEmailTemplete(message)
        Email.send({
            SecureToken: _token,
            To: "marufislam7424@gmail.com",
            From: email,
            Subject: subject,
            Body: message,

        }).then(response => {
            formSuccess();
            console.log(response)
        }
        ).catch(err => {
            formError();
            submitMSG(false, "Do you fill your from correctly ?");
            console.log(err)
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
        $('#form-submit').prop('disabled', false);
        submitMSG(true, "")
    });
    function generateEmailTemplete(body) {
        return `
        <!doctype html>
        <html>
        <head>
            <meta name="viewport" content="width=device-width">
            <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
            <title>Simple Transactional Email</title>
            <style>
            /* -------------------------------------
                INLINED WITH htmlemail.io/inline
            ------------------------------------- */
            /* -------------------------------------
                RESPONSIVE AND MOBILE FRIENDLY STYLES
            ------------------------------------- */
            @media only screen and (max-width: 620px) {
            table[class=body] h1 {
                font-size: 28px !important;
                margin-bottom: 10px !important;
            }
            table[class=body] p,
                    table[class=body] ul,
                    table[class=body] ol,
                    table[class=body] td,
                    table[class=body] span,
                    table[class=body] a {
                font-size: 16px !important;
            }
            table[class=body] .wrapper,
                    table[class=body] .article {
                padding: 10px !important;
            }
            table[class=body] .content {
                padding: 0 !important;
            }
            table[class=body] .container {
                padding: 0 !important;
                width: 100% !important;
            }
            table[class=body] .main {
                border-left-width: 0 !important;
                border-radius: 0 !important;
                border-right-width: 0 !important;
            }
            table[class=body] .btn table {
                width: 100% !important;
            }
            table[class=body] .btn a {
                width: 100% !important;
            }
            table[class=body] .img-responsive {
                height: auto !important;
                max-width: 100% !important;
                width: auto !important;
            }
            }

            /* -------------------------------------
                PRESERVE THESE STYLES IN THE HEAD
            ------------------------------------- */
            @media all {
            .ExternalClass {
                width: 100%;
            }
            .ExternalClass,
                    .ExternalClass p,
                    .ExternalClass span,
                    .ExternalClass font,
                    .ExternalClass td,
                    .ExternalClass div {
                line-height: 100%;
            }
            .apple-link a {
                color: inherit !important;
                font-family: inherit !important;
                font-size: inherit !important;
                font-weight: inherit !important;
                line-height: inherit !important;
                text-decoration: none !important;
            }
            #MessageViewBody a {
                color: inherit;
                text-decoration: none;
                font-size: inherit;
                font-family: inherit;
                font-weight: inherit;
                line-height: inherit;
            }
            .btn-primary table td:hover {
                background-color: #34495e !important;
            }
            .btn-primary a:hover {
                background-color: #34495e !important;
                border-color: #34495e !important;
            }
            }
            </style>
        </head>
        <body class="" style="background-color: #f6f6f6; font-family: sans-serif; -webkit-font-smoothing: antialiased; font-size: 14px; line-height: 1.4; margin: 0; padding: 0; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
            <span class="preheader" style="color: transparent; display: none; height: 0; max-height: 0; max-width: 0; opacity: 0; overflow: hidden; mso-hide: all; visibility: hidden; width: 0;">This is preheader text. Some clients will show this text as a preview.</span>
            <table border="0" cellpadding="0" cellspacing="0" class="body" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%; background-color: #f6f6f6;">
            <tr>
                <td style="font-family: sans-serif; font-size: 14px; vertical-align: top;">&nbsp;</td>
                <td class="container" style="font-family: sans-serif; font-size: 14px; vertical-align: top; display: block; Margin: 0 auto; max-width: 580px; padding: 10px; width: 580px;">
                <div class="content" style="box-sizing: border-box; display: block; Margin: 0 auto; max-width: 580px; padding: 10px;">

                    <!-- START CENTERED WHITE CONTAINER -->
                    <table class="main" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%; background: #ffffff; border-radius: 3px;">

                    <!-- START MAIN CONTENT AREA -->
                    <tr>
                        <td class="wrapper" style="font-family: sans-serif; font-size: 14px; vertical-align: top; box-sizing: border-box; padding: 20px;">
                        <table border="0" cellpadding="0" cellspacing="0" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%;">
                            <tr>
                            <td style="font-family: sans-serif; font-size: 14px; vertical-align: top;">
                                <p style="font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0; Margin-bottom: 15px;">${body}</p>
                            </td>
                            </tr>
                        </table>
                        </td>
                    </tr>

                    <!-- END MAIN CONTENT AREA -->
                    </table>

                    <!-- START FOOTER -->
                    <div class="footer" style="clear: both; Margin-top: 10px; text-align: center; width: 100%;">
                    <table border="0" cellpadding="0" cellspacing="0" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%;">
                    <tr>
                        <td class="content-block powered-by" style="font-family: sans-serif; vertical-align: top; padding-bottom: 10px; padding-top: 10px; font-size: 12px; color: #999999; text-align: center;">
                            Powered by <a href="http://islamMaruf.github.io" style="color: #999999; font-size: 12px; text-align: center; text-decoration: none;">islamMaruf.github.io</a>.
                        </td>
                        </tr>
                    </table>
                    </div>
                    <!-- END FOOTER -->

                <!-- END CENTERED WHITE CONTAINER -->
                </div>
                </td>
                <td style="font-family: sans-serif; font-size: 14px; vertical-align: top;">&nbsp;</td>
            </tr>
            </table>
        </body>
        </html>
        `
    }

    /*
    |=================
    | SET NIGHT THEME DEPENDING ON TIME
    |=================
    */
    // function isDay() {
    //     const hours = (new Date()).getHours();
    //     return (hours >= 6 && hours < 18);
    // }


    // if (isDay()) {
    //     if (targetBodyClass.hasClass("dark-vertion")) {
    //         targetBodyClass.removeClass("dark-vertion")
    //     }
    //     targetBodyClass.addClass("white-vertion")
    // } else {
    //     if (targetBodyClass.hasClass("white-vertion")) {
    //         targetBodyClass.removeClass("white-vertion")
    //     }
    //     targetBodyClass.addClass('dark-vertion')
    // }


}(jQuery));
