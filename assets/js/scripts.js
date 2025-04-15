$(document).ready(function(){ 
	// Feature Carousel
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
		], 
	});

	// mobile menu 

	$('.bars_icon').on('click', function (e) {
		e.preventDefault();
		$('.nav_box').slideToggle();
	
		const icon = $(this).find('i');
		if (icon.hasClass('fa-bars')) {
			icon.removeClass('fa-bars').addClass('fa-times');
		} else {
			icon.removeClass('fa-times').addClass('fa-bars');
		}
	});
	
	
	





});