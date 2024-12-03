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
        name: "Convenio de Adhesión Colombia al Plan Puebla Panamá", 
        file: "documents/ConveniodeAdhesionColombiaalPPP.pdf", 
        category: ["Institucional"],
        image: "documents/thumbnails/5.jpg", 
        description: "Convenio de Adhesión Colombia al Plan Puebla Panamá"
    },
    { 
        name: "Anexo del Acta que Institucionaliza el Plan Puebla Panamá", 
        file: "documents/ActaqueInstitucionalizaelMecanismodelPPP.pdf", 
        category: ["Institucional"],
        image: "documents/thumbnails/3.jpg", 
        description: "Anexo del Acta que Institucionaliza el Plan Puebla Panamá"
    },
    { 
        name: "Declaración Plan Puebla Panamá Campeche", 
        file: "documents/DeclaracionPPPCampeche.pdf", 
        category: ["Institucional"],
        image: "documents/thumbnails/10.jpg", 
        description: "Declaración Plan Puebla Panamá Campeche"
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
    },
    { 
        name: "Agenda Mesoamericana de Transporte, Movilidad y Logística", 
        file: "documents/AgendaMesoamericanadeTransporteMovilidadyLogistica.pdf", 
        category: ["Economico"],
        image: "documents/thumbnails/24.jpg", 
        description: "Agenda Mesoamericana de Transporte, Movilidad y Logística"
    },
    { 
        name: "Plan de Acción Regional de Transporte Marítimo de Corta Distancia (PAR TMCD).", 
        file: "documents/PlandeAccionRegionaldeTransporteMaritimodeCortaDistancia(PARTMCD).pdf", 
        category: ["Economico"],
        image: "documents/thumbnails/25.jpg", 
        description: "Plan de Acción Regional de Transporte Marítimo de Corta Distancia (PAR TMCD)."
    },
    { 
        name: "Agenda Mesoamericana de Facilitación Comercial y Competitividad.", 
        file: "documents/AgendaMesoamericanadeFacilitacionComercialyCompetitividad.pdf", 
        category: ["Economico"],
        image: "documents/thumbnails/26.jpg", 
        description: "Agenda Mesoamericana de Facilitación Comercial y Competitividad."
    },
    { 
        name: "Agenda Mesoamericana de Mipymes", 
        file: "documents/AgendaMesoamericanaMipyme.pdf", 
        category: ["Economico"],
        image: "documents/thumbnails/27.jpg", 
        description: "Agenda Mesoamericana de Mipymes"
    },
    { 
        name: "MOU CENPROMYPE", 
        file: "documents/MOUCENPROMYPE.pdf", 
        category: ["Economico"],
        image: "documents/thumbnails/28.jpg", 
        description: "MOU CENPROMYPE"
    },
    { 
        name: "MOU RMIDB", 
        file: "documents/MOURMIDB.pdf", 
        category: ["Economico"],
        image: "documents/thumbnails/29.jpg", 
        description: "MOU RMIDB"
    },
    { 
        name: "MOU PMUREE", 
        file: "documents/MOUPMUREE.pdf", 
        category: ["Economico"],
        image: "documents/thumbnails/30.jpg", 
        description: "MOU PMUREE"
    },
    { 
        name: "Agenda Digital Mesoamericana (ADM).", 
        file: "documents/AgendaDigitalMesoamericana(ADM).pdf", 
        category: ["Economico"],
        image: "documents/thumbnails/31.jpg", 
        description: "Agenda Digital Mesoamericana (ADM)."
    },
    { 
        name: "MOU Comisión Centroamericana de Telecomunicaciones (COMTELCA)", 
        file: "documents/MOUComisionCentroamericanadeTelecomunicaciones(COMTELCA).pdf", 
        category: ["Economico"],
        image: "documents/thumbnails/32.jpg", 
        description: "MOU Comisión Centroamericana de Telecomunicaciones (COMTELCA)"
    },
    { 
        name: "Decálogo ADM", 
        file: "documents/DecalogoADM.pdf", 
        category: ["Economico"],
        image: "documents/thumbnails/33.jpg", 
        description: "Decálogo ADM"
    },
    { 
        name: "Plan Trienal SMSP", 
        file: "documents/PlanTrienalSMSP.pdf", 
        category: ["Socioambiental"],
        image: "documents/thumbnails/34.jpg", 
        description: "Plan Trienal SMSP"
    },
    { 
        name: "Guía Técnica: Movilidad Saludable, Segura y Sostenible", 
        file: "documents/GuiaTecnicaMovilidadSaludableSeguraySostenibleenMesoamerica.pdf", 
        category: ["Socioambiental"],
        image: "documents/thumbnails/35.jpg", 
        description: "Guía Técnica: Movilidad Saludable, Segura y Sostenible"
    },
    { 
        name: "Protocolo de Comunicación para Fomentar la Seguridad Vial", 
        file: "documents/ProtocolodeComunicacionparaFomentarlaSeguridadVial.pdf", 
        category: ["Socioambiental"],
        image: "documents/thumbnails/36.jpg", 
        description: "Protocolo de Comunicación para Fomentar la Seguridad Vial"
    },
    { 
        name: "Documento constitutivo de Sistema Mesoamericano de Salud Pública (SMSP).", 
        file: "documents/DocumentoconstitutivodeSistemaMesoamericanodeSaludPublica(SMSP).pdf", 
        category: ["Socioambiental"],
        image: "documents/thumbnails/37.jpg", 
        description: "Documento constitutivo de Sistema Mesoamericano de Salud Pública (SMSP)."
    },
    { 
        name: "MOU COMISCA", 
        file: "documents/MOUCOMISCA.pdf", 
        category: ["Socioambiental"],
        image: "documents/thumbnails/38.jpg", 
        description: "MOU COMISCA"
    },
    { 
        name: "Estrategia Mesoamericana de Sustentabilidad Ambiental (EMSA).", 
        file: "documents/EstrategiaMesoamericanadeSustentabilidadAmbiental(EMSA).pdf", 
        category: ["Socioambiental"],
        image: "documents/thumbnails/39.jpg", 
        description: "Estrategia Mesoamericana de Sustentabilidad Ambiental (EMSA)."
    },
    { 
        name: "Plan Director CBM 2030", 
        file: "documents/PlanDirectorCBM2030.pdf", 
        category: ["Socioambiental"],
        image: "documents/thumbnails/40.jpg", 
        description: "Plan Director CBM 2030"
    },
    { 
        name: "Compendio Cambio Climático", 
        file: "documents/CompendioCambioClimatico.pdf", 
        category: ["Socioambiental"],
        image: "documents/thumbnails/41.jpg", 
        description: "Compendio Cambio Climático"
    },
    { 
        name: "Diagnóstico Educación Ambiental", 
        file: "documents/DiagnosticoEducacionAmbiental.pdf", 
        category: ["Socioambiental"],
        image: "documents/thumbnails/42.jpg", 
        description: "Diagnóstico Educación Ambiental "
    },
    { 
        name: "Programa Mesoamericano de Educación Ambiental", 
        file: "documents/ProgramaMesoamericanodeEducacionAmbiental.pdf", 
        category: ["Socioambiental"],
        image: "documents/thumbnails/43.jpg", 
        description: "Programa Mesoamericano de Educación Ambiental"
    },
    { 
        name: "Políticas de Educación Ambiental de Panamá", 
        file: "documents/PoliticasdeEducacionAmbientaldePanama.pdf", 
        category: ["Socioambiental"],
        image: "documents/thumbnails/44.jpg", 
        description: "Políticas de Educación Ambiental de Panamá"
    },
    { 
        name: "Lineamientos Regionales de Educación Ambiental", 
        file: "documents/LineamientosRegionalesdeEducacionAmbiental.pdf", 
        category: ["Socioambiental"],
        image: "documents/thumbnails/45.jpg", 
        description: "Lineamientos Regionales de Educación Ambiental"
    },
    { 
        name: "Plan de Comunicaciones", 
        file: "documents/PlandeComunicaciones.pdf", 
        category: ["Socioambiental"],
        image: "documents/thumbnails/46.jpg", 
        description: "Plan de Comunicaciones"
    },
    { 
        name: "Plan de investigación", 
        file: "documents/Plandeinvestigacion.pdf", 
        category: ["Socioambiental"],
        image: "documents/thumbnails/47.jpg", 
        description: "Plan de investigación"
    },
    { 
        name: "Referentes conceptuales de EA", 
        file: "documents/ReferentesconceptualesdeEA.pdf", 
        category: ["Socioambiental"],
        image: "documents/thumbnails/48.jpg", 
        description: "Referentes conceptuales de EA"
    },
    { 
        name: "MOU CCAD", 
        file: "documents/MOUCCAD.pdf", 
        category: ["Socioambiental"],
        image: "documents/thumbnails/49.jpg", 
        description: "MOU CCAD"
    },
    { 
        name: "MOU CEPREDENAC", 
        file: "documents/MOUCEPREDENAC.pdf", 
        category: ["Socioambiental"],
        image: "documents/thumbnails/50.jpg", 
        description: "MOU CEPREDENAC"
    },
    { 
        name: "Portafolio de Proyectos 2024", 
        file: "documents/PortafoliodeProyectos2024.pdf", 
        category: ["Institucional"],
        image: "documents/thumbnails/51.jpg", 
        description: "Portafolio de Proyectos 2024"
    },
    { 
        name: "Revista Edición 2017: XVI Cumbre de Tuxtla", 
        file: "documents/Edicion2017XVICumbredeTuxtla.pdf", 
        category: ["Institucional"],
        image: "documents/thumbnails/52.jpg", 
        description: "Edición 2017: XVI Cumbre de Tuxtla"
    },
    { 
        name: "Revista Edición 2018: 10.° Aniversario del PM", 
        file: "documents/Edicion201810AniversariodelPM.pdf", 
        category: ["Institucional"],
        image: "documents/thumbnails/53.jpg", 
        description: "Edición 2018: 10.° Aniversario del PM"
    },
    { 
        name: "Revista Edición 2019: XVII Cumbre de Tuxtla", 
        file: "documents/Edicion2019XVIICumbredeTuxtla.pdf", 
        category: ["Institucional"],
        image: "documents/thumbnails/54.jpg", 
        description: "Edición 2019: XVII Cumbre de Tuxtla"
    },
    { 
        name: "Revista Edición 2020: Década de Acción Agenda 2030", 
        file: "documents/Edicion2020DecadadeAccionAgenda2030.pdf", 
        category: ["Institucional"],
        image: "documents/thumbnails/55.jpg", 
        description: "Edición 2020: Década de Acción Agenda 2030"
    },
    { 
        name: "Revista Edición 2021: Gestión de Riesgos y Cambio climático", 
        file: "documents/Edicion2021GestiondeRiesgosyCambioclimatico.pdf", 
        category: ["Institucional"],
        image: "documents/thumbnails/56.jpg", 
        description: "Edición 2021: Gestión de Riesgos y Cambio climático"
    },
    { 
        name: "Revista Edición 2022: Rumbo a la XVIII Cumbre de Tuxtla", 
        file: "documents/Edicion2022RumboalaXVIIICumbredeTuxtla.pdf", 
        category: ["Institucional"],
        image: "documents/thumbnails/57.jpg", 
        description: "Edición 2022: Rumbo a la XVIII Cumbre de Tuxtla"
    },
    { 
        name: "Revista Edición 2023: Acción por el clima en Mesoamérica", 
        file: "documents/Revista-Mesoamrica-Nos-Une-2023.pdf", 
        category: ["Institucional"],
        image: "documents/thumbnails/58.jpg", 
        description: "Edición 2023: Acción por el clima en Mesoamérica"
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