$(".icon-hamburger").click(function() {
	$(this).toggleClass('open');
	$('.main-nav').toggleClass("open")
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


$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    items:1,
    autoplay: true
})