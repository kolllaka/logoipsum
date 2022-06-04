// Custom Scripts
// Burger menu
const burger = document.querySelector('.burger'),
	body = document.querySelector('body');

function burgerMenuFunc() {
	const burgerMenu = burger.querySelector('.burger__menu'),
		burgerBtn = burger.querySelector('.burger__btn');

	burgerBtn.addEventListener('click', () => {
		if (!burgerMenu.classList.contains('active')) {
			burgerMenu.classList.add('active')
			burgerBtn.classList.add('active-burger')
			body.classList.add('locked')
		} else {
			burgerMenu.classList.remove('active')
			burgerBtn.classList.remove('active-burger')
			body.classList.remove('locked')
		}
	})

	// navbar breakpoints
	window.addEventListener('resize', () => {
		if (window.innerWidth > 1299.98) {
			burgerMenu.classList.remove('active')
			burgerBtn.classList.remove('active-burger')
			body.classList.remove('locked')
		}
	})
}
if (burger) {
	burgerMenuFunc()
}

// Fixed menu when scroll
function fixedNav() {
	const nav = document.querySelector('nav')

	// 
	const breakpoints = 1
	if (window.scrollY >= breakpoints) {
		nav.classList.add('fixed__nav')
	} else {
		nav.classList.remove('fixed__nav')
	}
}
window.addEventListener('scroll', fixedNav)


// Select
const selectes = document.querySelectorAll('select');
function create(select) {
	var options = select.querySelectorAll('option');

	mySelect = document.createElement("div");
	mySelect.setAttribute("class", "select__choose");
	select.parentElement.appendChild(mySelect);

	mySelect.insertAdjacentHTML('beforeEnd',
		'<div class="select__selected"></div>' +
		'<div class="select__icon"><span></span></div>');

	myUl = document.createElement("ul");
	myUl.setAttribute("class", "select__options");
	select.parentElement.appendChild(myUl);

	options.forEach((option, index) => {
		myLi = document.createElement('li');
		myLi.setAttribute('class', 'select__option');
		myLi.innerHTML = option.innerHTML;
		if (option.selected) {
			console.log(option.selected);
			myLi.classList.toggle('selected');
		}
		myUl.appendChild(myLi);

	});
};

selectes.forEach(select => {
	create(select);
});

const customSelectes = document.querySelectorAll('.select');
customSelectes.forEach(select => {
	let selectBtn = select.querySelector('.select__choose');
	let selectOpts = select.querySelector('.select__options');
	const selectOptions = select.querySelectorAll('.select__option');

	var value = select.querySelector('select').value;
	update(select, value);

	selectBtn.addEventListener('click', e => {

		selectBtn.classList.toggle('active');
		selectOpts.classList.toggle('active');
	});

	selectOptions.forEach((selectOption, index) => {

		selectOption.addEventListener('click', e => {
			selectOptions.forEach(selectOption => {

				selectOption.classList.remove('selected')
			});

			e.target.classList.toggle('selected')
			update(select, index);
		});
	});
});

function update(select, index) {
	let selectTitle = select.querySelector('.select__selected');
	let selectSelected = select.querySelector('.selected');

	select.querySelectorAll('option').forEach((option, i) => {
		option.selected = false;
		if (i == index) {
			option.selected = true;
		};
	});

	selectTitle.innerHTML = selectSelected.innerHTML;
};


// Swiper
// BildSlider
let sliders = document.querySelectorAll('._swiper');
if (sliders) {
	for (let index = 0; index < sliders.length; index++) {
		let slider = sliders[index];
		if (!slider.classList.contains('swiper-bild')) {
			let slider_items = slider.children;
			if (slider_items) {
				for (let index = 0; index < slider_items.length; index++) {
					let el = slider_items[index];
					el.classList.add('swiper-slide');
				}
			}
			let slider_content = slider.innerHTML;
			let slider_wrapper = document.createElement('div');
			slider_wrapper.classList.add('swiper-wrapper');
			slider_wrapper.innerHTML = slider_content;
			slider.innerHTML = '';
			slider.appendChild(slider_wrapper);
			slider.classList.add('swiper-bild');
		}
	}
}



let sliderBody = document.querySelector('.slider__body');
let itemSlider = new Swiper(sliderBody, {
	observer: true,
	observeParents: true,
	slidesPerView: 3,
	spaceBetween: 30,
	autoHeight: true,
	speed: 800,
	loop: true,
	// Dotts
	pagination: {
	},
	// Arrows
	navigation: {
		nextEl: '.ourteam__navigation-next',
		prevEl: '.ourteam__navigation-prev',
	},
	breakpoints: {
		300: {
			slidesPerView: 1,
			spaceBetween: 0
		},
		700: {
			slidesPerView: 1,
			spaceBetween: 0
		},
		1000: {
			slidesPerView: 2,
			spaceBetween: 30
		},
		1600: {
			slidesPerView: 3,
			spaceBetween: 30
		}
		
	}
});
