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
    },
    { 
        name: "Acta de Instalación de la Comisión de Promoción y Financiamiento", 
        file: "documents/ActadeInstalaciondelaComisiondePromocionyFinanciamiento.pdf", 
        category: ["Institucional"],
        image: "documents/thumbnails/1.jpg", 
        description: "Acta de Instalación de la Comisión de Promoción y Financiamiento"
    },
    { 
        name: "Acta institucionalización", 
        file: "documents/ActaInstitucionalizacionPM.pdf", 
        category: ["Institucional"],
        image: "documents/thumbnails/2.jpg", 
        description: "Acta institucionalización "
    },
    { 
        name: "Convenio de Adhesión Colombia al PPP", 
        file: "documents/ConveniodeAdhesionColombiaalPPP.pdf", 
        category: ["Institucional"],
        image: "documents/thumbnails/5.jpg", 
        description: "Convenio de Adhesión Colombia al PPP"
    },
    { 
        name: "Anexo del Acta que Institucionaliza el PPP", 
        file: "documents/ActaqueInstitucionalizaelMecanismodelPPP.pdf", 
        category: ["Institucional"],
        image: "documents/thumbnails/3.jpg", 
        description: "Anexo del Acta que Institucionaliza el PPP"
    },
    { 
        name: "Declaración PPP Campeche", 
        file: "documents/DeclaracionPPPCampeche.pdf", 
        category: ["Institucional"],
        image: "documents/thumbnails/10.jpg", 
        description: "Declaración PPP Campeche"
    },
    { 
        name: "Declaración PPP Campeche", 
        file: "documents/DeclaracionPPPCampeche.pdf", 
        category: ["Institucional"],
        image: "documents/thumbnails/10.jpg", 
        description: "Declaración PPP Campeche"
    },
    { 
        name: "Informe PM XVI Cumbre de Tuxtla", 
        file: "documents/InformePMXVICumbredeTuxtla.pdf", 
        category: ["Institucional"],
        image: "documents/thumbnails/20.jpg", 
        description: "Informe PM XVI Cumbre de Tuxtla"
    },
    { 
        name: "Informe PM XV Cumbre de Tuxtla", 
        file: "documents/InformePMXVCumbredeTuxtla.pdf", 
        category: ["Institucional"],
        image: "documents/thumbnails/19.jpg", 
        description: "Informe PM XV Cumbre de Tuxtla"
    },
    { 
        name: "Resoluciones Sectoriales XIII - Cumbre de Tuxtla", 
        file: "documents/ResolucionesSectorialesXIIICumbredeTuxtla.pdf", 
        category: ["Institucional"],
        image: "documents/thumbnails/23.jpg", 
        description: "Resoluciones Sectoriales XIII - Cumbre de Tuxtla"
    },
    { 
        name: "Declaración XII Cumbre de Tuxtla", 
        file: "documents/DeclaracionXIICumbredeTuxtla.pdf", 
        category: ["Institucional"],
        image: "documents/thumbnails/17.jpg", 
        description: "Declaración XII Cumbre de Tuxtla"
    },
    { 
        name: "Declaración XI Cumbre de Tuxtla", 
        file: "documents/DeclaracionXICumbredeTuxtla.pdf", 
        category: ["Institucional"],
        image: "documents/thumbnails/16.jpg", 
        description: "Declaración XI Cumbre de Tuxtla"
    },
    { 
        name: "Declaración X Tuxtla - Villahermosa", 
        file: "documents/DeclaracionXTuxtlaVillahermosa.pdf", 
        category: ["Institucional"],
        image: "documents/thumbnails/18.jpg", 
        description: "Declaración X Tuxtla - Villahermosa"
    },
    { 
        name: "Declaración IX Cumbre Tuxtla - Belice", 
        file: "documents/DeclaracionIXCumbreTuxtlaBelice.pdf", 
        category: ["Institucional"],
        image: "documents/thumbnails/10.jpg", 
        description: "Declaración IX Cumbre Tuxtla - Belice"
    },
    { 
        name: "Declaración VIII Cumbre de Tuxtla", 
        file: "documents/DeclaracionVIIICumbredeTuxtla.pdf", 
        category: ["Institucional"],
        image: "documents/thumbnails/15.jpg", 
        description: "Declaración VIII Cumbre de Tuxtla"
    },
    { 
        name: "Declaración VII Cumbre de Tuxtla", 
        file: "documents/DeclaracionVIICumbredeTuxtla.pdf", 
        category: ["Institucional"],
        image: "documents/thumbnails/14.jpg", 
        description: "Declaración VII Cumbre de Tuxtla"
    },
    { 
        name: "Declaración VI Cumbre de Tuxtla", 
        file: "documents/DeclaracionVICumbredeTuxtla.pdf", 
        category: ["Institucional"],
        image: "documents/thumbnails/13.jpg", 
        description: "Declaración VI Cumbre de Tuxtla"
    },
    { 
        name: "Declaración V Cumbre de Tuxtla", 
        file: "documents/DeclaracionVCumbredeTuxtla.pdf", 
        category: ["Institucional"],
        image: "documents/thumbnails/12.jpg", 
        description: "Declaración V Cumbre de Tuxtla"
    },
    { 
        name: "Declaración IV Cumbre de Tuxtla", 
        file: "documents/DeclaracionIVCumbredeTuxtla.pdf", 
        category: ["Institucional"],
        image: "documents/thumbnails/9.jpg", 
        description: "Declaración IV Cumbre de Tuxtla"
    },
    { 
        name: "Declaración III Cumbre de Tuxtla", 
        file: "documents/DeclaracionIIICumbredeTuxtla.pdf", 
        category: ["Institucional"],
        image: "documents/thumbnails/8.jpg", 
        description: "Declaración III Cumbre de Tuxtla"
    },
    { 
        name: "Declaración II Cumbre de Tuxtla", 
        file: "documents/DeclaracionIICumbredeTuxtla.pdf", 
        category: ["Institucional"],
        image: "documents/thumbnails/7.jpg", 
        description: "Declaración II Cumbre de Tuxtla"
    }
];

