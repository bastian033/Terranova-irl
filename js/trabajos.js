// Datos de los trabajos
const trabajos = [
    {
        id: "casa",
        titulo: "Casa",
        descripcion: "Diseño y construcción de viviendas familiares con materiales de alta calidad.",
        imagen: "/img/casa.jpg",
    },
    {
        id: "edificio",
        titulo: "Edificio Corporativo",
        descripcion: "Construcción de edificios empresariales con enfoque en eficiencia energética.",
        imagen: "/img/covertizos.jpg",
    },
    {
        id: "puente",
        titulo: "Puente Metálico",
        descripcion: "Desarrollo de infraestructuras resistentes para la conexión de comunidades.",
        imagen: "/img/puente.jpg",
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
    contenidoDiv.style.backgroundColor = trabajo.color;
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
