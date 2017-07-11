//счетчики товара

var priceInput = document.querySelector('#price-inpu-number');
var stepDown = document.querySelector('#step-down');
var stepUp = document.querySelector('#step-up');
var reviewsPriceNumber = document.querySelector('#reviews-price-number');



stepDown.onclick = conterForm;
stepUp.onclick = conterForm;

 function conterForm(event){
 	if(this == stepDown) {
 		priceInput.stepDown();
 	}
 	else{
 		priceInput.stepUp();
 	}
 	writePrice();
 }


function writePrice() {
	var price = (priceInput.value * 990);
	reviewsPriceNumber.innerText = price;
}

