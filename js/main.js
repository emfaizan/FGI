$(".trigger").click(function() {
	$('.main-nav').toggleClass("open");
    $('body').toggleClass("menu-active");
});

// $('.dropdown-menu').click(function(){
//     $(this).toggleClass("active");
// });


// show dropdown once and then go to url
$(".main-nav > li > a").click(function(e) {
    $parent = $(this).parent('li');
    isDropdown = $parent.hasClass('dropdown-menu');
    isActive = $parent.hasClass('active');
    
    if(window.matchMedia("(max-width: 1023px)").matches && !isActive && isDropdown){
        e.preventDefault();
        $parent.toggleClass('active');
    }
});

// Always toggle underneath dropdown
$(".toggle-menu").click(function(e) {
    $parent = $(this).parent('.dropdown-menu');
    $parent.toggleClass('active');
});


$(window).scroll(function(){
    var sticky = $('.header'),
        scroll = $(window).scrollTop();
  
    if (scroll >= 100) sticky.addClass('sticky');
    else sticky.removeClass('sticky');
});


$('.slider-wrapper').slick({
    slidesToShow: 1,
    prevArrow: $('.prev-slide'),
    nextArrow: $('.next-slide'),
});