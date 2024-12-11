<?php
// registrar_documento.php

if (isset($_GET['documento']) && isset($_GET['accion'])) {
    $documento = urldecode($_GET['documento']); // Decodifica el nombre del documento
    $accion = $_GET['accion'];
    $timestamp = date('Y-m-d H:i:s');

    // Crear el registro
    $registro = "[$timestamp] Documento: $documento, Acción: $accion\n";

    // Ruta del archivo de registros
    $archivo = 'registros.txt';

    // Guardar el registro
    file_put_contents($archivo, $registro, FILE_APPEND);

    // Ruta completa del documento
    $rutaDocumento = __DIR__ . "/documents/" . $documento;

    // Redirigir al documento solo si existe
    if (file_exists($rutaDocumento)) {
        header("Content-Type: application/octet-stream");
        header("Content-Disposition: inline; filename=" . basename($rutaDocumento));
        readfile($rutaDocumento);
        exit();
    } else {
        http_response_code(404);
        echo "El documento no existe.";
    }
} else {
    http_response_code(400);
    echo "Solicitud inválida.";
}
