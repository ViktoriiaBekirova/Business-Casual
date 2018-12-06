// фиксированное меню при скроле страницы до него
$(document).ready(function(){
    var HeaderTop = $('.menu').offset().top; // координаты относительно начала страницы
    var pad = $('.menu').css('height');

    $(window).scroll(function(){
        if( $(window).scrollTop() > HeaderTop ) {
            $('.menu').css({position: 'fixed', top: '0px', left: '0px', right: '0px'});
            $('.base').css('padding-top', pad);
        } else {
            $('.menu').css({position: 'relative'});
            $('.base').css('padding-top', '0px');
        }
    });
});

// открытие меню при клике
$(function () {
    $('.icon').on('click', function () {
        $('.menu_container').slideToggle(400, function () {
            if ($(this).css('display') === 'none') {
                $(this).removeAttr('style');
            }
        });
    });
});

$(window).load(function() {
    $('.flexslider').flexslider({
        animation: "slide",
        slideshowSpeed: 3000// время переключения слайдов
    });
});