// Referencias a los elementos HTML
const documentList = document.getElementById("documents-list");
const categories = document.getElementById("categories");
const searchInput = document.getElementById("searchInput");
const copyAlert = document.getElementById("copyAlert");

// Elementos de paginación
const paginationContainer = document.createElement("div");
paginationContainer.classList.add("pagination", "justify-content-center", "mt-4");
documentList.after(paginationContainer);

// Variables de paginación
const ITEMS_PER_PAGE = 5;
let currentPage = 1;
let filteredDocuments = [];

// Función para generar el HTML dinámico de un documento
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

// Función para crear botones de paginación
function createPaginationButtons() {
    const totalPages = Math.ceil(filteredDocuments.length / ITEMS_PER_PAGE);
    paginationContainer.innerHTML = '';

    // Botón Anterior
    const prevButton = document.createElement('button');
    prevButton.classList.add('btn', 'btn-outline-primary', 'mr-2');
    prevButton.textContent = 'Anterior';
    prevButton.disabled = currentPage === 1;
    prevButton.addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage--;
            displayDocuments();
        }
    });
    paginationContainer.appendChild(prevButton);

    // Botones de número de página
    for (let i = 1; i <= totalPages; i++) {
        const pageButton = document.createElement('button');
        pageButton.classList.add('btn', 'btn-outline-primary', 'mr-2');
        pageButton.textContent = i;
        
        if (i === currentPage) {
            pageButton.classList.add('active');
        }
        
        pageButton.addEventListener('click', () => {
            currentPage = i;
            displayDocuments();
        });
        
        paginationContainer.appendChild(pageButton);
    }

    // Botón Siguiente
    const nextButton = document.createElement('button');
    nextButton.classList.add('btn', 'btn-outline-primary');
    nextButton.textContent = 'Siguiente';
    nextButton.disabled = currentPage === totalPages;
    nextButton.addEventListener('click', () => {
        if (currentPage < totalPages) {
            currentPage++;
            displayDocuments();
        }
    });
    paginationContainer.appendChild(nextButton);
}

// Función para mostrar documentos según categoría y paginación
function showDocuments(category) {
    // Filtrar documentos según la categoría
    filteredDocuments = category === "all" 
        ? documents 
        : documents.filter(doc => doc.category.includes(category));

    // Resetear a la primera página
    currentPage = 1;
    displayDocuments();
}

// Función para mostrar documentos paginados
function displayDocuments() {
    documentList.innerHTML = '';  // Limpiar el contenido

    // Calcular índices de documentos para la página actual
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    const pageDocuments = filteredDocuments.slice(startIndex, endIndex);

    // Mostrar documentos de la página actual
    pageDocuments.forEach(doc => {
        documentList.innerHTML += generateDocumentHTML(doc);
    });

    // Crear botones de paginación
    createPaginationButtons();
}

// Filtrar documentos al buscar
searchInput.addEventListener("input", function() {
    const searchTerm = searchInput.value.toLowerCase();
    filteredDocuments = documents.filter(doc => 
        doc.name.toLowerCase().includes(searchTerm)
    );

    // Resetear a la primera página
    currentPage = 1;
    displayDocuments();
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

// Copiar enlace de documento al portapapeles
function copyLinkToClipboard(link) {
    // Base URL for the document repository
    const baseUrl = "https://proyectomesoamerica.org/images/BibliotecaDEPM/";
    
    // Create a full URL by combining the base URL with the link
    const fullLink = baseUrl + link;
    
    // Create a temporary input element to copy the link
    const tempInput = document.createElement("input");
    document.body.appendChild(tempInput);
    tempInput.value = fullLink;
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);

    // Mostrar alerta de confirmación
    copyAlert.style.display = "block";
    setTimeout(() => {
        copyAlert.style.display = "none";
    }, 2000);
}

// Mostrar todos los documentos al cargar la página
showDocuments("all");