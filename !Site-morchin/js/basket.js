//BASKET-SCRIPT

var basketBtnOrder = document.querySelector('.basket-btn-order');
var basketModal = document.querySelector('#desktop-modal-3-basket');
var modalBtnClose3 = document.querySelector('#modal-close-2');
var html = document.getElementsByTagName('html');






basketBtnOrder.addEventListener("click", function(event){
	event.preventDefault();
	var offsetThis = (window.pageYOffset + "px");
	basketModal.style.display = 'block';
	basketModal.style.top = offsetThis;
	body.classList.add("hidden-height");
})

modalBtnClose3.addEventListener("click", function(event){
	basketModal.style.display = 'none' ;
	body.style.overflowY = 'visible';
	
})

$(basketModal).mouseup(function (e){ // событие клика по веб-документу
		var div = $(".subscribe-modal-form"); // тут указываем ID элемента
		if (!div.is(e.target) // если клик был не по нашему блоку
		    && div.has(e.target).length === 0) { // и не по его дочерним элементам
			basketModal.style.display = 'none' ; // скрываем его
			body.style.overflowY = 'visible';
		}
	});



//BASKET-SCRIPT