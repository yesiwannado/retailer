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

    $('.signup-btn').click(function (sb) {
        sb.preventDefault();
        $(this).addClass('clicked');
        $(this).text('запись открыта');
    })
    $('.categ-switcher').click(function () {
        $(this).toggleClass('clicked');
        $(this).text(function(i, text){
            return text === "все компании без сортировки" ? "компании с сортировкой" : "все компании без сортировки";
        })
    })
    $('.form-timetable').click(function () {
      $('.timetable').addClass('opened')
    })
    $('.edit-btn').click(function () {
        $('.timetable').removeClass('opened')
    })

    $('.plate-dd').click(function (pp) {
        pp.stopPropagation();
    })

    $('.larrow').click(function () {
        $(this).toggleClass('opened');
    })

    $('.level-one-list .larrow.f').click(function () {
        $(this).parent('li').find('.level-two-list').fadeToggle(300);
    })
    $('.level-two-list .larrow').click(function () {
        $('.level-three-list').fadeToggle(300);
    })

    $('.card-area').click(function () {
        $(this).addClass('filling');
        $('.card-inputs-wrapper').addClass('opened');
        $("input.firstone").focus()
    })

    $('.inn').click(function () {
        $('.card-t').removeClass('active');
        $('.inn').addClass('active');
        $('.inn-me').addClass('visible');
        $('.card-me').removeClass('visible');
    })
    $('.card-t').click(function () {
        $('.card-t').addClass('active');
        $('.inn').removeClass('active');
        $('.inn-me').removeClass('visible');
        $('.card-me').addClass('visible');
    })

});


document.addEventListener("touchstart", function(){}, true);