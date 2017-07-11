var headerSearchToggle = document.querySelector("#header-search-bth-toogle");
var headerSearchForm = document.querySelector("#header-search-form");
var headeNavSearch = document.querySelector("#header-nav-search");
var headerSearchClose = document.querySelector("#main-nav-search-close");
var inputHeaderFocus = headerSearchForm.querySelector("input");
var footerSubscribeBtn = document.querySelector("#footer-subscribe-btn");
var mainFooterInput = document.querySelector("#main-footer-input");
var mainFooterTimer;

mainFooterInput.addEventListener("focus",function(event){
	 mainFooterTimer = setInterval(validateFooterForm, 100);
});

mainFooterInput.addEventListener("blur",function(event){
	clearInterval(mainFooterTimer);
});

headerSearchToggle.addEventListener("click", function(event) {
	event.preventDefault();
	headerSearchForm.classList.toggle("main-nav-form-view");
	headeNavSearch.classList.toggle('header-serch-toggle--none');
	if(document.documentElement.clientWidth < 991) {
		document.querySelector(".header-tablet-transfer").style.display = 'block';
	}
})

headerSearchClose.addEventListener("click", function (event) {
	headerSearchForm.classList.toggle("main-nav-form-view");
	headeNavSearch.classList.toggle('header-serch-toggle--none');
	event.preventDefault();
	document.querySelector(".header-tablet-transfer").style.display = '';
})

function validateFooterForm() {
	x = mainFooterInput.value;
	indexA = x.indexOf("@");
	if (indexA > 0 && indexA != (x.length - 1) ) {
		footerSubscribeBtn.style.display = "inline-block";
	}
	else {
		footerSubscribeBtn.style.display = "none";
	}
}





var mobileLinkCall = document.querySelector("#mobile-link-call");
var mobileLinkSubscribe = document.querySelector("#mobile-link-subscribe");
var mobileLinkSearch = document.querySelector("#mobile-link-search");
var popupCall = document.querySelector("#popup-call");
var popupSubscribe = document.querySelector("#popup-subscribe");
var popupSearch = document.querySelector("#popup-search");
var body = document.querySelector(".main-body");



var menuMobileItems = document.querySelector("#menu-mobile-items");
var mainContent = document.querySelector(".helper-nav-class");
var Overlay = document.querySelector(".main-overlay");
// var topOverlay = menuMobileItems.getBoundingClientRect().top;
var topOverlay = (143 + 48) + "px";
Overlay.style.top = topOverlay;

flagClick = 0;
flagClick1 = 0;
flagClick2 = 0;

// ССЫЛКА ТЕЛЕФОНА 1

mobileLinkCall.addEventListener("click", callFunction);
mobileLinkCall.addEventListener("touchstart", callFunction);

function callFunction(event){
	if(event.touches){
		mobileLinkCall.removeEventListener("click",callFunction);
	}

	event.preventDefault();
	flagClick1 = 0;
	flagClick2 = 0;
	flagClick += 1;
	if (flagClick % 2) {
		popupSubscribe.classList.remove("mobile-opened");
		mobileLinkSubscribe.classList.remove("mobile-link-opened");
		mobileLinkSearch.classList.remove("mobile-link-opened");
		popupSearch.classList.remove("mobile-opened");


		mobileLinkCall.classList.add("mobile-link-opened");
		popupCall.classList.add("mobile-opened");
		menuMobileItems.style.transform = 'translateY(48px)';
		mainContent.style.transform = 'translateY(48px)';
		Overlay.style.display = 'block';
		body.style.height = '100vh';
		body.style.overflowY = 'hidden';
		OffScroll();
		dropdown.classList.remove('mobile-dropdown-open');
	}
	else {
		menuMobileItems.style.transform = 'translateY(0)';
		mainContent.style.transform = 'translateY(0)';
		mobileLinkCall.classList.remove("mobile-link-opened");
		Overlay.style.display = '';
		body.style.height = '';
		body.style.overflowY = '';
		 $(window).unbind('scroll');
	}
} 

// ССЫЛКА ТЕЛЕФОНА 1


// ССЫЛКА ПОДПИСКИ 2

mobileLinkSubscribe.addEventListener("click", subscribeFunction);
mobileLinkSubscribe.addEventListener("touchstart", subscribeFunction);

function subscribeFunction(event){
	if(event.touches){
		mobileLinkSubscribe.removeEventListener("click",subscribeFunction);
	}
	event.preventDefault();
	flagClick = 0;
	flagClick2 = 0;
	flagClick1 += 1;
	if (flagClick1 % 2) {
		popupCall.classList.remove("mobile-opened");
		mobileLinkCall.classList.remove("mobile-link-opened");
		mobileLinkSearch.classList.remove("mobile-link-opened");
		popupSearch.classList.remove("mobile-opened");

		mobileLinkSubscribe.classList.add("mobile-link-opened");
		popupSubscribe.classList.add("mobile-opened");
		menuMobileItems.style.transform = 'translateY(48px)';
		mainContent.style.transform = 'translateY(48px)';
		Overlay.style.display = 'block';
		body.style.height = '100vh';
		body.style.overflowY = 'hidden';
		OffScroll();
		dropdown.classList.remove('mobile-dropdown-open');
	}
	else {
		mobileLinkSubscribe.classList.remove("mobile-link-opened");
		menuMobileItems.style.transform = 'translateY(0)';
		mainContent.style.transform = 'translateY(0)';
		Overlay.style.display = '';
		body.style.height = '';
		body.style.overflowY = '';
		 $(window).unbind('scroll');
	}
}

