//WayPoints jQuery

var $wpNav = $('.wp-nav');

$wpNav.waypoint(function () {
	$('.stickyNav').toggleClass('fixed-nav');
});