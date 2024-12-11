<?php
// guardar_registro.php

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Obtener los datos enviados desde el cliente
    $data = json_decode(file_get_contents('php://input'), true);

    $documento = $data['documento'] ?? 'Desconocido';
    $accion = $data['accion'] ?? 'Desconocida';
    $timestamp = date('Y-m-d H:i:s');

    // Crear el registro en formato legible
    $registro = "[$timestamp] Documento: $documento, Acción: $accion\n";

    // Ruta del archivo .txt en la raíz del proyecto
    $archivo = 'registros.txt';

    // Guardar el registro en el archivo
    if (file_put_contents($archivo, $registro, FILE_APPEND)) {
        echo json_encode(['status' => 'success', 'message' => 'Registro guardado correctamente.']);
    } else {
        echo json_encode(['status' => 'error', 'message' => 'No se pudo guardar el registro.']);
    }
} else {
    echo json_encode(['status' => 'error', 'message' => 'Método no permitido.']);
}
