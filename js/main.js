var link = document.querySelector(".search-form-button");
var hotelSearch = document.querySelector(".hotels-search");
var hotelsSearchToggle = document.querySelector("hotels-search-toggle");
var adult = document.querySelector("[name=adult]");
var adultValue = +adult.value;
var adultPlus = document.querySelector(".button-adult-plus");
var adultMinus = document.querySelector(".button-adult-minus");
var child = document.querySelector("[name=child]");
var childValue = +child.value;
var childPlus = document.querySelector(".button-child-plus");
var childMinus = document.querySelector(".button-child-minus");

if ("hotelsSearchToggle") {
	hotelSearch.classList.add("hotels-search-toggle");
};

link.addEventListener("click", function (evt) {
	evt.preventDefault();
	hotelSearch.classList.toggle("hotels-search-toggle");
});

adultPlus.addEventListener("click", function (evt) {
	evt.preventDefault();
	adultValue += 1;
	adult.value = adultValue;
});

adultMinus.addEventListener("click", function (evt) {
	evt.preventDefault();
	adultValue -= 1;
	if (adultValue <= 0) {
	adultValue = 0;
	};
	adult.value = adultValue;
});

childPlus.addEventListener("click", function (evt) {
	evt.preventDefault();
	childValue += 1;
	child.value = childValue;
});

childMinus.addEventListener("click", function (evt) {
	evt.preventDefault();
	childValue -= 1;
	if (childValue <= 0) {
	childValue = 0;
    }
	child.value = childValue;
});