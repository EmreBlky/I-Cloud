// JavaScript Document

jQuery(document).ready(function($) {
    "use strict";
    // Magnific Popup Initialization
    $(".bubble-popup").magnificPopup({
        type: 'image',
        mainClass: 'mfp-with-zoom'
    });


    // jPages paginated blocks
    var $holder = $("body").find(".holder");
    if (!$holder.length) {
        $("body").append("<div class='holder'></div>");
    }
    $("div.holder").jPages({
        containerID: "products",
        previous: ".block-products a[data-role='prev']",
        next: ".block-products a[data-role='next']",
        animation: "fadeInRight",
        perPage: 4
    });
        $("div.holder").jPages({
        containerID: "products-related",
        previous: ".block-products a[data-role='prev']",
        next: ".block-products a[data-role='next']",
        animation: "fadeInRight",
        perPage: 3
    });
    $("div.holder").jPages({
        containerID: "latest-posts",
        previous: ".block-latest-posts a[data-role='prev']",
        next: ".block-latest-posts a[data-role='next']",
        animation: "bounceInRight",
        perPage: 4
    });

    $("div.holder").jPages({
        containerID: "why-choose-us",
        previous: ".block-why-choose-us a[data-role='prev']",
        next: ".block-why-choose-us a[data-role='next']",
        animation: "flipInY",
        perPage: 4
    });

    $("div.holder").jPages({
        containerID: "what-clients-say",
        previous: ".wcs a[data-role='prev']",
        next: ".wcs a[data-role='next']",
        animation: "fadeInRight",
        perPage: 1
    });

    $("div.holder").jPages({
        containerID: "twitter-feed",
		previous: "a.arrowPrev",
		next: "a.arrowNext",
        animation: "fadeInRight",
		pause       : 4000,
        clickStop   : true,
        perPage: 1
    });
	$('.login-button a').click(function() {
		$(this).parent().toggleClass('open');
		return false;
	})
	$('.toggleMenu1').click(function() {
		$(this).toggleClass("active");
		$(".top-navigation > .nav").toggleClass('shown');
		return false;
	})
		

	$(document).mouseup(function(e) 
	{
		var container = $(".login-button");

		// if the target of the click isn't the container nor a descendant of the container
		if (!container.is(e.target) && container.has(e.target).length === 0) 
		{
			$('.login-button').removeClass('open');
		}
		var container1 = $(".top-navigation");
		if (!container1.is(e.target) && container1.has(e.target).length === 0) 
		{
			$('.toggleMenu1').removeClass('active');			
			$(".top-navigation > .nav").removeClass('shown');

		}
	});



    // Toggle Box functions
    $(".toggle-box-header").click(function() {
        var $obj = $(this);
        if ($obj.hasClass("expanded")) {
            $obj.removeClass("expanded");
            $obj.next("div").slideUp();
        }
        else {
            $obj.addClass("expanded");
            $obj.next("div").slideDown("slow");
        }
    });

    /** 
     * Testimonials arrow adjustment
     * 
     * First of all, we will move arrow to top when page is loaded, if the window width is smaller than 767px (tablets & mobiles)
     */
    var $testimonialsLeftSided = $(".text-testimonial-left");
    var $testimonialsRightSided = $(".text-testimonial-right");
    if ($(window).width() < 767) {
        $testimonialsLeftSided.removeClass("text-testimonial-left").addClass("text-testimonial-top");
        $testimonialsRightSided.removeClass("text-testimonial-right").addClass("text-testimonial-top");
    }
    /*
     * Secondly, we will do the same operation when window width becomes smaller than 767px,
     * and vice versa when window width becomes greater than 767px
     */
    $(window).resize(function() {
        if ($(window).width() < 767) {
            $testimonialsLeftSided.removeClass("text-testimonial-left").addClass("text-testimonial-top");
            $testimonialsRightSided.removeClass("text-testimonial-right").addClass("text-testimonial-top");
        }
        else {
            $testimonialsLeftSided.removeClass("text-testimonial-top").addClass("text-testimonial-left");
            $testimonialsRightSided.removeClass("text-testimonial-top").addClass("text-testimonial-right");
        }
    });
    $('.slider').css('opacity','1');
    $('#bxslider').bxSlider({auto: true,
    onSliderLoad: function(){
        
    }
    });
    $('.bxslider').bxSlider({pagerCustom: '.bxpager'});

    $(".flexisel").flexisel({
        visibleItems: 5,
        animationSpeed: 1000,
        autoPlay: true,
        autoPlaySpeed: 3000,
        pauseOnHover: true,
        enableResponsiveBreakpoints: true,
        responsiveBreakpoints: {
            portrait: {
                changePoint: 480,
                visibleItems: 1
            },
            landscape: {
                changePoint: 640,
                visibleItems: 2
            },
            tablet: {
                changePoint: 768,
                visibleItems: 3
            }
        }
    });

    // Form Styler
    $(".selectbox, .manufacturers input").styler();

    // Color Filter
    $(".colors li a").each(function() {
        $(this).css("background-color", "#" + $(this).attr("rel")).attr("href", "#" + $(this).attr("rel"));
    });

    // Clone portfolio items to get a second collection for Quicksand plugin
    var $portfolioClone = $(".products").clone();

    // Attempt to call Quicksand on every click event handler
    $(".filter a").click(function(e) {
        $(".filter li").removeClass("current");

        // Get the class attribute value of the clicked link
        var $filterClass = $(this).parent().attr("class");

        var $filteredPortfolio;

        if ($filterClass === "all") {
            $filteredPortfolio = $portfolioClone.find("li");
        } else {
            $filteredPortfolio = $portfolioClone.find("li[data-type~=" + $filterClass + "]");
        }

        // Call quicksand
        $(".products").quicksand($filteredPortfolio, {
            duration: 400,
            easing: 'swing'
        }, function() {

            $(".time").countdown({
                date: new_date,
                yearsAndMonths: true,
                leadingZero: true
            });

        });


        $(this).parent().addClass("current");

        // Prevent the browser jump to the link anchor
        e.preventDefault();
    });


    // Daily Deal CountDown Clock Settings
    var date = new Date().getTime();			// This example is just to show how this function works.
    var new_date = new Date(date + 86400000);	// You can set your own time whenever you want.
//    var n = new_date.toUTCString();				// 'date' value is given in milliseconds.

    $(".time").countdown({
        date: new_date,
        yearsAndMonths: true,
        leadingZero: true
    });


    // Categories Menu Manipulations
    $(".ul-side-category li a").click(function() {
        var sm = $(this).next();
        if (sm.attr("class") === "sub-category") {
            if (sm.css("display") === "none") {
                $(this).next().slideDown();
            }
            else {

                $(this).next().slideUp();

                $(this).next().find(".sub-category").slideUp();


                /*$(this).next().find(".categories-submenu").slideUp("normal", function() {
                 $(this).parent().find(".icon-angle-down").removeClass("icon-angle-down").addClass("icon-angle-right");
                 });*/
            }

            return false;
        }
        else {
            return true;
        }
    });





});


