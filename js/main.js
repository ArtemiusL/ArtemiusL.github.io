var mainHeader = document.querySelector(".header-cover");
var headerBgFixed = document.querySelector(".header-cover-bg");
var portfolio = document.querySelector(".portfolio");
var logoBox = document.querySelector(".logo-box");
var footerBgFixed = document.querySelector(".footer-cover-bg");

headerBgFixed.style.height = mainHeader.offsetHeight + "px";


var body = $('body,html') ;
 function scrollPort () {
 	if(window.pageYOffset  < portfolio.offsetTop ) {
	 body.animate({scrollTop: portfolio.offsetTop}, 1500);
 	}
}
window.onload = function() {
	if(window.innerWidth > 630 ) {
		setTimeout(scrollPort, 15000);
	}
	else {
		setTimeout(scrollPort, 1000);
	}
}
var audio = document.querySelector('.top-header-audio');
var butonStop = document.querySelector('.audio-stop');
var butonSuper = document.querySelector('.header-contact');
var contacFooter = document.querySelector('#footer-contacts');

butonStop.addEventListener("click", function(event){
	event.preventDefault();
	audio.pause();
})

butonSuper.addEventListener("click", function(event){
	event.preventDefault();
	if (audio.paused) {
		audio.play();
	}
	var id = $(this).attr('href'),
			top = $(id).offset().top;
			$('body,html').animate({scrollTop: top}, 1000);
});