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
  
    if (scroll >= 150) sticky.addClass('stick');
    else sticky.removeClass('stick');
});


$('.slider-wrapper').slick({
    slidesToShow: 1,
    fade: true,
    prevArrow: $('.prev-slide'),
    nextArrow: $('.next-slide'),
});

$(document).on('click', '#filterTrigger', function(){
    $('#filters').toggle();
    $(this).toggleClass('opened');
});

$(document).on('click', '.accordian-header', function(){
    $(this).toggleClass('opened');
});

$(document).on('click', '.open-modal', function(){
    var modal = $(this).attr('modal-id');
    $('body').addClass('modal-visible');

    $(modal).show();
});

$(document).on('click', '.close-modal', function(){
    var modal = $(this).attr('modal-id');
    $('body').removeClass('modal-visible');

    $(modal).hide();
})