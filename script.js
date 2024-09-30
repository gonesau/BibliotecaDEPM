// Array de documentos simulados con su categoría, imagen y descripción
const documents = [
    { 
        name: "Plan estratégico institucional 2024-2028", 
        file: "https://proyectomesoamerica.org/images/PM/2024/documentos/Plan-Estrategico-Institucional-PM-2024-2028.pdf", 
        category: ["Energía"],
        image: "https://proyectomesoamerica.org/images/PM/2024/destacados/PEI.jpg", 
        description: "Plan estratégico institucional 2024-2028."
    },
    { 
        name: "OPS-OMS Presentación COP 26 Mesoamerica 2804", 
        file: "https://proyectomesoamerica.org/images/Biblioteca/MedioAmbiente/OPS-OMS-Presentacion-COP-26-Mesoamerica-2804-1.pdf", 
        category: ["MedioAmbiente"], 
        image: "https://proyectomesoamerica.org/images/Biblioteca/MedioAmbiente/OPS-OMS-Presentacion-COP-26-Mesoamerica-2804.png", 
        description: "Acuerdos en Salud de la COP26. Presentación en el marco del Simposio sobre los Acuerdos de la COP26: Reflexiones para los Países Miembros de Proyecto Mesoamérica, 28 de abril de 2022. Luis Francisco Sánchez Otero, Organización Panamericana de la Salud (OPS/OMS)."
    },
    { 
        name: "GEF COP 26 SImposio_Proyecto Mesoamerica (002)", 
        file: "https://proyectomesoamerica.org/images/Biblioteca/MedioAmbiente/GEF-COP-26-SImposio_Proyecto-Mesoamerica-002.pdf", 
        category: ["Vivienda"], 
        image: "https://proyectomesoamerica.org/images/Biblioteca/MedioAmbiente/GEF-COP-26-SImposio_Proyecto-Mesoamerica-002.png", 
        description: "Políticas públicas para vivienda social."
    },
    { 
        name: "CEPAL-IPCC 28 Abr 22 DL PM", 
        file: "https://proyectomesoamerica.org/images/Biblioteca/MedioAmbiente/CEPAL-IPCC-28-Abr-22-DL-PM.pdf", 
        category: ["Energía", "MedioAmbiente"], 
        image: "https://proyectomesoamerica.org/images/Biblioteca/MedioAmbiente/CEPAL-IPCC-28-Abr-22-DL-PM.png", 
        description: "Cambio Climático y Riesgo de Desastres: Compendio de Buenas Prácticas en Mesoamérica, 2022. Enlaces Sectoriales de la EMSA, Proyecto de Integración y Desarrollo de Mesoamérica."
    },
    { 
        name: "Urbanismo y Vivienda", 
        file: "https://proyectomesoamerica.org/images/Biblioteca/MedioAmbiente/Cambio-Climatico-y-Riesgo-de-Desastres-Compendio-de-Buenas-Practicas-en-Mesoamerica.pdf", 
        category: ["Vivienda"], 
        image: "https://proyectomesoamerica.org/images/Biblioteca/MedioAmbiente/Cambio-Climatico-y-Riesgo-de-Desastres-Compendio-de-Buenas-Practicas-en-Mesoamerica.png", 
        description: "Estudio urbanístico relacionado con viviendas sustentables."
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
