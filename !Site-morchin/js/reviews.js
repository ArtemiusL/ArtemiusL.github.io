var openLink = document.querySelector(".seo-psevdo-link-open");
var closeLink = document.querySelector(".seo-psevdo-link-close");
var seoBlock = document.querySelector(".seo-text-block");
// на блок с отзывами

openLink.addEventListener("click", function(event) {
	event.preventDefault();
	seoBlock.classList.remove("wrapped");
	})

closeLink.addEventListener("click", function(event) {
	event.preventDefault();
	seoBlock.classList.add("wrapped");
	})
