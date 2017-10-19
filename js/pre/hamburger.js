// HAMBURGER CLICK

$(document).ready(function() {
	$('.hamburger-box').click(function() {
		console.log('click');
    	$('.hamburger-box').toggleClass('activeHamb');
		$('.hamburger-box').toggleClass('ham-rotate');
    	$('.stickyNav').toggleClass('nav-active');
	})
});

// MENU CLICK

$(document).ready(function() {
  $('a[href*=#]:not([class="menuExclude"])').click(function() {
		$('.stickyNav').toggleClass('nav-active');
    	$('.hamburger-box').toggleClass('activeHamb');
	})
});

// // NAV CLICK --> HIDE SOCIAL

// $(document).ready(function() {
// 	$('.hide-social').click(function() {
//     	$('.social-fixed').toggleClass('social-active');
// 	})
// });