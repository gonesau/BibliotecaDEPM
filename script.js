// Array de documentos simulados con su categoría, imagen y descripción
const documents = [
    { 
        name: "Acta que Institucionaliza el Proyecto Mesoamérica (2009)", 
        file: "documents/ActaqueInstitucionalizaelProyectoMesoamerica.pdf", 
        category: ["Institucional"],
        image: "documents/thumbnails/4.jpg", 
        description: "Acta que Institucionaliza el Proyecto Mesoamérica (2009)"
    },
    { 
        name: "Reglamento para el Funcionamiento del Proyecto Mesoamérica", 
        file: "documents/ReglamentodeFuncionamientodelPM_firmado.pdf", 
        category: ["Institucional"],
        image: "documents/thumbnails/21.jpg", 
        description: "Reglamento para el Funcionamiento del Proyecto Mesoamérica"
    },
    { 
        name: "Resolución para la Creación del Consejo Empresarial Mesoamericano (CEM)", 
        file: "documents/ResolucionCEM.pdf", 
        category: ["Institucional"],
        image: "documents/thumbnails/22.jpg", 
        description: "Resolución para la Creación del Consejo Empresarial Mesoamericano (CEM)"
    }
];

// Referencias a los elementos HTML
const documentList = document.getElementById("documents-list");
const categories = document.getElementById("categories");
const searchInput = document.getElementById("searchInput");
const copyAlert = document.getElementById("copyAlert");

// Función para generar el HTML dinámicamente
function generateDocumentHTML(doc) {
    return `
        <section class="row document-item">
            <div class="col-md-3">
                <img src="${doc.image}" alt="Portada del Documento" class="img-fluid">
            </div>
            <div class="col-md-6">
                <h5 class="document-title">${doc.name}</h5>
                <p class="document-description">${doc.description}</p>
                <p class="document-category">Categorías: ${doc.category.map(cat => `<span class="badge badge-primary">${cat}</span>`).join(' ')}</p>
            </div>
            <div class="col-md-3 d-flex flex-column justify-content-center">
                <a href="${doc.file}" target="_blank" class="btn btn-info mb-2">Vista Previa</a>
                <a href="${doc.file}" download class="btn btn-success mb-2">Descargar</a>
                <button class="btn btn-secondary" onclick="copyLinkToClipboard('${doc.file}')">Copiar enlace de documento</button>
            </div>
        </section>
    `;
}

// Función para mostrar documentos según categoría
function showDocuments(category) {
    documentList.innerHTML = '';  // Limpiar el contenido
    const filteredDocs = category === "all" 
        ? documents 
        : documents.filter(doc => doc.category.includes(category));

    filteredDocs.forEach(doc => {
        documentList.innerHTML += generateDocumentHTML(doc);
    });
}

// Filtrar documentos al buscar
searchInput.addEventListener("input", function() {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredDocs = documents.filter(doc => doc.name.toLowerCase().includes(searchTerm));

    documentList.innerHTML = '';  // Limpiar el contenido

    filteredDocs.forEach(doc => {
        documentList.innerHTML += generateDocumentHTML(doc);
    });
});

// Evento para manejar los clics en las categorías
categories.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        document.querySelectorAll(".list-group-item").forEach(li => li.classList.remove("active"));
        e.target.classList.add("active");
        const category = e.target.getAttribute("data-category");
        showDocuments(category);
    }
});

// Mostrar todos los documentos al cargar la página
showDocuments("all");

// Función para copiar el enlace de documento al portapapeles
function copyLinkToClipboard(link) {
    const tempInput = document.createElement("input");
    document.body.appendChild(tempInput);
    tempInput.value = window.location.href + link;
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);

    // Mostrar alerta de confirmación
    copyAlert.style.display = "block";
    setTimeout(() => {
        copyAlert.style.display = "none";
    }, 2000);
}
