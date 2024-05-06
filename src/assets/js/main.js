(function ($) {
    "use strict";
    /*===========================================
        =            Windows Load          =
    =============================================*/
    $(window).on('load', function () {
        wowAnimation();
        // aosAnimation();
    });

    /*======================================
      Preloader activation
      ========================================*/
    $(window).on('load', function (event) {
        $('.preloader').fadeOut('slow', function () {
            $(this).remove();
        });
    });
    /*===========================================
        =        Wow Active      =
    =============================================*/
    function wowAnimation() {
        var wow = new WOW({
            boxClass: 'wow',
            animateClass: 'animated',
            offset: 0,
            mobile: false,
            live: true
        });
        wow.init();
    }
    /*======================================
    Mobile Menu Js
    ========================================*/
    $("#mobile-menu").meanmenu({
        meanMenuContainer: ".mobile-menu",
        meanScreenWidth: "1199",
        meanExpand: ['<i class="fa-solid fa-plus"></i>'],
    });

    $("#mobile-menu-2").meanmenu({
        meanMenuContainer: ".mobile-menu-2",
        meanScreenWidth: "4000",
        meanExpand: ['<i class="fa-solid fa-plus"></i>'],
    });

    // 08. filter
    $(".filter-open-btn").on("click", function () {
        $(".bd-filter-offcanvas-area").addClass("offcanvas-opened");
        $(".body-overlay").addClass("opened");
    });


    $(".filter-close-btn").on("click", function () {
        $(".bd-filter-offcanvas-area").removeClass("offcanvas-opened");
        $(".body-overlay").removeClass("opened");
    });

    $(".filter-open-dropdown-btn").on("click", function () {
        $(".bd-filter-dropdown-area").toggleClass('filter-dropdown-opened');
    });

    /*======================================
      Sidebar Toggle
    ========================================*/
    $(".offcanvas-close,.offcanvas-overlay").on("click", function () {
        $(".offcanvas-area").removeClass("info-open");
        $(".offcanvas-overlay").removeClass("overlay-open");
    });
    $(".sidebar-toggle").on("click", function () {
        $(".offcanvas-area").addClass("info-open");
        $(".offcanvas-overlay").addClass("overlay-open");
    });

    /*======================================
      Body overlay Js
    ========================================*/
    $(".body-overlay").on("click", function () {
        $(".offcanvas-area").removeClass("opened");
        $(".body-overlay").removeClass("opened");
        $(".bd-filter-offcanvas-area").removeClass("offcanvas-opened");
    });

    /*======================================
      Sticky Header Js
    ========================================*/

    $(window).on("scroll", function () {
        if ($(this).scrollTop() > 250) {
            $("#header-sticky").addClass("bd-sticky");
        } else {
            $("#header-sticky").removeClass("bd-sticky");
        }
    });

    /*======================================
      Data Css js
    ========================================*/
    $("[data-background").each(function () {
        $(this).css(
            "background-image",
            "url( " + $(this).attr("data-background") + "  )"
        );
    });

    $("[data-width]").each(function () {
        $(this).css("width", $(this).attr("data-width"));
    });

    $("[data-bg-color]").each(function () {
        $(this).css("background-color", $(this).attr("data-bg-color"));
    });

    /*======================================
      MagnificPopup image view
    ========================================*/
    $(".popup-image").magnificPopup({
        type: "image",
        gallery: {
            enabled: true,
        },
    });

    let tourImagePopupGallery = $(".tour-image-popup");
    tourImagePopupGallery.each(function () {
        let elm = $(this);
        let options = elm.data("gallery-options");
        let imageGallery = elm.magnificPopup(
            "object" === typeof options ? options : JSON.parse(options)
        );
    });


    /*======================================
      MagnificPopup video view
    ========================================*/
    $(".popup-video").magnificPopup({
        type: "iframe",
    });

    /*======================================
      PureCounter Js
    ========================================*/

    new PureCounter();
    new PureCounter({
        filesizing: true,
        selector: ".filesizecount",
        pulse: 2,
    });

    /*======================================
      Nice Select Js
    ========================================*/
    $('select').niceSelect();

    /*======================================
      Nice Select Js
    ========================================*/

    $(document).on('mouseover', '.single-item', function () {
        $('.blog-thumb').removeClass('active');
        $('.blog-thumb').addClass('active');
    });

    /*======================================
      Button scroll up js
    ========================================*/
    var progressPath = document.querySelector(".bd-backtotop path");
    var pathLength = progressPath.getTotalLength();
    progressPath.style.transition = progressPath.style.WebkitTransition = "none";
    progressPath.style.strokeDasharray = pathLength + " " + pathLength;
    progressPath.style.strokeDashoffset = pathLength;
    progressPath.getBoundingClientRect();
    progressPath.style.transition = progressPath.style.WebkitTransition = "stroke-dashoffset 10ms linear";
    var updateProgress = function () {
        var scroll = $(window).scrollTop();
        var height = $(document).height() - $(window).height();
        var progress = pathLength - (scroll * pathLength) / height;
        progressPath.style.strokeDashoffset = progress;
    };
    updateProgress();
    $(window).scroll(updateProgress);
    var offset = 150;
    var duration = 550;
    jQuery(window).on("scroll", function () {
        if (jQuery(this).scrollTop() > offset) {
            jQuery(".bd-backtotop").addClass("active-progress");
        } else {
            jQuery(".bd-backtotop").removeClass("active-progress");
        }
    });
    jQuery(".bd-backtotop").on("click", function (event) {
        event.preventDefault();
        jQuery("html, body").animate({
            scrollTop: 0
        }, parseInt(duration, 10)); // Fixing parseInt call with radix parameter
        return false;
    });

    /*======================================
      Button scroll up js
    ========================================*/
    // Cursor JS
    $('#cursor_style').on('change', function () {
        var cursor_val = $(this).val();

        if (cursor_val == '1') {
            $('.cursor1').hide();
            $('.cursor2').hide();
        } else {
            $('.cursor1').show();
            $('.cursor2').show();
        }
    });

    function mousemoveHandler(e) {
        try {
            const target = e.target;

            let tl = gsap.timeline({
                defaults: {
                    x: e.clientX,
                    y: e.clientY,
                }
            })

            // Main Cursor Moving 
            tl.to(".cursor1", {
                ease: "power2.out"
            })
            // .to(".cursor2", {
            //   ease: "power2.out"
            // }, "-=0.4")

        } catch (error) {
            console.log(error)
        }
    }
    document.addEventListener("mousemove", mousemoveHandler);

    var cursor_border_hide = document.querySelector('.cursor_border_hide');
    if (cursor_border_hide) {
        cursor_border_hide.addEventListener("mousemove", () => {
            var cursor_text = document.querySelector('.wc-cursor.text');
            var cursor_1 = document.querySelector('.cursor1');
            if (cursor_text) {
                cursor_1.style.opacity = '0';
            }
            else {
                cursor_1.style.opacity = '1';
            }
        });
    }
    /////////////////////////////////////////////////////////



    /*======================================
    Slider Swiper
    ========================================*/
    var testimonialOne = new Swiper(".testimonial-active", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        roundLengths: true,
        autoplay: {
            delay: 3000,
        },
        navigation: {
            nextEl: ".testimonial-slider-button-next",
            prevEl: ".testimonial-slider-button-prev",
        },
        pagination: {
            el: ".testimonial-swiper-dot",
            clickable: true,
        },
        breakpoints: {
            1400: {
                slidesPerView: 2.4,
            },
            1200: {
                slidesPerView: 2.45,
            },
            992: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 2,
            },
            576: {
                slidesPerView: 1,
            },
            0: {
                slidesPerView: 1,
            },
        },
    });

    var testimonialOne = new Swiper(".testimonial-active-two", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        roundLengths: true,
        autoplay: {
            delay: 3000,
        },
        navigation: {
            nextEl: ".testimonial-nav-next",
            prevEl: ".testimonial-nav-prev",
        },
        pagination: {
            el: ".testimonial-swiper-dot",
            clickable: true,
        },
    });

    $(".hand-picked-active").slick({
        slidesToShow: 1,
        vertical: true,
        verticalSwiping: true,
        swipeToSlide: true,
        focusOnSelect: true,
        dots: true,
        arrows: true,
        speed: 500,
        infinite: true,
        prevArrow: '<button type="button" class="slick-prev hand-picked-button-prev"><i class="fa-regular fa-arrow-up"></i></button>',
        appendDots: $('.slick-slider-dots'),
        nextArrow: '<button type="button" class="slick-next hand-picked-button-next"><i class="fa-regular fa-arrow-down"></i></button>',
        appendArrows: $(".hand-picked-navigation"),
    });

    var commonCarousel = new Swiper(".common-carousel-active", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        roundLengths: true,
        autoplay: {
            delay: 3000,
        },
        navigation: {
            nextEl: ".common-slider-button-next",
            prevEl: ".common-slider-button-prev",
        },
        pagination: {
            el: ".bd-swiper-dot",
            clickable: true,
        },
        breakpoints: {
            1400: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 3,
            },
            992: {
                slidesPerView: 3,
            },
            768: {
                slidesPerView: 2,
            },
            576: {
                slidesPerView: 1,
            },
            0: {
                slidesPerView: 1,
            },
        },
    });

    // Text Slider
    var text_slider_option = document.querySelector(".text-slider");

    if (text_slider_option) {

        var text_slider_speed = 5000
        var text_slider_autoplay = true
        var loop_value = true
        var data_itemshow = "auto"

        if (text_slider_option.getAttribute("data-sliderSpeed")) {
            text_slider_speed = parseInt(text_slider_option.getAttribute("data-sliderSpeed"));
        }
        if (text_slider_option.getAttribute("data-autoPlay")) {
            text_slider_autoplay = text_slider_option.getAttribute("data-autoPlay")
        }

        if (text_slider_option.getAttribute("data-loop")) {
            loop_value = text_slider_option.getAttribute("data-loop")
        }
        if (text_slider_option.getAttribute("data-itemShow")) {
            data_itemshow = text_slider_option.getAttribute("data-itemShow")
        }


        if (text_slider_autoplay == 'true') {
            var text_slider = new Swiper(".text-slider", {
                loop: loop_value,
                speed: text_slider_speed,
                allowTouchMove: false,
                slidesPerView: data_itemshow,
                slidesPerGroup: 10,
                spaceBetween: 20,
                autoplay: {
                    delay: 0,
                    disableOnInteraction: true,
                }
            });
        }
        else {
            var text_slider = new Swiper(".text-slider", {
                loop: loop_value,
                speed: text_slider_speed,
                allowTouchMove: false,
                slidesPerView: data_itemshow,
                slidesPerGroup: 10,
                spaceBetween: 20,
                autoplay: false,
            });
        }
    };

    var related = new Swiper(".related-slider-active", {
        slidesPerView: 1,
        spaceBetween: 30,
        centeredSlides: true,
        loop: true,
        roundLengths: true,
        autoplay: {
            delay: 3000,
        },
        navigation: {
            nextEl: ".common-slider-button-next",
            prevEl: ".common-slider-button-prev",
        },
        pagination: {
            el: ".bd-swiper-dot",
            clickable: true,
        },
        breakpoints: {
            1400: {
                slidesPerView: 3.6,
            },
            1200: {
                slidesPerView: 3,
            },
            992: {
                slidesPerView: 2.5,
            },
            768: {
                slidesPerView: 2,
            },
            576: {
                slidesPerView: 1.5,
            },
            0: {
                slidesPerView: 1,
            },
        },
    });

    var commonCarousel = new Swiper(".team-slider-active", {
        spaceBetween: 30,
        loop: true,
        roundLengths: true,
        autoplay: {
            delay: 3000,
        },
        navigation: {
            nextEl: ".common-slider-button-next",
            prevEl: ".common-slider-button-prev",
        },
        pagination: {
            el: ".team-slider-dot",
            clickable: true,
        },
        breakpoints: {
            1400: {
                slidesPerView: 3.5,
            },
            1200: {
                slidesPerView: 3,
            },
            992: {
                slidesPerView: 3.5,
            },
            768: {
                slidesPerView: 3,
            },
            576: {
                slidesPerView: 3,
            },
            0: {
                slidesPerView: 1,
            },
        },
    });

    var postboxSlider = new Swiper('.postbox__slider', {
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true,
        autoplay: {
            delay: 3000,
        },
        // Navigation arrows
        navigation: {
            nextEl: ".postbox-slider-button-next",
            prevEl: ".postbox-slider-button-prev",
        },
        breakpoints: {
            '1200': {
                slidesPerView: 1,
            },
            '992': {
                slidesPerView: 1,
            },
            '768': {
                slidesPerView: 1,
            },
            '576': {
                slidesPerView: 1,
            },
            '0': {
                slidesPerView: 1,
            },
        },
    });

    // properties active
    var FeaturedProperties = new Swiper('.featured__properties', {
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true,
        autoplay: {
            delay: 3000,
        },
        navigation: {
            nextEl: ".properties-slider-button-next",
            prevEl: ".properties-slider-button-prev",
        },
        pagination: {
            el: ".bd-swiper-dot",
            clickable: true,
        },
        breakpoints: {
            '1200': {
                slidesPerView: 1,
            },
            '992': {
                slidesPerView: 1,
            },
            '768': {
                slidesPerView: 1,
            },
            '576': {
                slidesPerView: 1,
            },
            '0': {
                slidesPerView: 1,
            },
        },
    });

    if ($('#productTabMarker').length > 0) {
        function tp_tab_line_2() {
            var marker = document.querySelector('#productTabMarker');
            var item = document.querySelectorAll('.bd-product-tab button');
            var itemActive = document.querySelector('.bd-product-tab .nav-link.active');

            // rtl settings
            var tp_rtl = localStorage.getItem('tp_dir');
            let rtl_setting = tp_rtl == 'rtl' ? 'right' : 'left';

            function indicator(e) {
                marker.style.left = e.offsetLeft + "px";
                marker.style.width = e.offsetWidth + "px";
            }


            item.forEach(link => {
                link.addEventListener('click', (e) => {
                    indicator(e.target);
                });
            });

            var activeNav = $('.nav-link.active');
            var activewidth = $(activeNav).width();
            var activePadLeft = parseFloat($(activeNav).css('padding-left'));
            var activePadRight = parseFloat($(activeNav).css('padding-right'));
            var totalWidth = activewidth + activePadLeft + activePadRight;

            var precedingAnchorWidth = anchorWidthCounter();


            $(marker).css('display', 'block');

            $(marker).css('width', totalWidth);

            function anchorWidthCounter() {
                var anchorWidths = 0;
                var a;
                var aWidth;
                var aPadLeft;
                var aPadRight;
                var aTotalWidth;
                $('.bd-product-tab button').each(function (index, elem) {
                    var activeTest = $(elem).hasClass('active');
                    marker.style.left = elem.offsetLeft + "px";
                    if (activeTest) {
                        // Break out of the each function.
                        return false;
                    }

                    a = $(elem).find('button');
                    aWidth = a.width();
                    aPadLeft = parseFloat(a.css('padding-left'));
                    aPadRight = parseFloat(a.css('padding-right'));
                    aTotalWidth = aWidth + aPadLeft + aPadRight;

                    anchorWidths = anchorWidths + aTotalWidth;

                });

                return anchorWidths;
            }
        }
        tp_tab_line_2();
    }

    //Banner Slider Active Js
    if ($('.banner_more_item').length > 1) {
        var banner = new Swiper(".banner-active", {
            slidesPerView: 1,
            loop: true,
            roundLengths: false,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            navigation: {
                nextEl: ".Reallow-navigation-next",
                prevEl: ".Reallow-navigation-prev",
            },
        });
    }

    var banner = new Swiper(".banner-two-active", {
        slidesPerView: 1,
        loop: true,
        roundLengths: false,
        effect: 'fade',
        autoplay: {
            delay: 7000,
        },
        navigation: {
            nextEl: ".banner-navigation-next",
            prevEl: ".banner-navigation-prev",
        },
    });

    var slider = new Swiper('.bd-slider-active', {
        slidesPerView: 1,
        loop: true,
        effect: 'fade',
        autoplay: {
            delay: 7000,
        },
        navigation: {
            nextEl: ".banner-navigation-next",
            prevEl: ".banner-navigation-prev",
        },
    });

    var swiper = new Swiper('.banner-four-slider', {
        direction: 'vertical',
        speed: 800,
        loop: true,
        autoplay: {
            delay: 6000,
        },
        mousewheelControl: true,
        watchSlidesProgress: true,
        mousewheel: {
            releaseOnEdges: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },

    });

    var tourActivation = new Swiper(".tour__active", {
        slidesPerView: 4,
        spaceBetween: 24,
        centeredSlides: false,
        loop: false,
        allowTouchMove: true,
        observer: true,
        pagination: {
            el: ".slider-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".Reallow-navigation-next",
            prevEl: ".Reallow-navigation-prev",
        },
        breakpoints: {
            // when window width is >= 320px
            320: {
                slidesPerView: 1,
            },
            540: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 2,
            },
            992: {
                slidesPerView: 2,
            },
            1200: {
                slidesPerView: 3,
            },
            1400: {
                slidesPerView: 4,
            },
        },
    });

    var tourActivationTwo = new Swiper(".tour__active_two", {
        slidesPerView: 3,
        spaceBetween: 24,
        centeredSlides: false,
        loop: false,
        allowTouchMove: true,
        observer: true,
        pagination: {
            el: ".slider-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".Reallow-navigation-next",
            prevEl: ".Reallow-navigation-prev",
        },
        breakpoints: {
            // when window width is >= 320px
            320: {
                slidesPerView: 1,
            },
            540: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 2,
            },
            992: {
                slidesPerView: 2,
            },
            1200: {
                slidesPerView: 2,
            },
            1400: {
                slidesPerView: 3,
            },
        },
    });

    var tourThreeActivation = new Swiper(".tour-three-active", {
        slidesPerView: 4,
        spaceBetween: 24,
        centeredSlides: false,
        loop: false,
        allowTouchMove: true,
        observer: true,
        pagination: {
            el: ".slider-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".Reallow-navigation-next",
            prevEl: ".Reallow-navigation-prev",
        },
        breakpoints: {
            // when window width is >= 320px
            320: {
                slidesPerView: 1,
            },
            540: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
            },
            992: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 3,
            },
            1400: {
                slidesPerView: 4,
            },
        },
    });

    var tourActivation = new Swiper(".tour-four-active", {
        slidesPerView: 3,
        spaceBetween: 24,
        centeredSlides: false,
        loop: false,
        allowTouchMove: true,
        observer: true,
        pagination: {
            el: ".slider-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".Reallow-navigation-next",
            prevEl: ".Reallow-navigation-prev",
        },
        breakpoints: {
            // when window width is >= 320px
            320: {
                slidesPerView: 1,
            },
            540: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
            },
            992: {
                slidesPerView: 2,
            },
            1200: {
                slidesPerView: 3,
            },
            1400: {
                slidesPerView: 3,
            },
        },
    });

    var testimonialActivation = new Swiper(".testimonial_active", {
        slidesPerView: 2,
        spaceBetween: 24,
        centeredSlides: false,
        loop: false,
        allowTouchMove: true,
        observer: true,
        pagination: {
            el: ".slider-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".Reallow-navigation-next",
            prevEl: ".Reallow-navigation-prev",
        },
        breakpoints: {
            // when window width is >= 320px
            320: {
                slidesPerView: 1,
            },
            540: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 1,
            },
            992: {
                slidesPerView: 2,
            },
            1200: {
                slidesPerView: 1,
            },
            1400: {
                slidesPerView: 2,
            },
            1600: {
                slidesPerView: 2,
            },
        },
    });

    var testimonialFiveActive = new Swiper(".testimonial-five-active", {
        slidesPerView: 1,
        spaceBetween: 24,
        centeredSlides: false,
        loop: false,
        allowTouchMove: true,
        observer: true,
        pagination: {
            el: ".slider-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".Reallow-navigation-next",
            prevEl: ".Reallow-navigation-prev",
        },
        breakpoints: {
            // when window width is >= 320px
            320: {
                slidesPerView: 1,
            },
            540: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 1,
            },
            992: {
                slidesPerView: 1,
            },
            1200: {
                slidesPerView: 1,
            },
            1400: {
                slidesPerView: 1,
            },
            1600: {
                slidesPerView: 1,
            },
        },
    });

    var testimonialSixActive = new Swiper(".testimonial-six-active", {
        slidesPerView: 3,
        spaceBetween: 24,
        centeredSlides: false,
        loop: true,
        allowTouchMove: true,
        observer: true,
        autoplay: true,
        pagination: {
            el: ".slider-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".Reallow-navigation-next",
            prevEl: ".Reallow-navigation-prev",
        },
        breakpoints: {
            // when window width is >= 320px
            320: {
                slidesPerView: 1,
            },
            540: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
            },
            992: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 3,
            },
            1400: {
                slidesPerView: 3,
            },
            1600: {
                slidesPerView: 3,
            },
        },
    });

    var testimonialActivation_2 = new Swiper(".testimonial_active_2", {
        slidesPerView: 1,
        spaceBetween: 24,
        centeredSlides: false,
        loop: true,
        allowTouchMove: true,
        observer: true,
        autoplay: {
            delay: 6000
        },
        pagination: {
            el: ".slider-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".Reallow-navigation-next",
            prevEl: ".Reallow-navigation-prev",
        },
        breakpoints: {
            // when window width is >= 320px
            320: {
                slidesPerView: 1,
            },
            540: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 1,
            },
            992: {
                slidesPerView: 1,
            },
            1200: {
                slidesPerView: 1,
            },
            1400: {
                slidesPerView: 1,
            },
            1600: {
                slidesPerView: 1,
            },
        },
    });

    var teamActivation = new Swiper(".team-activation", {
        slidesPerView: 4,
        spaceBetween: 24,
        centeredSlides: false,
        loop: false,
        allowTouchMove: true,
        observer: true,
        pagination: {
            el: ".slider-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".Reallow-navigation-next",
            prevEl: ".Reallow-navigation-prev",
        },
        breakpoints: {
            // // when window width is >= 320px
            320: {
                slidesPerView: 1,
            },
            451: {
                slidesPerView: 2,
            },
            540: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 3,
            },
            992: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 4,
            },
            1400: {
                slidesPerView: 4,
            },
            1600: {
                slidesPerView: 4,
            },
        },
    });

    var packageActivation = new Swiper(".package-activation", {
        slidesPerView: 4,
        spaceBetween: 24,
        centeredSlides: false,
        loop: false,
        allowTouchMove: true,
        observer: true,
        pagination: {
            el: ".slider-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".Reallow-navigation-next",
            prevEl: ".Reallow-navigation-prev",
        },
        breakpoints: {
            // // when window width is >= 320px
            320: {
                slidesPerView: 1,
            },
            451: {
                slidesPerView: 2,
            },
            540: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 3,
            },
            992: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 3,
            },
            1400: {
                slidesPerView: 4,
            },
            1600: {
                slidesPerView: 4,
            },
        },
    });

    var detailsSlideActivation = new Swiper(".details-slide-activation", {
        slidesPerView: 1,
        spaceBetween: 24,
        centeredSlides: false,
        loop: false,
        allowTouchMove: true,
        observer: true,
        pagination: {
            el: ".slider-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".Reallow-navigation-next",
            prevEl: ".Reallow-navigation-prev",
        },
    });

    if (jQuery(".testimonial-active-three").length > 0) {
        let testimonial = new Swiper(".testimonial-active-three", {
            slidesPerView: 1,
            spaceBetween: 24,
            centeredSlides: false,
            loop: true,
            allowTouchMove: true,
            observer: true,
            pagination: {
                el: ".slider-pagination",
                clickable: true,
            },
        });
    }

    var blogActivation = new Swiper(".blog_activation", {
        slidesPerView: 3,
        spaceBetween: 24,
        centeredSlides: true,
        loop: true,
        allowTouchMove: true,
        observer: true,
        pagination: {
            el: ".blog-slider-pagination",
            clickable: true,
        },
        breakpoints: {
            // when window width is >= 320px
            320: {
                slidesPerView: 1,
            },
            540: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
            },
            992: {
                slidesPerView: 2,
            },
            1200: {
                slidesPerView: 3,
            },
            1400: {
                slidesPerView: 3,
            },
        },
    });

    var filter = new Swiper(".filter-active", {
        slidesPerView: "auto",
        spaceBetween: "auto",
        freeMode: true,
        loop: true,
        allowTouchMove: false,
        autoplay: {
            delay: 0,
            disableOnInteraction: false,
        },
        slidesPerView: 5.5,
        spaceBetween: 32,
        speed: 10000,
        breakpoints: {
            // when window width is >= 320px
            320: {
                slidesPerView: 1,
            },
            540: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
            },
            992: {
                slidesPerView: 2,
            },
            1200: {
                slidesPerView: 3,
            },
            1400: {
                slidesPerView: 7,
            },
        },
    });

    var trip = new Swiper(".activity-activation", {
        slidesPerView: 6,
        spaceBetween: 24,
        loop: false,
        roundLengths: true,
        autoplay: {
            delay: 3000,
        },
        autoplay: false,
        pagination: {
            el: ".slider-pagination",
            clickable: true,
        },
        breakpoints: {
            1400: {
                slidesPerView: 6,
            },
            1200: {
                slidesPerView: 5,
            },
            992: {
                slidesPerView: 4,
            },
            768: {
                slidesPerView: 3,
            },
            451: {
                slidesPerView: 2,
            },
            0: {
                slidesPerView: 1,
            },
        },
    });

    var brand = new Swiper(".brand-active", {
        slidesPerView: 6,
        spaceBetween: 30,
        loop: true,
        roundLengths: true,
        autoplay: {
            delay: 3000,
        },
        breakpoints: {
            1400: {
                slidesPerView: 6,
            },
            1200: {
                slidesPerView: 5,
            },
            992: {
                slidesPerView: 4,
            },
            768: {
                slidesPerView: 3,
            },
            576: {
                slidesPerView: 2,
            },
            0: {
                slidesPerView: 1,
            },
        },
    });

    var brandTwo = new Swiper(".brand-active-2", {
        slidesPerView: 4,
        spaceBetween: 30,
        loop: true,
        roundLengths: true,
        autoplay: {
            delay: 3000,
        },
        breakpoints: {
            1400: {
                slidesPerView: 4,
            },
            1200: {
                slidesPerView: 3,
            },
            992: {
                slidesPerView: 3,
            },
            768: {
                slidesPerView: 3,
            },
            576: {
                slidesPerView: 2,
            },
            0: {
                slidesPerView: 1,
            },
        },
    });

    var brandTwo = new Swiper(".instagram-slide-activation", {
        slidesPerView: 6,
        spaceBetween: 24,
        loop: true,
        roundLengths: true,
        autoplay: true,
        centeredSlides: true,
        breakpoints: {
            1400: {
                slidesPerView: 6,
            },
            1200: {
                slidesPerView: 6,
            },
            992: {
                slidesPerView: 4,
            },
            768: {
                slidesPerView: 3,
            },
            576: {
                slidesPerView: 3,
            },
            0: {
                slidesPerView: 3,
            },
        },
    });

    /*======================================
    Feedback activation js
    ========================================*/

    var feedback = new Swiper(".feedback__active", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        roundLengths: true,
        autoplay: {
            delay: 3000,
        },
        navigation: {
            nextEl: ".hand-picked-button-prev",
            prevEl: ".hand-picked-button-next",
        },
        pagination: {
            el: ".bd-swiper-dot",
            clickable: true,
        },
    });

    // activity-slider-four active js 
    let activitySliderFour = new Swiper('.activity-slider-four', {
        slidesPerView: 5,
        spaceBetween: 24,
        loop: false,
        observeParents: true,
        observer: true,
        centeredSlides: false,
        pagination: {
            el: ".slider-pagination",
            clickable: true,
        },
        breakpoints: {
            1400: {
                slidesPerView: 5,
            },
            1200: {
                slidesPerView: 4,
            },
            992: {
                slidesPerView: 3,
            },
            768: {
                slidesPerView: 3,
            },
            576: {
                slidesPerView: 2,
            },
            451: {
                slidesPerView: 2,
            },
            0: {
                slidesPerView: 1,
            },
        },
    });

    // activity-slider-four active js 
    let activitySliderFive = new Swiper('.activity-slider-five', {
        slidesPerView: 3,
        loop: true,
        autoplay: true,
        centeredSlides: true,
        spaceBetween: 24,
        pagination: {
            el: ".slider-pagination",
            clickable: true,
        },
        breakpoints: {
            1400: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 3,
            },
            992: {
                slidesPerView: 3,
            },
            768: {
                slidesPerView: 2,
            },
            576: {
                slidesPerView: 2,
            },
            451: {
                slidesPerView: 2,
            },
            0: {
                slidesPerView: 1,
            },
        },
    });

    /*=============================================
    product active
    =============================================*/

    var productDetails = new Swiper(".product-details-nav", {
        spaceBetween: -20,
        slidesPerView: 4,
        navigation: {
            nextEl: ".product-details-button-next",
            prevEl: ".product-details-button-prev",
        },
    });
    var productDetailsActive = new Swiper(".product-details-active", {
        spaceBetween: 0,
        thumbs: {
            swiper: productDetails,
        },
        navigation: {
            nextEl: ".product-details-button-next",
            prevEl: ".product-details-button-prev",
        },
    });

    /*======================================
    slider-rang js
    ========================================*/

    var slider = document.getElementById('slider-range');
    var minValue = 0;
    var maxValue = 1500;

    if ($("#slider-range").length) {
        noUiSlider.create(slider, {
            start: [0, 500],
            connect: true,
            range: {
                'min': minValue,
                'max': maxValue
            }
        });

        var amount = document.getElementById('amount');
        slider.noUiSlider.on('update', function (values, handle) {
            amount.value = "$" + values[0] + " - $" + values[1];
        });

        $('#filter-btn').on('click', function () {
            $('.filter-widget').slideToggle(1000);
        });
    }

    var slider = document.getElementById('sliderRangeFilter');
    var minValue = 0;
    var maxValue = 1500;

    if ($("#sliderRangeFilter").length) {
        noUiSlider.create(slider, {
            start: [0, 500],
            connect: true,
            range: {
                'min': minValue,
                'max': maxValue
            }
        });

        var filterRangeAmount = document.getElementById('filterRangeAmount');
        slider.noUiSlider.on('update', function (values, handle) {
            filterRangeAmount.value = "$" + values[0] + " - $" + values[1];
        });

    }

    // Cart
    $('.bd-cart-minus').on('click', function () {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val(), 10) - 1; // Adding radix parameter
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
    });

    $('.bd-cart-plus').on('click', function () {
        var $input = $(this).parent().find('input');
        $input.val(parseInt($input.val(), 10) + 1); // Adding radix parameter
        $input.change();
        return false;
    });

    // Show Login Toggle Js
    $('#showlogin').on('click', function () {
        $('#checkout-login').slideToggle(900);
    });

    // Show Coupon Toggle Js
    $('#showcoupon').on('click', function () {
        $('#checkout_coupon').slideToggle(900);
    });

    $('.checkout-payment-item label').on('click', function () {
        $(this).siblings('.checkout-payment-desc').slideToggle(400);

    });

    //  Show Login Toggle Js
    $('.checkout-login-form-reveal-btn').on('click', function () {
        $('#returnCustomerLoginForm').slideToggle(400);
    });

    // Show Coupon Toggle Js
    $('.checkout-coupon-form-reveal-btn').on('click', function () {
        $('#checkoutCouponForm').slideToggle(400);
    });

    // Create An Account Toggle Js
    $('#cbox').on('click', function () {
        $('#cbox_info').slideToggle(900);
    });

    // Shipping Box Toggle Js
    $('#ship-box').on('click', function () {
        $('#ship-box-info').slideToggle(1000);
    });

    /*======================================
    content hidden class js
    ========================================*/
    $('.contentHidden').remove();

    // Flatpicker activation
    $("#selectingMultipleDates").flatpickr({
        mode: "range",
        altInput: true,
        altFormat: "j, M",
        dateFormat: "m-d",
    });

    // gsap plugin resister 
    gsap.registerPlugin(ScrollTrigger, SplitText);

    gsap.config({
        nullTargetWarn: false,
        trialWarn: false
    });

    // GSAP Title Animation
    function title_animation() {
        var bd_var = jQuery('.anim-wrapper');
        if (!bd_var.length) {
            return;
        }
        const quotes = document.querySelectorAll(".anim-wrapper .title-animation");
        quotes.forEach(quote => {
            //Reset if needed
            if (quote.animation) {
                quote.animation.progress(1).kill();
                quote.split.revert();
            }
            var getclass = quote.closest('.anim-wrapper').className;
            var animation = getclass.split('animation-');
            if (animation[1] == "style4") return
            quote.split = new SplitText(quote, {
                type: "lines,words,chars",
                linesClass: "split-line"
            });
            gsap.set(quote, { perspective: 400 });
            if (animation[1] == "style-1") {
                gsap.set(quote.split.chars, {
                    opacity: 0,
                    y: "90%",
                    rotateX: "-40deg"
                });
            }
            if (animation[1] == "style-2") {
                gsap.set(quote.split.chars, {
                    opacity: 0,
                    x: "50"
                });
            }
            if (animation[1] == "style-3") {
                gsap.set(quote.split.chars, {
                    opacity: 0,
                });
            }
            quote.animation = gsap.to(quote.split.chars, {
                scrollTrigger: {
                    trigger: quote,
                    start: "top 90%",
                },
                x: "0",
                y: "0",
                rotateX: "0",
                opacity: 1,
                duration: 1,
                ease: Back.easeOut,
                stagger: .02,
            });
        });
    }
    ScrollTrigger.addEventListener("refresh", title_animation);

    // For currency
    $(document).on('click', '#footer-lang-toggle', function (e) {
        e.stopPropagation(); // Prevent the event from bubbling up
        $(".header-lang ul").toggleClass("lang-list-open");
    });

    // For language
    $(document).on('click', '#header-language-toggle', function (e) {
        e.stopPropagation(); // Prevent the event from bubbling up
        $(".header-language ul").toggleClass("lang-list-open");
    });

    // Click outside handler
    $(document).on('click', function (e) {
        // Check if the click occurred outside the currency toggle and its associated ul
        if (!$(e.target).closest('#footer-lang-toggle').length && !$(e.target).closest('.header-lang ul').length) {
            $(".header-lang ul").removeClass("lang-list-open");
        }
        // Check if the click occurred outside the language toggle and its associated ul
        if (!$(e.target).closest('#header-language-toggle').length && !$(e.target).closest('.header-language ul').length) {
            $(".header-language ul").removeClass("lang-list-open");
        }
    });

    // Search Js
    $(".bd-search-open-btn").on("click", function () {
        $(".bd-search-popup-area").addClass("bd-search-opened");
        $(".bd-search-overlay").addClass("bd-search-opened");
    });

    $(".bd-search-close-btn").on("click", function () {
        $(".bd-search-popup-area").removeClass("bd-search-opened");
        $(".bd-search-overlay").removeClass("bd-search-opened");
    });

    $(".bd-search-overlay").on("click", function () {
        $(".bd-search-popup-area").removeClass("bd-search-opened");
        $(".bd-search-overlay").removeClass("bd-search-opened");
    });

    // cleave js activation start
    if (jQuery("#cardmmyy").length > 0) {
        var dateCleave = new Cleave('#cardmmyy', {
            date: true,
            datePattern: ['m', 'y']
        });
    }

    if (jQuery("#cvvcode").length > 0) {
        var cvvCleave = new Cleave('#cvvcode', {
            delimiter: '',
            blocks: [3],
        });
    }

    if (jQuery("#creditCard").length > 0) {
        var cleave = new Cleave('#creditCard', {
            creditCard: true,
            onCreditCardTypeChanged: function (type) {
                var creditCardLogo = document.getElementById('creditCardLogo',);
                switch (type) {
                    case 'visa':
                        creditCardLogo.className = 'fa-brands fa-cc-visa'; // FontAwesome class for Visa
                        break;
                    case 'mastercard':
                        creditCardLogo.className = 'fa-brands fa-cc-mastercard'; // FontAwesome class for MasterCard
                        break;
                    case 'amex':
                        creditCardLogo.className = 'fa-brands fa-cc-amex'; // FontAwesome class for American Express
                        break;
                    case 'discover':
                        creditCardLogo.className = 'fa-brands fa-cc-discover'; // FontAwesome class for Discover
                        break;
                    case 'jcb':
                        creditCardLogo.className = 'fa-brands fa-cc-jcb'; // FontAwesome class for Discover
                        break;
                    case 'diners':
                        creditCardLogo.className = 'fa-brands fa-cc-diners-club'; // FontAwesome class for Diners
                        break;
                    default:
                        creditCardLogo.className = ''; // Clear the class if no matching type is found
                        break;
                }
            }
        });
    }
    // cleave js activation end

    // booking payment Activation
    $('.bokking-filter').hide();

    $('#buyToggleButton').on('click', function (e) {
        e.preventDefault();
        $('.bokking-filter').toggle();
    });
    $('#sellToggleButton').on('click', function (e) {
        e.preventDefault();
        $('.bokking-filter').toggle();
    });
    $('#rentToggleButton').on('click', function (e) {
        e.preventDefault();
        $('.bokking-filter').toggle();
    });

    // Product Color Activation
    $('.color-variation-btn').on('click', function () {
        $(this).addClass('active').siblings().removeClass('active');
    });

    function getWindowHeight() {
        return $(window).height();
    }

    function getWindowWidth() {
        return $(window).width();
    }

    var swipers = document.querySelectorAll('[data-slider-options]:not(.instafeed-wrapper)');
    swipers.forEach(function (swiperItem) {
        var _this = $(swiperItem),
            sliderOptions = _this.attr('data-slider-options');
        if (typeof (sliderOptions) !== 'undefined' && sliderOptions !== null) {
            sliderOptions = $.parseJSON(sliderOptions);
            var changeOnClick = _this.attr('data-slide-change-on-click');
            if (changeOnClick != '' && changeOnClick != undefined && changeOnClick == '1') {
                sliderOptions['on'] = {
                    click: function () {
                        if (this.activeIndex > this.clickedIndex) {
                            this.slidePrev();
                        } else if (this.activeIndex < this.clickedIndex) {
                            this.slideNext();
                        }
                    }
                };
            }
            if (sliderOptions['thumbs'] != '' && sliderOptions['thumbs'] != undefined) {
                var mdThumbDirection = _this.attr('data-thumb-slider-md-direction');
                if (mdThumbDirection != '' && mdThumbDirection != undefined) {
                    var thumbDirection = (sliderOptions['thumbs']['swiper']['direction'] != '' && sliderOptions['thumbs']['swiper']['direction'] != undefined) ? sliderOptions['thumbs']['swiper']['direction'] : mdThumbDirection;
                    sliderOptions['thumbs']['swiper']['on'] = {
                        init: function () {
                            if (getWindowWidth() <= sliderBreakPoint) {
                                this.changeDirection(mdThumbDirection);
                            } else {
                                this.changeDirection(thumbDirection);
                            }
                            this.update();
                        },
                        resize: function () {
                            if (getWindowWidth() <= sliderBreakPoint) {
                                this.changeDirection(mdThumbDirection);
                            } else {
                                this.changeDirection(thumbDirection);
                            }
                            this.update();
                        },
                        click: function () {
                            if (this.activeIndex == this.clickedIndex) {
                                this.slidePrev();
                            } else {
                                this.slideNext();
                            }
                        }
                    };
                }
            }
            var numberPagination = _this.attr('data-number-pagination');
            if (numberPagination != '' && numberPagination != undefined && numberPagination == '1' && sliderOptions['pagination'] != '' && sliderOptions['pagination'] != undefined) {
                sliderOptions['pagination']['renderBullet'] = function (index, className) {
                    return '<span class="' + className + '">' + pad(index + 1) + '</span>';
                }
            }
            var dataThumbs = _this.attr('data-thumbs');
            if (dataThumbs != '' && dataThumbs != undefined && sliderOptions['pagination'] != '' && sliderOptions['pagination'] != undefined) {
                dataThumbs = $.parseJSON(dataThumbs);
                if (typeof (dataThumbs) !== 'undefined' && dataThumbs !== null) {
                    sliderOptions['pagination']['renderBullet'] = function (index, className) {
                        return '<span class="' + className + '" style="background-image: url( ' + dataThumbs[index] + ' )"></span>';
                    }
                }
            }
            sliderOptions['on'] = {
                init: function () {
                    let slides = this.slides;
                    let activeIndex = this.activeIndex,
                        current_slide = this.slides[activeIndex],
                        anime_el = current_slide.querySelectorAll('[data-anime]'),
                        fancy_el = current_slide.querySelectorAll('[data-fancy-text]');
                    if (getWindowWidth() > animeBreakPoint) {
                        if (anime_el) {
                            anime_el.forEach(element => {
                                let options = element.getAttribute('data-anime');
                                if (typeof (options) !== 'undefined' && options !== null) {
                                    options = $.parseJSON(options);
                                    element.classList.add('appear');
                                    element.style.transition = "none";
                                    if (options.el) {
                                        for (let i = 0; i < element.children.length; i++) {
                                            element.children[i].style.transition = "none";
                                            element.children[i].classList.add('appear');
                                        }
                                    }
                                    animeAnimation(element, options);
                                    element.classList.remove('appear');
                                }
                            });
                        }
                    }
                },
                slideChange: function () {
                    let slides = this.slides;
                    let activeIndex = this.activeIndex,
                        current_slide = this.slides[activeIndex],
                        anime_el = current_slide.querySelectorAll('[data-anime]'),
                        fancy_el = current_slide.querySelectorAll('[data-fancy-text]');
                    if (getWindowWidth() > animeBreakPoint) {
                        if (fancy_el) {
                            fancy_el.forEach(element => {
                                element.classList.add('appear');
                                let fancy_options = element.getAttribute('data-fancy-text');
                                if (typeof (fancy_options) !== 'undefined' && fancy_options !== null) {
                                    fancy_options = $.parseJSON(fancy_options);
                                    let child = element;
                                    FancyTextDefault(child, fancy_options);
                                    element.classList.remove('appear');
                                }
                            });
                        }
                        if (anime_el) {
                            anime_el.forEach(element => {
                                let options = element.getAttribute('data-anime');
                                if (typeof (options) !== 'undefined' && options !== null) {
                                    options = $.parseJSON(options);
                                    element.classList.add('appear');
                                    element.style.transition = "none";
                                    if (options.el) {
                                        for (let i = 0; i < element.children.length; i++) {
                                            element.children[i].style.transition = "none";
                                            element.children[i].classList.add('appear');
                                        }
                                    }
                                    animeAnimation(element, options);
                                    element.classList.remove('appear');
                                }
                            });
                        }
                    }
                }
            };
            var isNumberPagination = _this.attr('data-swiper-number-line-pagination') || false;
            var isNumberNavigation = _this.attr('data-swiper-number-navigation') || false;
            var isNumberPaginationProgress = _this.attr('data-swiper-number-pagination-progress') || false;
            var showProgress = _this.attr('data-swiper-show-progress') || false;
            var hasGalleryBox = _this.attr('data-gallery-box') || false;
            if (isNumberPagination || isNumberNavigation || isNumberPaginationProgress || hasGalleryBox) {
                sliderOptions['on'] = {
                    init: function () {
                        if (isNumberPagination || isNumberNavigation || isNumberPaginationProgress) {
                            if (sliderOptions.hasOwnProperty('loop') && sliderOptions['loop']) {
                                var slideLength = this.slides.length;
                            }
                            var length = slideLength;
                            if (isNumberPaginationProgress) {
                                _this.parent().find('.number-next').text('0' + length);
                                _this.parent().find('.number-prev').text('01');
                                _this.parent().find('.swiper-pagination-progress')[0].style.setProperty('--swiper-progress', (100 / length).toFixed(2) + '%');
                            } else {
                                _this.parent().find('.number-next').text('02');
                                _this.parent().find('.number-prev').text('0' + length);
                                if (showProgress)
                                    _this.parent().find('.swiper-pagination-progress')[0].style.setProperty('--swiper-progress', (100 / length).toFixed(2) + '%');
                            }
                        }
                        if (typeof $.fn.magnificPopup === 'function') {
                            if (hasGalleryBox) {
                                _this.magnificPopup({
                                    delegate: 'a',
                                    type: 'image',
                                    closeOnContentClick: true,
                                    closeBtnInside: false,
                                    gallery: {
                                        enabled: true
                                    }
                                });
                            }
                        }
                    },
                    slideChange: function () {
                        if (isNumberPagination || isNumberNavigation || isNumberPaginationProgress) {
                            if (sliderOptions.hasOwnProperty('loop') && sliderOptions['loop']) {
                                var slideLength = this.slides.length;
                            }
                            var length = this.slides.length,
                                active = (this.realIndex) + 1,
                                next = active + 1,
                                prev = active - 1;
                            if (active == 1) {
                                prev = length;
                            }
                            if (active == length) {
                                next = 1;
                            }
                            if (isNumberPaginationProgress) {
                                _this.parent().find('.number-prev').each(function () {
                                    $(this).text(active < 10 ? '0' + active : active);
                                });
                                _this.parent().find('.swiper-pagination-progress')[0].style.setProperty('--swiper-progress', ((100 / length) * active).toFixed(2) + '%');
                            } else {
                                _this.parent().find('.number-next').each(function () {
                                    $(this).text(next < 10 ? '0' + next : next);
                                });
                                _this.parent().find('.number-prev').each(function () {
                                    $(this).text(prev < 10 ? '0' + prev : prev);
                                });
                                if (showProgress)
                                    _this.parent().find('.swiper-pagination-progress')[0].style.setProperty('--swiper-progress', ((100 / length) * active).toFixed(2) + '%');
                            }
                        }
                    }
                }
            }
            var thumbClick = _this.attr('data-swiper-thumb-click') || false;
            if (thumbClick && sliderOptions.hasOwnProperty('thumbs')) {
                sliderOptions['thumbs']['swiper']['on'] = {
                    click: function (swiper) {
                        if (swiper.activeIndex >= swiper.clickedIndex) {
                            swiper.slidePrev();
                        } else if (swiper.activeIndex < swiper.clickedIndex) {
                            swiper.slideNext();
                        }
                    }
                }
            }
            if (typeof Swiper === 'function') {
                _this.imagesLoaded(function () {
                    var swiperObj = new Swiper(swiperItem, sliderOptions);
                    swiperObjs.push(swiperObj);
                });
            }
        }
    });

    //offer house
    function mediaSize() {
        /* Set the matchMedia */
        if (window.matchMedia('(min-width: 768px)').matches) {
            const panels = document.querySelectorAll('.col-custom')
            panels.forEach(panel => {
                panel.addEventListener('click', () => {
                    removeActiveClasses()
                    panel.classList.add('active')
                })
            })

            function removeActiveClasses() {
                panels.forEach(panel => {
                    panel.classList.remove('active')
                })
            }

        } else {
            /* Reset for CSS changes â€“ Still need a better way to do this! */
            $(".col-custom ").addClass("active");
        }
    };
    /* Call the function */
    mediaSize();
    /* Attach the function to the resize event listener */
    window.addEventListener('resize', mediaSize, false);

    //featured js for feature properties
    if ($('.featured-portfolio-load-more').length > 0) {
        $('.grid').imagesLoaded(function () {
            // init Isotope
            var $grid = $('.grid').isotope({
                itemSelector: '.grid-item',
                percentPosition: true,
                masonry: {
                    // use outer width of grid-sizer for columnWidth
                    columnWidth: '.grid-item',
                }
            });


            // filter items on button click
            $('.featured-menu').on('click', 'button', function () {
                var filterValue = $(this).attr('data-filter');
                $grid.isotope({ filter: filterValue });
            });

            //for menu active class
            $('.featured-menu button').on('click', function (event) {
                $(this).siblings('.active').removeClass('active');
                $(this).addClass('active');
                event.preventDefault();
            });

            var show_item = $('.featured-portfolio-load-more').attr('data-show');
            var count_item = show_item;
            var isotop_call = $grid.data('isotope');

            loadMore(show_item);

            function loadMore(showing) {
                $grid.find(".hidden").removeClass("hidden");

                var hidden = isotop_call.filteredItems.slice(showing, isotop_call.filteredItems.length).map(function (item) {
                    return item.element;
                });

                $(hidden).addClass('hidden');
                $grid.isotope('layout');


                if (hidden.length == 0) {
                    jQuery("#featured-load-more").hide();
                } else {
                    jQuery("#featured-load-more").show();
                };

            }

            $("#featured-load-more").on('click', function () {
                if ($('.featured-menu').data('clicked')) {

                    count_item = show_item;
                    $('.featured-menu').data('clicked', false);
                } else {
                    count_item = count_item;
                };

                count_item = count_item + show_item;

                loadMore(count_item);
            });

            $(".featured-menu").on('click', function () {
                $(this).data('clicked', true);

                loadMore(show_item);
            });

        });
    } else {
        $('.grid').imagesLoaded(function () {
            // init Isotope
            var $grid = $('.grid').isotope({
                itemSelector: '.grid-item',
                percentPosition: true,
                masonry: {
                    // use outer width of grid-sizer for columnWidth
                    columnWidth: '.grid-item',
                }
            });


            // filter items on button click
            $('.featured-menu').on('click', 'button', function () {
                var filterValue = $(this).attr('data-filter');
                $grid.isotope({ filter: filterValue });
            });

            //for menu active class
            $('.featured-menu button').on('click', function (event) {
                $(this).siblings('.active').removeClass('active');
                $(this).addClass('active');
                event.preventDefault();
            });

        });

        var show_item_2 = $('.featured-load-item-count').attr('data-show');
        $(".featured-load-item").hide();
        $(".featured-load-item").slice(0, show_item_2).show();
        $("body").on('click touchstart', '.load-more', function (e) {
            e.preventDefault();
            $(".featured-load-item:hidden").slice(0, show_item_2).slideDown();
            if ($(".featured-load-item:hidden").length == 0) {
                $(".load-more").css('display', 'none');
            }

        });
    }

})(jQuery);