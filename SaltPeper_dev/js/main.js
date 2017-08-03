/*инициализируем плагин Wow.js*/
(function(){
	'use strict';
	new WOW().init();
}());

//мобильное меню
const mobMenuBtn = document.querySelector('.mobile-menu-btn');
const menuItem = document.querySelectorAll('#mobMenuItem');
const mobCloseBtn = document.querySelector('.main-nav__close');

const mobMenuToggle = (evt) => {
	mobMenuBtn.classList.toggle('opened');
	menuItem.forEach( function(element, index) {
		if(element.style.display == '') {
		element.style.display = 'flex';
		setTimeout( () => {
			element.classList.toggle('opened');
		}, 1);
	}
		else {
			element.classList.toggle('opened');
			setTimeout( () => {
				element.style.display = '';
			}, 600);
	}
	});
}

mobMenuBtn.addEventListener('click', mobMenuToggle);
mobCloseBtn.addEventListener('click', mobMenuToggle);
