$(document).ready(function(){

    $(window).scroll(function(){

        if ($(window).scrollTop() > 630 ){
            $('.navbar').addClass('fixed-top');
        }
        if ($(window).scrollTop() < 631 ){
            $('.navbar').removeClass('fixed-top');
        }
    });
});

$(".navbar-dark ul li a[href^='#'], #cover a[href^='#'],  .footer .scroll-button-to-top a[href^='#'], #section-parallax a[href^='#']").on('click', function(e){
    e.preventDefault();

    var hash = this.hash;

    $('html, body').animate({
        scrollTop: $(hash).offset().top
    }, 300, function(){
        window.location.hassh = hash;
    });
});

// FEATURES
$('.js-wp-1').waypoint(function(direction){
    $('.js-wp-1').addClass('animated fadeInDown');
}, {
    offset: '50%'
});

$('.js-wp-2').waypoint(function(direction){
    $('.js-wp-2').addClass('animated fadeInLeft');
}, {
    offset: '50%'
});

$('.js-wp-3').waypoint(function(direction){
    $('.js-wp-3').addClass('animated fadeInRight');
}, {
    offset: '50%'
});

$('.js-wp-4').waypoint(function(direction){
    $('.js-wp-4').addClass('animated fadeInUp');
}, {
    offset: '50%'
});

// TIMELINE
$('.js-wp-5').waypoint(function(direction){
    $('.js-wp-5').addClass('animated fadeInDown');
}, {
    offset: '50%'
});

$('.js-wp-6').waypoint(function(direction){
    $('.js-wp-6').addClass('animated fadeInRight');
}, {
    offset: '50%'
});

$('.js-wp-7').waypoint(function(direction){
    $('.js-wp-7').addClass('animated fadeInLeft');
}, {
    offset: '50%'
});

$('.js-wp-8').waypoint(function(direction){
    $('.js-wp-8').addClass('animated fadeInLeft');
}, {
    offset: '50%'
});

$('.js-wp-9').waypoint(function(direction){
    $('.js-wp-9').addClass('animated fadeInRight');
}, {
    offset: '50%'
});

$('.js-wp-10').waypoint(function(direction){
    $('.js-wp-10').addClass('animated fadeInRight');
}, {
    offset: '50%'
});

$('.js-wp-11').waypoint(function(direction){
    $('.js-wp-11').addClass('animated fadeInLeft');
}, {
    offset: '50%'
});

$('.js-wp-12').waypoint(function(direction){
    $('.js-wp-12').addClass('animated fadeInRight');
}, {
    offset: '90%'
});

$('.js-wp-13').waypoint(function(direction){
    $('.js-wp-13').addClass('animated fadeInLeft');
}, {
    offset: '90%'
});
