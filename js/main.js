// for main menu mobile
$(function () {
    $('.hidden-menu li a').each(function () {
        var location = window.location.pathname;
        var link = this.pathname;
        var result = location.match(link);
        if(result && link.length > 0) {
            $(this).addClass('hidden-menu-active');
        }
    });
});

// for main menu desctop
$(function () {
    $('.main-menu .list-menu li a').each(function () {
        var location = window.location.pathname;
        var link = this.pathname;
        var result = location.match(link);
        if(result && link.length > 0) {
            $(this).addClass('desctop-menu-active');
        }
    });
});

// for footer menu
$(function () {
    $('.footer-menu .menu-list li a').each(function () {
        var location = window.location.pathname;
        var link = this.pathname;
        var result = location.match(link);
        if(result && link.length > 0) {
            $(this).addClass('footer-menu-active');
        }
    });
});

// lenguage block
$(function () {
    $('#lenguage-list li a').each(function () {
        var location = window.location.pathname;
        var link = this.pathname;
        var result = location.match(link);
        if(result && link.length > 0) {
            $(this).addClass('lenguage-item-active');
        }
    });
});

// lenguage block
$(function () {
    $('.pagination-list li a').each(function () {
        var location = window.location.pathname;
        var link = this.pathname;
        var result = location.match(link);
        if(result && link.length > 0) {
            $(this).addClass('pagination-active');
        }
    });
});

// for slider in Home page
var swiper_main = new Swiper('.swiper-container-home-page', {
    pagination: '.swiper-pagination',
    paginationClickable: true,
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    loop: true,
    slidesPerView: 1,
    spaceBetween: 0,
    simulateTouch: true,
    centeredSlides: true,
    autoplay: 3500,
    speed: 1000,
    watchSlidesProgress: true,
    autoplayDisableOnInteraction: false
});
// mobile blog more slider
var swiper = new Swiper('.swiper-container-mobile', {
    paginationClickable: true,
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    loop: true,
    slidesPerView: 1,
    paginationClickable: true,
    simulateTouch: true,
    centeredSlides: true,
    autoplay: 3500,
    speed: 1000,
    spaceBetween: 0
});
// desctop blog more slider
var swiper = new Swiper('.swiper-container-desctop', {
    paginationClickable: true,
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    loop: true,
    slidesPerView: 3,
    paginationClickable: true,
    simulateTouch: true,
    centeredSlides: true,
    autoplay: 3500,
    speed: 1000,
    spaceBetween: 0
});
// FOR DROPDOWN ACTIVE
$(document).ready(function($) {
    $('.ui.dropdown')
    .dropdown()
    ;
});     
// FOR DISABLED / ANABLED LENGUAGE
$( document ).ready(function() {

    $( '.girlLanguage').parent('li').find('input[type=radio]').attr('disabled',true);

    $('.girlLanguage').on('change',function(){
        $( '.girlLanguage:checked').parent('li').find('input[type=radio]').attr('disabled',false);
        $( '.girlLanguage').filter(":not(':checked')").parent('li').find('input[type=radio]').attr('disabled',true);
    });

}); 