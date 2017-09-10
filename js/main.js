// Появление и скрытие формы - начало.
var link = document.querySelector(".search-form-button");
var hotelSearch = document.querySelector(".hotels-search");

hotelSearch.classList.add("hotels-search-toggle");

link.addEventListener("click", function (evt) {
	evt.preventDefault();
	hotelSearch.classList.toggle("hotels-search-toggle");
	hotelSearch.classList.remove("form-error");
});
// Появление и скрытие формы - конец.

//Валидация формы - начало.

var searchForm = document.querySelector("form");
var dateIn = document.querySelector("[name=date-in]");
var dateOut = document.querySelector("[name=date-out]");


searchForm.addEventListener("submit", function (evt) {
	if (!dateIn.value || !dateOut.value) {
		evt.preventDefault();
		hotelSearch.classList.remove("form-error");
		hotelSearch.offsetWidth =hotelSearch.offsetWidth;
		hotelSearch.classList.add("form-error");
		dateIn.focus();
			if (dateIn.value) {
				dateOut.focus();
			}
	}
});
//Валидация формы - конец.

// Плюс и минус взрослые - начало.
var adult = document.querySelector("[name=adult]");
var adultValue;
var adultPlus = document.querySelector(".button-adult-plus");
var adultMinus = document.querySelector(".button-adult-minus");

if (hotelSearch) {
	adultValue = +adult.value;
}

if (adultPlus) {
	adultPlus.addEventListener("click", function (evt) {
		evt.preventDefault();
		adultValue += 1;
		adult.value = adultValue;
	});
}

if (adultMinus) {
	adultMinus.addEventListener("click", function (evt) {
		evt.preventDefault();
		adultValue -= 1;
		if (adultValue <= 0) {
		adultValue = 0;
		};
		adult.value = adultValue;
	});
}
// Плюс и минус взрослые - конец.

// Плюс и минус дети - начало.
var child = document.querySelector("[name=child]");
var childValue;
var childPlus = document.querySelector(".button-child-plus");
var childMinus = document.querySelector(".button-child-minus");

if (hotelSearch) {
	childValue = +child.value;
}

if (childPlus) {
	childPlus.addEventListener("click", function (evt) {
		evt.preventDefault();
		childValue += 1;
		child.value = childValue;
	});
}

if (childMinus) {
	childMinus.addEventListener("click", function (evt) {
		evt.preventDefault();
		childValue -= 1;
		if (childValue <= 0) {
			childValue = 0;
		}
		child.value = childValue;
	});
}
// Плюс и минус дети - конец.