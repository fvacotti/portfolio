// pantalla de carga

window.onload = function () {
	var loader = document.getElementById('loader');
	setTimeout(function () {
		loader.style.opacity = '0';
		setTimeout(function () {
			loader.style.display = 'none';
		}, 300);
	}, 1000);
};

// menú hamburguesa

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
	hamburger.classList.toggle("active");
	navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
	hamburger.classList.remove("active");
	navMenu.classList.remove("active");
}))

// selector secciones

// tomo links con "#" en ".nav-menu" (^= -> "que comience con...")

const menuLinks = document.querySelectorAll('.nav-menu a[href^="#"]');

// selector

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

	// para que no se choquen elementos que estén muy juntos

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

// botón subir

function subir() {
	window.addEventListener("scroll", () => {
		let scroll = document.documentElement.scrollTop;
		let btnUp = document.getElementById("btn-up");

		if (scroll >= 300) {
			btnUp.style.right = 30 + "px";
		} else {
			btnUp.style.right = -200 + "px";
		}
	})
}

subir();