<?php
// registrar_documento.php

if (isset($_GET['documento']) && isset($_GET['accion'])) {
    $documento = $_GET['documento'];
    $accion = $_GET['accion'];
    $timestamp = date('Y-m-d H:i:s');

    // Crear el registro
    $registro = "[$timestamp] Documento: $documento, Acción: $accion\n";

    // Ruta del archivo de registros
    $archivo = 'registros.txt';

    // Guardar el registro
    file_put_contents($archivo, $registro, FILE_APPEND);

    // Redirigir al documento
    $rutaDocumento = "documents/$documento";
    if (file_exists($rutaDocumento)) {
        header("Location: $rutaDocumento");
        exit();
    } else {
        echo "El documento no existe.";
    }
} else {
    echo "Solicitud inválida.";
}
