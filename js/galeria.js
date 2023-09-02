// --------------- GALERÍA --------------- //

// Tomo el div de las imagenes
const galleryItem = document.getElementsByClassName("gallery-item");

// Creo elemento para el lightbox
const lightBoxContainer = document.createElement("div");

// Creo área del lightbox
const lightBoxContent = document.createElement("div");

// Creo imagen del lightbox
const lightBoxImg = document.createElement("img");

// Creo botones prev, next y exit
const lightBoxPrev = document.createElement("div");
const lightBoxNext = document.createElement("div");
const lightBoxExit = document.createElement("div");

// Agrego las clases a los elementos creados
lightBoxContainer.classList.add("lightbox");
lightBoxContent.classList.add("lightbox-content");
lightBoxPrev.classList.add("fa-solid", "fa-angle-left", "lightbox-prev");
lightBoxNext.classList.add("fa-solid", "fa-angle-right", "lightbox-next");
lightBoxExit.classList.add("fa-solid", "fa-xmark", "lightbox-exit");

// Agrego "hijos" a los elementos creados
lightBoxContainer.appendChild(lightBoxContent);
lightBoxContent.appendChild(lightBoxImg);
lightBoxContent.appendChild(lightBoxPrev);
lightBoxContent.appendChild(lightBoxNext);
lightBoxContent.appendChild(lightBoxExit);

document.body.appendChild(lightBoxContainer);

// Galería

let index = 1;

function showLightbox(n) {
	if (n > galleryItem.length) {
		index = 1;
	}
	else if (n < 1) {
		index = galleryItem.length;
	}

	let imageLocation = galleryItem[index - 1].children[0].getAttribute("src");
	
	lightBoxImg.setAttribute("src", imageLocation);
}

// Imagen abierta

function currentImg() {
	lightBoxContainer.style.display = "flex";
	lightBoxContainer.style.alignItems = "center";
	lightBoxContainer.style.justifyContent = "center";
	lightBoxContainer.style.animation = "fade-in 800ms both";

	let imageIndex = parseInt(this.getAttribute("data-index"));

	showLightbox(index = imageIndex);
}

for (let i = 0; i < galleryItem.length; i++) {
	galleryItem[i].addEventListener("click", currentImg);
}

// Slider

function sliderImg(n) {
	showLightbox(index += n);
}

function prevImg() {
	sliderImg(-1);
}

function nextImg() {
	sliderImg(1);
}

lightBoxPrev.addEventListener("click", prevImg);

lightBoxNext.addEventListener("click", nextImg);

// Ccerrar galería

lightBoxContainer.addEventListener("click", (e)=>{
	if (e.target !== lightBoxContent && e.target !== lightBoxImg && e.target !== lightBoxPrev && e.target !== lightBoxNext) {
		lightBoxContainer.style.display = "none";
	}
})

// Eventos teclado

window.addEventListener("keydown", event => {
	if (lightBoxContainer.style.display === "flex") {
		switch (event.keyCode) {
			case 37: // flecha izquierda
				lightBoxPrev.click();
				break;
			case 39: // flecha derecha
				lightBoxNext.click();
				break;
			case 27: // esc
				lightBoxExit.click();
				break;
		}
	}
});