// ССЫЛКА ПОДПИСКИ 2



// ССЫЛКА ПОИСКА 3

mobileLinkSearch.addEventListener("click", searchFunction );
mobileLinkSearch.addEventListener("touchstart", searchFunction );

function searchFunction(event){
if(event.touches){
		mobileLinkSearch.removeEventListener("click",searchFunction);
	}
	
	event.preventDefault();
	flagClick = 0;
	flagClick1 = 0;
	flagClick2 += 1;
	if (flagClick2 % 2) {
		popupSubscribe.classList.remove("mobile-opened");
		mobileLinkSubscribe.classList.remove("mobile-link-opened");
		popupCall.classList.remove("mobile-opened");
		mobileLinkCall.classList.remove("mobile-link-opened");

		mobileLinkSearch.classList.add("mobile-link-opened");
		popupSearch.classList.add("mobile-opened");
		menuMobileItems.style.transform = 'translateY(48px)';
		mainContent.style.transform = 'translateY(48px)';
		Overlay.style.display = 'block';
		body.style.height = '100vh';
		body.style.overflowY = 'hidden';
		OffScroll();
		dropdown.classList.remove('mobile-dropdown-open');
	}
	else {
		mobileLinkSearch.classList.remove("mobile-link-opened");
		menuMobileItems.style.transform = 'translateY(0)';
		mainContent.style.transform = 'translateY(0)';
		Overlay.style.display = '';
		body.style.height = '';
		body.style.overflowY = '';
		 $(window).unbind('scroll');
	}
}



// ССЫЛКА ПОИСКА 3


// для того чтобы не было скролла, при появлении меню например
function OffScroll() {
  var winScrollTop = $(window).scrollTop();
  $(window).bind('scroll', function() {
    $(window).scrollTop(winScrollTop);
  });
}
// для того чтобы не было скролла, при появлении меню например

// менюшка
var menuToggle = document.querySelector('#menu-toggle');
var dropdown = document.querySelector('#mob-dropdown');

menuToggle.addEventListener("click", toggleFunction);
menuToggle.addEventListener("touchend", toggleFunction);

function toggleFunction(event){
	if(event.touches){
		menuToggle.removeEventListener("click",toggleFunction);
	}
	event.preventDefault();
	dropdown.classList.toggle('mobile-dropdown-open');
}

//при клике на оверлей убирать все попапы 

Overlay.addEventListener('click', overlayFunction);
Overlay.addEventListener('touchend', overlayFunction);

function overlayFunction(event){
	if(event.touches){
		Overlay.removeEventListener("click",overlayFunction);
	}

	event.preventDefault();
	mobileLinkCall.classList.remove('mobile-link-opened');
	mobileLinkSubscribe.classList.remove('mobile-link-opened');
	mobileLinkSearch.classList.remove('mobile-link-opened');
	popupCall.classList.remove('mobile-opened');
	popupSubscribe.classList.remove('mobile-opened');
	popupSearch.classList.remove('mobile-opened');

	menuMobileItems.style.transform = 'translateY(0)';
		mainContent.style.transform = 'translateY(0)';
		Overlay.style.display = '';
		body.style.height = '';
		body.style.overflowY = '';
		 $(window).unbind('scroll');

}



//МОДАЛЬНЫЕ ОКНА
var linkDesktopSubscribe = document.querySelector("#desktop-subscribe-link");
var linkCallSubscribe = document.querySelector("#desktop-call-link"); 
var subscribeModal = document.querySelector('#desktop-modal-1-subscribe');
var callModal = document.querySelector('#desktop-modal-2-call');
var modalBtnClose = document.querySelector('#modal-close-1');
var modalBtnClose2 = document.querySelector('#modal-close-2');
var subscribeModalForm = document.querySelector('.subscribe-modal-form');
var subscribeModalFormChild = document.querySelectorAll('.subscribe-modal-form > *');




linkDesktopSubscribe.addEventListener("click", function(event) {
	event.preventDefault();
	subscribeModal.style.display = 'block' ;
  var offsetThis = (window.pageYOffset + "px");
	subscribeModal.style.top = offsetThis;
	body.style.overflowY = 'hidden';
})

modalBtnClose.addEventListener("click", function(event){
	subscribeModal.style.display = 'none' ;
	body.style.overflowY = 'visible';
	
})

$(subscribeModal).mouseup(function (e){ // событие клика по веб-документу
		var div = $(".subscribe-modal-form"); // тут указываем ID элемента
		if (!div.is(e.target) // если клик был не по нашему блоку
		    && div.has(e.target).length === 0) { // и не по его дочерним элементам
			subscribeModal.style.display = 'none' ;
			body.style.overflowY = 'visible'; // скрываем его
		}
	});


linkCallSubscribe.addEventListener("click", function(event) {
	event.preventDefault();
	callModal.style.display = 'block' ;
	var offsetThis = (window.pageYOffset + "px");
	callModal.style.top = offsetThis;
	body.style.overflowY = 'hidden';
})

modalBtnClose2.addEventListener("click", function(event){
	callModal.style.display = 'none' ;
	body.style.overflowY = 'visible';
})

$(callModal).mouseup(function (e){ // событие клика по веб-документу
		var div = $(".subscribe-modal-form"); // тут указываем ID элемента
		if (!div.is(e.target) // если клик был не по нашему блоку
		    && div.has(e.target).length === 0) { // и не по его дочерним элементам
			callModal.style.display = 'none' ; // скрываем его
			body.style.overflowY = 'visible';
		}
	});



