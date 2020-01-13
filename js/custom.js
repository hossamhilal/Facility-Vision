$(window).on('load', function () {
    $('.loader').fadeOut(500, function () {
        $(this).remove();
    });      
});



/*global $ */
$(document).ready(function ($) {
    'use strict';
 
    // Open navbarSide when button is clicked
    $('.site-header .nav-btn').on('click', function () {
        $('.header-nav').toggleClass('show');
        $('.header-overlay').toggleClass('show');
        $('body').toggleClass('no-scroll');
    });
    $('.header-overlay').on('click', function () {
        $('.site-header .nav-btn').removeClass('open');
        $('.header-nav').removeClass('show');
        $('.header-overlay').removeClass('show');
        $('body').removeClass('no-scroll');
    });

    // Show Search 
    $('.show-search').on('click', function () {
        $('.header-search').wrap('<div class="fixed-wrapper"></div>');
        $('.header-search').toggle();
        $('.fixed-wrapper').append('<div class="close-fixed-wrapper-search"><i class="icofont-close-line"></i></div>');
    });

    // Hide Search 
    $(document).on('click','.close-fixed-wrapper-search', function () {
        $(this).remove();
        var search = $('.header-search').html();
        $('.header-search').hide(); 
        $('.header-search').unwrap(); 
    });


    // Show Call 
    $('.show-call').on('click', function () {
        $('.header-call').wrap('<div class="fixed-wrapper"></div>');
        $('.header-call').css('display' ,'flex');
        $('.fixed-wrapper').append('<div class="close-fixed-wrapper-call"><i class="icofont-close-line"></i></div>');
    });

    // Hide Call
    $(document).on('click','.close-fixed-wrapper-call', function () {
        $(this).remove();
        $('.header-call').hide();
        $('.header-call').unwrap();  
    });


    // Header Owl
    $('.header-owl').owlCarousel({
        rtl: true,
        margin: 0,
        autoplay: true,
        loop: true,
        nav: true,
        dots:false,
        navText: ["<i class='icofont-simple-right'></i>", "<i class='icofont-simple-left'></i>"],
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

    // Services Owl
    $('.services-owl').owlCarousel({
        rtl: true,
        margin: 0,
        autoplay: true,
        loop: true,
        nav: true,
        dots:false,
        navText: ["<i class='icofont-simple-right'></i>", "<i class='icofont-simple-left'></i>"],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });


    // INPUT FOCUS ANIMATION 
    $('.field .form-control').focus(function(){
        $(this).parent('.field').addClass('focused');
    });

    $('.field .form-control').each(function() { 
        if ($(this).val() != "") {
            $(this).parent('.field').addClass('focused');   
        }
    });

    $('.field .form-control').focusout(function(){
        if($(this).val() === "")
        $(this).parent('.field').removeClass('focused');
    });


    

});


