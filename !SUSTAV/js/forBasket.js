var basketProductContainer = document.querySelector('#basket-product-container'); 

basketProductContainer.addEventListener("click", function(event){
	event.preventDefault()
	if(event.target.getAttribute("class") == "step-up") {
		var artemValue = event.target.previousElementSibling;
		artemValue.stepUp();
		parentNode();
		Array.prototype.forEach.call(target.getElementsByTagName('*'), function(child) {
    if(child.getAttribute("class") == "reviews-price-number") {
    	child.innerText = artemValue.value*990;
    }
});
	}
		if(event.target.getAttribute("class") == "step-down") {
		var artemValue = event.target.nextElementSibling;
		artemValue.stepDown();
		parentNode();
		Array.prototype.forEach.call(target.getElementsByTagName('*'), function(child) {
    if(child.getAttribute("class") == "reviews-price-number") {
    	child.innerText = artemValue.value*990;
    }
});
}
});
function parentNode() {
	 target = event.target;
	while (target.getAttribute("class") != "basket-item-content") {
		target = target.parentNode;
	}
}