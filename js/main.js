var link = document.querySelector(".search-form-button");
var hotelSearch = document.querySelector(".hotels-search");
var hotelsSearchToggle = document.querySelector("hotels-search-toggle");
var adult = document.querySelector("[name=adult]");
var adultValue = +adult.value;
var adultPlus = document.querySelector(".button-adult-plus");
var adultMinus = document.querySelector(".button-adult-minus");
var adultChange = +adult.value;

var child = document.querySelector("[name=child]");
var childValue = +child.value;
var childPlus = document.querySelector(".button-child-plus");
var childMinus = document.querySelector(".button-child-minus");
var childChange = +child.value;

if ("hotelsSearchToggle") {
	hotelSearch.classList.add("hotels-search-toggle");
};

link.addEventListener("click", function (evt) {
	evt.preventDefault();
	hotelSearch.classList.toggle("hotels-search-toggle");
});

adultPlus.addEventListener("click", function (evt) {
	evt.preventDefault();
	adultChange += 1;
	adult.value = adultChange;
});

adultMinus.addEventListener("click", function (evt) {
	evt.preventDefault();
	adultChange -= 1;
	if (adultChange <= 1) {
	adultChange = 0;
	};
	adult.value = adultChange;
});

childPlus.addEventListener("click", function (evt) {
	evt.preventDefault();
	childChange += 1;
	child.value = childChange;
});

childMinus.addEventListener("click", function (evt) {
	evt.preventDefault();
	childChange -= 1;
	if (childChange <= 1) {
	childChange = 0;
    }
	child.value = childChange;
});