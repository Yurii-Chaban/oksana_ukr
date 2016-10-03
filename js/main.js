// for main menu
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
// for osx menu
$(function () {
    $('ul.osx-dock li a').each(function () {
        var location = window.location.pathname;
        var link = this.pathname;
        var result = location.match(link);
        if(result && link.length > 0) {
            $(this).parent().addClass('osx-menu-active');
            $(this).parent().prev().addClass("nearby");
            $(this).parent().next().addClass("nearby");
        }
    });
});

/*---------------------*/
/*SETTINGS CLICK*/
/*---------------------*/
$("#settings").click(function() {
  $(this).find("span").toggleClass('active-setting');
  $("#sett").toggleClass("show");
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
// FOR SERVICES PAGE
// when click on button add item
$(document).ready(function(){
    var str = '<li><div class="services-edit"><h3 class="title"><a href="#">Service name # item</a></h3><h3 class="edit-title"><a href="#">Edit<span class="fa fa-pencil" aria-hidden="true"></span></a></h3></div></li>';
    $("#add").click(function(){
        $(".services-list").append(str); 
    });
});
// FOR BLOG PAGE
// when click on button add item
$(document).ready(function(){
    var addArticle = '<li><div class="article-edit"><h3 class="title"><a href="#">name of article # item</a></h3><h4 class="article-post-date">00/00/0000</h4></div><div class="blog-photo-container"><a href="#"></a></div><div class="overflow-block"><div class="article-edit-desctop"><h3 class="title"><a href="#">name of article # item</a></h3><h4 class="article-post-date">00/00/0000</h4></div><div class="blog-short-description"><h3 class="description"><a href="#"><span>Short</span> description...</a></h3><h3 class="edit-title"><a href="#"><span class="wrap-word">Edit page</span> of article # item<span class="fa fa-pencil" aria-hidden="true"></span></a></h3></div></div></li>';
    $("#add_article").click(function(){
        $(".articles-list").append(addArticle); 
    });
});