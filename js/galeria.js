const API_KEY = "AIzaSyBEdNEK0doVPtFVnRE0f6Os_RpISGk94nE";  // Reemplázalo con tu clave de API
const MAIN_FOLDER_ID = "1ln29KtDC02sZhJZHc48y9ul8zLY94T96";  // ID de la carpeta principal
async function obtenerCategorias() {
    const url = `https://www.googleapis.com/drive/v3/files?q='${MAIN_FOLDER_ID}'+in+parents and mimeType='application/vnd.google-apps.folder'&key=${API_KEY}&fields=files(id,name)`;

    const response = await fetch(url);
    const data = await response.json();

    const categoryList = document.getElementById('category-list');
    categoryList.innerHTML = "";

    data.files.forEach(folder => {
        const li = document.createElement("li");
        li.textContent = folder.name;
        li.onclick = () => {
            cargarImagenesDeCategoria(folder.id, folder.name);
            closeMenu();
        };
        categoryList.appendChild(li);
    });
}

// async function cargarImagenesDeCategoria(folderId, categoryName) {
//     const url = `https://www.googleapis.com/drive/v3/files?q='${folderId}'+in+parents and mimeType contains 'image'&key=${API_KEY}&fields=files(id,name)`;

//     const response = await fetch(url);
//     const data = await response.json();

//     document.getElementById("category-title").textContent = categoryName;
//     const gallery = document.getElementById('gallery');
//     gallery.innerHTML = "";

//     data.files.forEach(file => {
//         const img = document.createElement("img");
//         img.src = `https://lh3.googleusercontent.com/d/${file.id}`;
//         img.alt = file.name;
//         img.onclick = () => openModal(img.src);
//         gallery.appendChild(img);
//     });
// }

// Modificar la función de carga de imágenes para almacenar las URLs
async function cargarImagenesDeCategoria(folderId, categoryName) {
    const url = `https://www.googleapis.com/drive/v3/files?q='${folderId}'+in+parents and mimeType contains 'image'&key=${API_KEY}&fields=files(id,name)`;

    const response = await fetch(url);
    const data = await response.json();

    document.getElementById("category-title").textContent = categoryName;
    const gallery = document.getElementById('gallery');
    gallery.innerHTML = "";

    imagenes = []; // Reiniciar la lista de imágenes

    data.files.forEach((file, index) => {
        const imgUrl = `https://lh3.googleusercontent.com/d/${file.id}`;
        imagenes.push(imgUrl);

        const img = document.createElement("img");
        img.src = imgUrl;
        img.alt = file.name;
        img.onclick = () => openModal(index); // Asignar evento para abrir el modal
        gallery.appendChild(img);
    });
}




// Control del menú en móviles
function toggleMenu() {
    document.getElementById("sidebar").classList.toggle("open");
}

function closeMenu() {
    if (window.innerWidth <= 768) {
        document.getElementById("sidebar").classList.remove("open");
    }
}


// Función para abrir el modal con la imagen
// function openModal(src) {
//     const modal = document.getElementById("image-modal");
//     const modalImg = document.getElementById("modal-img");
//     modal.style.display = "flex";
//     modalImg.src = src;
// }

// Función para cerrar el modal
// function closeModal() {
//     document.getElementById("image-modal").style.display = "none";
// }

let imagenes = [];  // Lista de imágenes de la categoría actual
let imagenActual = 0;

// Función para abrir el modal con la imagen seleccionada
function openModal(index) {
    imagenActual = index;
    document.getElementById("modalImage").src = imagenes[imagenActual];
    document.getElementById("imageModal").style.display = "flex";
}

// Función para cerrar el modal
function closeModal() {
    document.getElementById("imageModal").style.display = "none";
}

// Función para mostrar la imagen anterior
function prevImage() {
    imagenActual = (imagenActual - 1 + imagenes.length) % imagenes.length;
    document.getElementById("modalImage").src = imagenes[imagenActual];
}

// Función para mostrar la imagen siguiente
function nextImage() {
    imagenActual = (imagenActual + 1) % imagenes.length;
    document.getElementById("modalImage").src = imagenes[imagenActual];
}


// Cargar categorías al iniciar
obtenerCategorias();