//________________________Carrusel de proyectos__________________________
function scrollCarousel(direction) {
    const carousel = document.querySelector('.carousel-3');
    const scrollAmount = 300; // Ajusta este valor según sea necesario
    carousel.scrollBy({
        left: direction * scrollAmount,
        behavior: 'smooth'
    });
}
//__________________ Carrusel de servicios ______________________°°
document.addEventListener("DOMContentLoaded", function () {
    let imagenes = document.querySelectorAll(".carousel1 img");
    let textos = document.querySelectorAll(".header-content h1");
    let etiquetaP = document.querySelectorAll(".header-content p");
    let etiquetaH2 = document.querySelectorAll(".header-content h2");
    let indexetiquetaH2 = 0;
    let indexEtiquetaP = 0;
    let indexImagen = 0;
    let indexTexto = 0;

    function changeSlide() {
        // cambia las imagenes
        imagenes[indexImagen].classList.remove("active");
        indexImagen = (indexImagen + 1) % imagenes.length;
        imagenes[indexImagen].classList.add("active");
        // cambia el texto h1
        textos[indexTexto].classList.remove("activate");
        indexTexto = (indexTexto + 1) % textos.length;
        textos[indexTexto].classList.add("activate");
        // cambia texto h2
        etiquetaH2[indexetiquetaH2].classList.remove("activate");
        indexetiquetaH2 = (indexetiquetaH2 + 1) % etiquetaH2.length;
        etiquetaH2[indexetiquetaH2].classList.add("activate")
        // cambia texto de la etiqueta p
        etiquetaP[indexEtiquetaP].classList.remove("activate");
        indexEtiquetaP = (indexEtiquetaP + 1) % etiquetaP.length;
        etiquetaP[indexEtiquetaP].classList.add("activate")
    }

    setInterval(changeSlide, 3000); // Cambia cada 3 segundos
});

//________________________________________________________________
document.addEventListener("DOMContentLoaded", () => {
    const listItems = document.querySelectorAll("#services > li");
    const sublistItems = document.querySelectorAll(".sublist-item");
    const imageContainer = document.getElementById("service-image");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");

    let images = [];
    let currentIndex = 0;
    let openSublist = null; // Referencia a la sublista abierta

    function handleSelection(item) {
        const imageUrls = item.dataset.images;
        if (imageUrls) {
            images = imageUrls.split(",");
            currentIndex = 0;
            updateImage();
        }
    }

    listItems.forEach((item) => {
        item.addEventListener("click", (event) => {
            const sublist = item.querySelector(".sublist");

            if (sublist) {
                event.stopPropagation(); // Evita que el clic se propague al documento

                // Si hay una sublista abierta y no es la misma, la cerramos
                if (openSublist && openSublist !== sublist) {
                    openSublist.style.maxHeight = "0";
                    openSublist.style.opacity = "0";
                    openSublist.classList.remove("visible");
                }

                if (sublist.classList.contains("visible")) {
                    sublist.style.maxHeight = "0";
                    sublist.style.opacity = "0";
                    sublist.classList.remove("visible");
                    openSublist = null;
                } else {
                    sublist.style.maxHeight = sublist.scrollHeight + "px";
                    sublist.style.opacity = "1";
                    sublist.classList.add("visible");
                    openSublist = sublist;
                }
            } else {
                handleSelection(item);
            }
        });
    });

    sublistItems.forEach((item) => {
        item.addEventListener("click", (event) => {
            event.stopPropagation();
            handleSelection(item);
        });
    });

    // Escuchar clics en cualquier parte del documento para cerrar la sublista
    document.addEventListener("click", () => {
        if (openSublist) {
            openSublist.style.maxHeight = "0";
            openSublist.style.opacity = "0";
            openSublist.classList.remove("visible");
            openSublist = null;
        }
    });

    function updateImage() {
        if (images.length > 0) {
            imageContainer.style.opacity = "0";
            setTimeout(() => {
                imageContainer.src = images[currentIndex];
                imageContainer.style.opacity = "1";
            }, 300);
        }
    }

    prevBtn.addEventListener("click", () => {
        if (images.length > 0) {
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            updateImage();
        }
    });

    nextBtn.addEventListener("click", () => {
        if (images.length > 0) {
            currentIndex = (currentIndex + 1) % images.length;
            updateImage();
        }
    });
});