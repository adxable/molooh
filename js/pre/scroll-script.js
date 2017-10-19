// Scrolling

window.addEventListener('scroll', function() {
	console.log('scroll')
});

$(window).scroll(function() {
	var scrollPos = $(this).scrollTop();
	console.log(scrollPos);

	if (scrollPos > 674) {
		$('.stickyNav').addClass('fixed-nav');
	} else {
		$('.stickyNav').removeClass('fixed-nav');	
	}
});