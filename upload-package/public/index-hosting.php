<?php

/**
 * Laravel Application Entry Point untuk Hosting
 * 
 * Sesuaikan path __DIR__.'/../' dengan struktur folder hosting Anda
 * 
 * Contoh struktur:
 * public_html/
 * ├── index.php (file ini)
 * └── digimeta007/ (folder Laravel)
 *     ├── app/
 *     ├── bootstrap/
 *     ├── vendor/
 *     └── ...
 * 
 * Maka path-nya: __DIR__.'/digimeta007/vendor/autoload.php'
 */

use Illuminate\Contracts\Http\Kernel;
use Illuminate\Http\Request;

define('LARAVEL_START', microtime(true));

// Sesuaikan path ini dengan struktur hosting Anda
// Opsi 1: Jika Laravel di subfolder
// require __DIR__.'/digimeta007/vendor/autoload.php';
// $app = require_once __DIR__.'/digimeta007/bootstrap/app.php';

// Opsi 2: Jika public_html adalah isi dari folder public Laravel
require __DIR__.'/../vendor/autoload.php';
$app = require_once __DIR__.'/../bootstrap/app.php';

// Opsi 3: Jika struktur custom
// require __DIR__.'/../../digimeta007/vendor/autoload.php';
// $app = require_once __DIR__.'/../../digimeta007/bootstrap/app.php';

// Maintenance mode check
if (file_exists($maintenance = __DIR__.'/../storage/framework/maintenance.php')) {
    require $maintenance;
}

$kernel = $app->make(Kernel::class);

$response = $kernel->handle(
    $request = Request::capture()
)->send();

$kernel->terminate($request, $response);
