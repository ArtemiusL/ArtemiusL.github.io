var body = document.querySelector(".main-body");
var header = document.querySelector(".main-header");
var dropdown = document.querySelector(".dropdown-menu");
var linkPhone = document.getElementById('link-mobile-1');
var linkSubscribe = document.getElementById('link-mobile-2');
var linkBasket = document.getElementById('link-mobile-3');
var popupPhone = document.querySelector('.mobile-phone-popup');
var popupSubscribe = document.getElementById('mobile-popup-2');
var navMobile = document.querySelector(".mobile-main-nav");
var decorAnimationBlock = document.querySelector(".decor-animation");
var burgerBtn = document.querySelector(".mobile-nav-lable");
var mobileHeader = document.querySelector(".mobile-main-header-wrapper");
var linkDesktopSubscribe = document.querySelector("#desktop-subscribe-link");
var linkCallSubscribe = document.querySelector("#desktop-call-link"); 
var subscribeModal = document.querySelector('#desktop-modal-1-subscribe');
var callModal = document.querySelector('#desktop-modal-2-call');
var modalBtnClose = document.querySelector('#modal-close-1');
var modalBtnClose2 = document.querySelector('#modal-close-2');
var subscribeModalForm = document.querySelector('.subscribe-modal-form');
var subscribeModalFormChild = document.querySelectorAll('.subscribe-modal-form > *');
var heightPopupPhone = "60px"; // высота менюшки
var heightPopupSubscribe = "60px";// высота менюшки
var Overlay = document.querySelector(".main-overlay");
//отодгивает контент на размер headera	
body.style.paddingTop = (header.offsetHeight + "px");
//отодгивает контент на размер headera	





var flagClick = 0;
var flagClick2 = 0;

linkPhone.addEventListener("click", function(event) {
	event.preventDefault();
	flagClick2 = 0;
	flagClick += 1;
	if (flagClick % 2) {
	popupSubscribe.classList.remove('opened');
	linkSubscribe.classList.remove('opened');



	popupPhone.classList.add('opened');
	linkPhone.classList.add('opened');
	navMobile.style.transform = 'translateY(' + heightPopupPhone + ')';
	decorAnimationBlock.style.transform = 'translateY(' + heightPopupPhone + ')';

	dropdown.classList.remove("dropdown-menu-opened");
	popupPhone.classList.remove("mobile-close");
	decorAnimationBlock.classList.remove("add-index");
	// var bottomPopupPhone = popupPhone.getBoundingClientRect();
	var topOverlay = "215px"; 
	Overlay.style.top = topOverlay;
	Overlay.style.display = 'block';


	

	}
	else {
	navMobile.style.transform = 'translateY(0)';
	decorAnimationBlock.style.transform = 'translateY(0)';
	Overlay.style.display = 'none';
	linkPhone.classList.remove('opened');
	popupPhone.classList.remove('opened');
	}

	})

	

linkSubscribe.addEventListener("click", function(event) {
	event.preventDefault();
	flagClick = 0;
	flagClick2 += 1;
	if (flagClick2 % 2) {
linkPhone.classList.remove('opened');
	popupPhone.classList.remove('opened');


	popupSubscribe.classList.add('opened');
	linkSubscribe.classList.add('opened');
	navMobile.style.transform = 'translateY(' + heightPopupSubscribe + ')';
	decorAnimationBlock.style.transform = 'translateY(' + heightPopupSubscribe + ')';

	dropdown.classList.remove("dropdown-menu-opened");
	popupSubscribe.classList.remove("mobile-close");
	decorAnimationBlock.classList.remove("add-index");
	// var bottomPopupSubscribe = popupSubscribe.getBoundingClientRect();
	var topOverlay = "215px"; 
	Overlay.style.top = topOverlay;
	Overlay.style.display = 'block';


	
	}
	else {
	popupSubscribe.classList.remove('opened');
	navMobile.style.transform = 'translateY(0)';
	decorAnimationBlock.style.transform = 'translateY(0)';
	Overlay.style.display = 'none';
	linkSubscribe.classList.remove('opened');
	}
	})


Overlay.addEventListener("click", function(event) {
	navMobile.style.transform = 'translateY(0)';
	decorAnimationBlock.style.transform = 'translateY(0)';
	Overlay.style.display = 'none';
	linkPhone.classList.remove('opened');
	popupPhone.classList.remove('opened');
	popupSubscribe.classList.remove('opened');
	linkSubscribe.classList.remove('opened');
	})



burgerBtn.addEventListener("click", function(event) {
	event.preventDefault();
	dropdown.classList.toggle("dropdown-menu-opened");
	popupPhone.classList.toggle("mobile-close");
	popupSubscribe.classList.toggle("mobile-close");
	decorAnimationBlock.classList.toggle("add-index");
	dropdown.style.bottom = ("-" + dropdown.offsetHeight + "px");

		popupPhone.classList.remove("opened");
	navMobile.classList.remove("margin-top");
	decorAnimationBlock.classList.remove("margin-top");
	})


//МОДАЛЬНЫЕ ОКНА
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



