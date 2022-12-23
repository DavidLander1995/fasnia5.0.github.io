// Navbar Change Color 
$(window).scroll(function(){
	$('nav').toggleClass('scrolled', $(this).scrollTop() > 80);
});