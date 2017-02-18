(function ($) {
 "use strict";

/*----------------------------
 jQuery MeanMenu
------------------------------ */
jQuery('nav#dropdown').meanmenu();	
/*----------------------------
 scrollspy and Smooth Scroll active
------------------------------ */
$('body').scrollspy({
	target: '#navbar-example',
	offset: 95
});
//Smooth Scroll
var $root = $('html, body');
$('#nav li a').click(function() {
	var href = $.attr(this, 'href');
	$root.animate({
		scrollTop: $(href).offset().top
	}, 2000, function () {
		window.location.hash = href;
	});
	return false;
});
/*----------------------------
 wow js active
------------------------------ */
 new WOW().init();
 
/*----------------------------
 nivoSlider active
------------------------------ */
 $('#mainSlider').nivoSlider({
	directionNav: true,
	animSpeed: 500,
	slices: 18,
	pauseTime: 5000,
	pauseOnHover: false,
	controlNav: false,
	prevText: '<i class="fa fa-angle-left nivo-prev-icon"></i>',
	nextText: '<i class="fa fa-angle-right nivo-next-icon"></i>'
 });
/*---------------------
Bootstrap Tabs active
--------------------- */
$('#myTabs a').on('click',function (e) {
	e.preventDefault()
	$(this).tab('show')
});
$('#myTab2 a').on('click',function (e) {
	e.preventDefault()
	$(this).tab('show')
});
/*========================= 
 mixitup 
===========================*/
$('.project-list').mixItUp({
	effects: ['fade','rotateZ'],
	   easing: 'snap',
});			
/*----------------------------
 owl active
------------------------------ */  
   $("#testimonials_slider").owlCarousel({
      autoPlay: true, 
	  slideSpeed:2000,
	  pagination:true,
	  navigation:false,	 
      singleItem:true, 
      items : 1,
	  /* transitionStyle : "fade", */    /* [This code for animation ] */
	  navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
      itemsDesktop : [1199,1],
	  itemsDesktopSmall : [980,1],
	  itemsTablet: [768,1],
	  itemsMobile : [479,1],
  });
/*--------------------------
 scrollUp active
---------------------------- */	
	$.scrollUp({
        scrollText: '<i class="fa fa-fighter-jet"></i>',
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'fade'
    }); 	   
 
})(jQuery); 