$(document).ready(function() {

	$(window).scroll( function(){

		// slide in from left to right
		// $('.slide-right-jQ').each(function() {
		// 	var objBot = $(this).offset().top + $(this).outerHeight();
		// 	var winBot = $(window).scrollTop() + $(window).height();

		// 	if( winBot > objBot ){
		// 		$(this).animate({
		// 			opacity: 1,
		// 			marginRight: "0",
		// 			marginLeft: "0"
		// 		}, 500, 'linear' );
		// 	}
		// });

		$('.slide-right-jQ').each(function() {
			var objBot = ($(this).offset().top + $(this).outerHeight()) / 3;
			var winBot = $(window).scrollTop() + $(window).height();

			if( winBot > objBot ){
				$(this).animate({
					opacity: 1,
					marginRight: "0",
					marginLeft: "0",
				}, 500, 'linear' );
			}
		});		


		// slide in from right to left
		$('.slide-left-jQ').each(function() {
			var objBot = ($(this).offset().top + $(this).outerHeight() / 2);
			var winBot = $(window).scrollTop() + $(window).height();

			if( winBot > objBot ){
				$(this).animate({
					opacity: 1,
					marginRight: "0",
					marginLeft: "0",
				}, 900, 'linear' );
			}
		});

		// fade in when obj is 33% in viewport
		$('.fade-in-jQ').each( function(){
			var objBot = $(this).offset().top + ($(this).outerHeight() / 4);
			var winBot = $(window).scrollTop() + $(window).height();

			if( winBot > objBot ){
				console.log('in');
				$(this).animate({

					opacity: 1
				}, 800 );
			}
		});

		// slide in from right to left (always visible ) when obj is 50% in viewport
		$('.visible-slide-left-jQ').each(function() {
			var objBot = $(this).offset().top + ($(this).outerHeight() / 2);
			var winBot = $(window).scrollTop() + $(window).height();

			if( winBot > objBot ){
				$(this).animate({
					marginRight: "-40px",
					marginLeft: "40px"
				}, 600, 'linear' );
			}
		});

		// slide in from left to right (always visible ) when obj is 50% in viewport
		$('.visible-slide-right-jQ').each(function() {
			var objBot = $(this).offset().top + ($(this).outerHeight() / 2);
			var winBot = $(window).scrollTop() + $(window).height();

			if( winBot > objBot ){
				$(this).animate({
					marginRight: "40px",
					marginLeft: "-40px"
				}, 600, 'linear' );
			}
		});

	});

});