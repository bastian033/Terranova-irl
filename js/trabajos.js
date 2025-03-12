// Datos de los trabajos
const trabajos = [
    {
        id: "casa",
        titulo: "Casa de dos pisos",
        descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, dolorum iste tempora ea mollitia ut quibusdam veritatis earum libero accusantium modi, ratione explicabo repudiandae soluta optio vero nihil blanditiis. Exercitationem consequuntur maxime voluptatum sequi sit molestias commodi. Deserunt, a animi sint quae eligendi ab cumque eveniet perspiciatis eum doloribus quo nihil. Odit quisquam deleniti ratione molestiae et, repellendus, quis consequatur dolores tempore deserunt tempora autem. Dolorem laboriosam a explicabo aspernatur, fugiat possimus non molestias vel eligendi nulla omnis, odio laudantium. Asperiores, reiciendis. Totam, molestias. Cupiditate ipsum et odio, ipsam, cum illo illum nam maxime fuga ducimus reiciendis pariatur vero quis!",
        imagen: "/img/casa.jpg",
        imagen2: "/img/Construcciones-llave-en-mano.jpg",
        imagen3: "/img/casa.jpg",
        imagen4: "/img/Construcciones-llave-en-mano.jpg",
        imagen5: "/img/casa.jpg",
        cliente: "Cliente : Mauricio Parod",
        Fecha:"Fecha : 20/07/2020",
    },
    {
        id: "edificio",
        titulo: "Edificio Corporativo",
        descripcion: "Construcción de edificios empresariales con enfoque en eficiencia energética.",
        imagen: "/img/covertizos.jpg",
        cliente: "Mauricio Parod",
        Fecha:"20/07/2020",
    },
    {
        id: "puente",
        titulo: "Puente Metálico",
        descripcion: "Desarrollo de infraestructuras resistentes para la conexión de comunidades.",
        imagen: "/img/puente.jpg",
        cliente: "Mauricio Parod",
        Fecha:"20/07/2020",
    }
];

// Obtener elementos del DOM
const trabajosList = document.getElementById("trabajos-list");
const contenidoDiv = document.getElementById("contenido");
const sidebar = document.getElementById("sidebar");
const menuToggle = document.getElementById("menu-toggle");

// Crear los elementos del menú lateral con los trabajos
trabajos.forEach(trabajo => {
    const li = document.createElement("li");
    li.textContent = trabajo.titulo;
    li.dataset.id = trabajo.id;

    li.addEventListener("click", () => {
        actualizarContenido(trabajo);
        cerrarMenu(); // Cierra el menú después de seleccionar un trabajo
    });

    trabajosList.appendChild(li);
});

// Función para actualizar el contenido de la página
function actualizarContenido(trabajo) {
    document.getElementById("titulo-trabajo").textContent = trabajo.titulo;
    document.getElementById("descripcion-trabajo").textContent = trabajo.descripcion;
    document.getElementById("imagen-trabajo").src = trabajo.imagen;
    document.getElementById("cliente-trabajo").textContent = trabajo.cliente;
    document.getElementById("fecha-trabajo").textContent = trabajo.Fecha;
    document.getElementById("imagen-trabajo2").src = trabajo.imagen2;
    document.getElementById("imagen-trabajo3").src = trabajo.imagen3;
    document.getElementById("imagen-trabajo4").src = trabajo.imagen4;
    document.getElementById("imagen-trabajo5").src = trabajo.imagen5;
    contenidoDiv.style.backgroundColor = trabajo.color;

    const imagenes = document.querySelectorAll(".carousel img");
    imagenes[0].src = trabajo.imagen;
    imagenes[1].src = trabajo.imagen2 || trabajo.imagen; // Si no hay imagen2, usa la primera

    // Resetear carrusel
    imagenes.forEach(img => img.classList.remove("active"));
    currentImageIndex = 0;
    imagenes[0].classList.add("active");
}

// Función para alternar el menú lateral
function toggleMenu() {
    sidebar.classList.toggle("open");
    //menuToggle.style.display = sidebar.classList.contains("open") ? "none" : "block"; // Oculta el botón cuando el menú está abierto
}

// Función para cerrar el menú lateral
function cerrarMenu() {
    sidebar.classList.remove("open");
    menuToggle.style.display = "block"; // Muestra el botón cuando el menú se cierra
}

// Cierra el menú si el usuario hace clic fuera del sidebar
document.addEventListener("click", (event) => {
    if (!sidebar.contains(event.target) && !menuToggle.contains(event.target)) {
        cerrarMenu();
    }
});


/* ----------------------------------------- PARA EL CARRUSEL-----------------------------------------*/

let currentImageIndex = 0;

function cambiarImagen(direccion) {
    const imagenes = document.querySelectorAll(".carousel img");

    // Ocultar la imagen actual
    imagenes[currentImageIndex].classList.remove("active");

    // Calcular el nuevo índice
    currentImageIndex += direccion;

    // Asegurar que el índice esté dentro del rango
    if (currentImageIndex >= imagenes.length) {
        currentImageIndex = 0;
    } else if (currentImageIndex < 0) {
        currentImageIndex = imagenes.length - 1;
    }

    // Mostrar la nueva imagen
    imagenes[currentImageIndex].classList.add("active");
}

document.addEventListener("DOMContentLoaded", () => {
    const prevBtn = document.getElementById("prev");
    const nextBtn = document.getElementById("next");
    const carousel = document.querySelector(".carousel");

    let index = 0;

    nextBtn.addEventListener("click", () => {
        if (index < 1) { // Solo hay 2 imágenes
            index++;
            carousel.style.transform = `translateX(-${index * 50}%)`;
        }
    });

    prevBtn.addEventListener("click", () => {
        if (index > 0) {
            index--;
            carousel.style.transform = `translateX(-${index * 50}%)`;
        }
    });
});
