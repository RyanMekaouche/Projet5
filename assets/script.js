const slides = [
	{
		"image": "slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image": "slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image": "slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image": "slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

// Variables
const dots = document.querySelector(".dots");
const rightArrow = document.querySelector("#banner .arrow_right");
const leftArrow = document.querySelector("#banner .arrow_left");
const picture = document.querySelector(".banner-img");
const p = document.querySelector("#banner p");

let currentBannerIndex = 0;

// Functions
function displayDots() {
	for (let i = 0; i < slides.length; i++) {
		const dot = document.createElement("div")
		dot.classList.add("dot");
		dots.appendChild(dot)

		if (i == currentBannerIndex) {
			dot.classList.add("dot_selected");
		}
	}
}

function updateBanner(direction) {
	const switchDot = document.querySelectorAll(".dots .dot");
	switchDot[currentBannerIndex].classList.remove("dot_selected");

	if (direction === 'next') {
		currentBannerIndex++;
		if (currentBannerIndex > slides.length - 1) {
			currentBannerIndex = 0;
		}
	} else if (direction === 'prev') {
		currentBannerIndex--;
		if (currentBannerIndex < 0) {
			currentBannerIndex = slides.length - 1;
		}
	}

	switchDot[currentBannerIndex].classList.add("dot_selected");
	picture.src = `./assets/images/slideshow/${slides[currentBannerIndex].image}`;
	p.textContent = slides[currentBannerIndex].tagLine;
}

function addEventListeners() {
	rightArrow.addEventListener("click", () => {
		updateBanner('next')
	})
	leftArrow.addEventListener("click", () => {
		updateBanner('prev')
	})
}

displayDots()
addEventListeners()