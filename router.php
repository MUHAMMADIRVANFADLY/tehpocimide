<?php
$uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);

if ($uri === '/access_admin' || $uri === '/access_admin/') {
    require __DIR__ . '/access_admin.html';
    return true;
}

if ($uri === '/' || $uri === '') {
    require __DIR__ . '/index.html';
    return true;
}

$file = __DIR__ . $uri;
if (file_exists($file) && !is_dir($file)) {
    return false; // serve requested resource as-is
}

require __DIR__ . '/index.html';
return true;
