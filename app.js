// Back to top button display control

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("top-btn").style.display = "block";
	document.getElementById("btn-home").style.display = "block";
	document.getElementById("btn-about").style.display = "block";
	document.getElementById("btn-contact").style.display = "block";
  } else {
    document.getElementById("top-btn").style.display = "none";
	document.getElementById("btn-home").style.display = "none";
	document.getElementById("btn-about").style.display = "none";
	document.getElementById("btn-contact").style.display = "none";
  }
}

// Smooth scrolling

const arrSmooth = ['.nav-elements a[href*="#"]', '#btn-wrap a[href*="#"]'];
const scroll = [];
for (let i = 0; i<arrSmooth.length; i++) {
	scroll[i] = new SmoothScroll(arrSmooth[i], {
		speed: 500
	});
}

// Touch screen menu

const el = document.getElementsByClassName('btn-group');

const section_home = document.getElementById('home');
const section_about = document.getElementById('about');
const section_contact = document.getElementById('footer');

const sections = [section_home, section_about, section_contact];

for (let j = 0; j < sections.length; j++) {
	sections[j].addEventListener('touchend', () => {
	
		if (el[0].classList.contains('btn-touch') && !el[0].classList.contains('btn-touch-rem')) {
			for (let i = 0; i < el.length ; i++) {
				el[i].classList.remove('btn-touch');
				el[i].classList.add('btn-touch-rem');
			}	
		}
		else {
			for (let i = 0; i < el.length ; i++) {
				el[i].classList.add('btn-touch');
				el[i].classList.remove('btn-touch-rem');
			}	
		}
	});
}

document.getElementById('about-link').addEventListener('click', () => {
	document.getElementById('step-1').setAttribute('style', 'opacity: 1;transition: all 0.7s ease-in-out 1.0s;');
	document.getElementById('step-2').setAttribute('style', 'opacity: 1;transition: all 0.7s ease-in-out 2.0s;');
	document.getElementById('step-3').setAttribute('style', 'opacity: 1;transition: all 0.7s ease-in-out 3.0s;');
	document.getElementById('step-4').setAttribute('style', 'opacity: 1;transition: all 0.7s ease-in-out 4.0s;');
});

document.getElementById('bot-menu-about').addEventListener('click', () => {
	document.getElementById('step-1').setAttribute('style', 'opacity: 1;transition: all 0.7s ease-in-out 1.0s;');
	document.getElementById('step-2').setAttribute('style', 'opacity: 1;transition: all 0.7s ease-in-out 2.0s;');
	document.getElementById('step-3').setAttribute('style', 'opacity: 1;transition: all 0.7s ease-in-out 3.0s;');
	document.getElementById('step-4').setAttribute('style', 'opacity: 1;transition: all 0.7s ease-in-out 4.0s;');
});

// Slider

const slides = document.querySelectorAll('.slide');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');
const auto = true;
const intervalTime = 10000;
let slideInterval;

const nextSlide = () => {
	const current = document.querySelector('.current');

	current.classList.remove('.current');

	if(current.nextElementSibling) {
		current.nextElementSibling.classList.add('current');
	}
	else {
		slides[0].classList.add('current');
	}
	setTimeout(() => current.classList.remove('current'));
};


const prevSlide = () => {
	const current = document.querySelector('.current');

	current.classList.remove('current');

	if(current.previousElementSibling) {
		current.previousElementSibling.classList.add('current');
	}
	else {
		slides[slides.length - 1].classList.add('current');
	}
	setTimeout(() => current.classList.remove('current'));
};

next.addEventListener('click', e => {
	nextSlide();

	if (auto) {
		clearInterval(slideInterval);
		slideInterval = setInterval(nextSlide, intervalTime);
	}
});

prev.addEventListener('click', e => {
	prevSlide();

	if (auto) {
		clearInterval(slideInterval);
		slideInterval = setInterval(nextSlide, intervalTime);
	}
});

if (auto) {
	slideInterval = setInterval(nextSlide, intervalTime);
}