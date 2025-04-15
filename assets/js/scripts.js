$(document).ready(function(){
	// Mobile Menu
	// $('.logo a i').click(function(){
	// 	$('.menu ul').slideToggle(1000);

	// 	return false
	// });

	// Banner Carousel
	$('.feature_carousel').owlCarousel({
		items: 1,
		loop: true,
		nav: true,
		dots: false,
		// autoplay: true,
		autoplayTimeout: 5000,  
		autoplaySpeed: 1600,    
		smartSpeed: 1600,      
		margin: 20,
		navText: [
			'<span class="custom-nav prev"><i class="fa-solid fa-angle-left"></i></span>',
			'<span class="custom-nav next"><i class="fa-solid fa-angle-right"></i></span>'
		]
	});
	
	





});