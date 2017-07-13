const inputFormList = document.querySelectorAll('.main-form-input');

//алерт для формы
const alertForm = document.createElement(`div`);
const decorAlertForm = document.createElement(`span`);
alertForm.setAttribute('class', 'main-form-alert');
decorAlertForm.setAttribute('class', 'main-form-alert-decor');
//алерт для формы

//проверка инпутов
inputFormList.forEach( function(input){
	input.addEventListener('blur', function(event){
	const currentInput = event.target;
	const parentInput = currentInput.parentElement;
		if(!currentInput.value) {
			alertForm.innerHTML = "Поле обязательно для заполнения";
			parentInput.appendChild(alertForm);
			alertForm.appendChild(decorAlertForm);
			currentInput.classList.add('fail');	
		}
		else if(parentInput.lastChild === alertForm) {
			parentInput.removeChild(alertForm);
			currentInput.classList.remove('fail');	
		}
		
		validateForm();
	});
});
inputFormList.forEach( function(input){
	input.addEventListener('focus', function(event){
		inputFormList.forEach((input) => {
			input.classList.remove('fail');
			const parentInput = input.parentElement;
			if(parentInput.lastChild === alertForm) {
			parentInput.removeChild(alertForm);	
		}
		})
});
});
//проверка инпутов

//проверка радиобатона
let radioChecked = true;
const radioBtnFale = document.querySelector('#nation-no');
const radioBtnSuccess = document.querySelector('#nation-yes');
const radioValidate = () => {
	if(radioBtnFale.checked) {
			alertForm.innerHTML = "Кредит может быть выдан только гражданам РФ";
			radioBtnFale.parentElement.appendChild(alertForm);
			alertForm.appendChild(decorAlertForm);
			radioChecked = false;
	}
	else if(radioBtnFale.parentElement.lastChild === alertForm) {
		radioBtnFale.parentElement.removeChild(alertForm);
		radioChecked = true;
	}
	validateForm();
}
radioBtnFale.addEventListener('change', radioValidate);
radioBtnSuccess.addEventListener('change', radioValidate);

//проверка радиобатона

//Кнопка отправки
const formBtn = document.querySelector('.main-form-btn');
const inputFor = () => {
	for(let i = 0; i<inputFormList.length; i++){
		if(!inputFormList[i].value) {
			return false 
		}
	}
	return true;
}
const validateForm = () => {
	if(radioChecked && inputFor()){
		formBtn.removeAttribute('disabled');
		formBtn.classList.remove('disabled');
	}
	else {
		formBtn.setAttribute('disabled', '');
		formBtn.classList.add('disabled');
	}
}

