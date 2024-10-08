// Splash de carga

const animation = lottie.loadAnimation({
	container: document.getElementById('splash-animation'),
	renderer: 'svg',
	loop: false,
	autoplay: true,
	path: 'splash.json'
});

animation.addEventListener('complete', function () {
	document.getElementById('splash-animation').classList.add('hidden');
	setTimeout(function () {
		document.getElementById('splash-animation').style.display = 'none';
		document.getElementById('splash-background').style.display = 'none';
	}, 500);
});

// Menú hamburguesa

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
	hamburger.classList.toggle("active");
	navMenu.classList.toggle("active");
})

// Función para que el menú se cierre al clickear links

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
	hamburger.classList.remove("active");
	navMenu.classList.remove("active");
}))

// Selector secciones

// Tomo links con "#" en ".nav-menu" (^= -> "que comience con...")

const menuLinks = document.querySelectorAll('.nav-menu a[href^="#"]');

// Selector

const observer = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		const id = entry.target.getAttribute("id");
		const menuLink = document.querySelector(`.nav-menu a[href="#${id}"]`);

		if (entry.isIntersecting) {
			document.querySelector(".nav-menu a.selected").classList.remove("selected");
			menuLink.classList.add("selected");
		}
	});
},

	// Para que no se choquen elementos que estén muy juntos

	{
		rootMargin: "-30% 0px -70% 0px"
	}
);

menuLinks.forEach((menuLink) => {
	const hash = menuLink.getAttribute("href");
	const target = document.querySelector(hash);
	if (target) {
		observer.observe(target);
	}
});

// Botón subir

function subir() {
	window.addEventListener("scroll", () => {
		let scroll = document.documentElement.scrollTop;
		let btnUp = document.getElementById("btn-up");

		if (scroll >= 300) {
			btnUp.style.right = 20 + "px";
		} else {
			btnUp.style.right = -200 + "px";
		}
	})
}

subir();