window.$ = window.jQuery = window.jquery = require('jquery');
require('malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.concat.min')($);
window.WOW = require('wowjs').WOW;



$(document).ready(function() {

    new WOW().init();

    $('html, body, .block').click(function () {
        $('.dropdown-menu').fadeOut(200);
        $('.da-name, .dd-title, .plate-dd').removeClass('opened');
    });

    $('.da-name').click(function (dd) {
        dd.stopPropagation();
        $('.dropdown-menu').fadeToggle(300);
        $(this).toggleClass('opened');
    })
    $('.dropdown-menu').click(function (dd) {
        dd.stopPropagation();
    })

    $('.lf-plate').click(function () {
        $(this).addClass('clicked');
    })

    $('#type-dd-title').click(function (ddt) {
        ddt.stopPropagation();
        $(this).toggleClass('opened');
        $('#type-dd').toggleClass('opened');
    })

    $('#loc-title').click(function (ddt) {
        ddt.stopPropagation();
        $(this).toggleClass('opened');
        $('#loc-dd').toggleClass('opened');
    })

    $('#type-dd li a').click(function (dda) {
        dda.preventDefault();
        $('#type-dd-title').text('Площадь в тц');
        $('.tc-pic').addClass('opened');
    })

    $('.one-naz-plate').click(function (naz) {
        naz.stopPropagation();
        $(this).find('#naz-dd').toggleClass('opened')
        $(this).toggleClass('clicked')
    })
    $('#naz-dd li a').click(function (naza) {
        naza.preventDefault();
        $(this).closest('.one-naz-plate').addClass('final');
    })

    $('.limits-switcher').click(function () {
        $(this).toggleClass('clicked');
        $(this).text(function(i, text){
            return text === "с ограничениями" ? "без ограничений" : "с ограничениями";
        })
    })

    $('.anchor-link').click(function(){
        $('html, body').animate({
            scrollTop: $( $.attr(this, 'href') ).offset().top
        }, 500);
        return false;
    });



});


document.addEventListener("touchstart", function(){}, true);