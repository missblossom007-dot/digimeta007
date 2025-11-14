# Panduan Deploy Laravel ke Hosting

## Struktur Folder Hosting

```
public_html/              (atau www/ atau htdocs/)
├── index.php            (redirect ke public/)
├── .htaccess            (redirect ke public/)
└── digimeta007/         (folder project Laravel)
    ├── app/
    ├── bootstrap/
    ├── config/
    ├── database/
    ├── public/
    │   ├── index.php    (entry point utama)
    │   └── .htaccess
    ├── resources/
    ├── routes/
    ├── storage/
    ├── vendor/
    ├── .env
    ├── artisan
    └── composer.json
```

## Langkah Deploy

### 1. Upload File
- Upload semua file Laravel ke folder `digimeta007/` di hosting
- Atau upload ke root dan sesuaikan path

### 2. Setup Database
- Buat database MySQL di cPanel
- Catat: nama database, username, password
- Update file `.env`

### 3. Konfigurasi .env
```bash
APP_ENV=production
APP_DEBUG=false
APP_URL=https://yourdomain.com

DB_CONNECTION=mysql
DB_HOST=localhost
DB_DATABASE=nama_database_anda
DB_USERNAME=user_database_anda
DB_PASSWORD=password_database_anda
```

### 4. Generate APP_KEY
Via SSH:
```bash
php artisan key:generate
```

Atau manual, generate key di local lalu copy ke .env hosting

### 5. Set Permission (via SSH atau File Manager)
```bash
chmod -R 755 storage
chmod -R 755 bootstrap/cache
```

### 6. Run Migration
```bash
php artisan migrate --force
```

### 7. Optimize untuk Production
```bash
php artisan config:cache
php artisan route:cache
php artisan view:cache
```

## Troubleshooting

### Error 500
1. Cek file `.env` sudah benar
2. Cek `APP_KEY` sudah di-generate
3. Cek permission folder `storage/` dan `bootstrap/cache/`
4. Cek error log di cPanel

### Error 404
1. Pastikan `.htaccess` ada di folder `public/`
2. Pastikan mod_rewrite aktif di hosting
3. Cek path di `public/index.php` sudah benar

### Blank Page
1. Set `APP_DEBUG=true` sementara untuk lihat error
2. Cek PHP version minimal 8.2
3. Cek extension PHP yang dibutuhkan aktif

## Path untuk Shared Hosting

Jika struktur hosting Anda:
```
public_html/digimeta007/
```

Maka `public/index.php` harus:
```php
require __DIR__.'/../vendor/autoload.php';
$app = require_once __DIR__.'/../bootstrap/app.php';
```

Jika root hosting langsung ke public:
```
public_html/ (isi dari folder public/)
digimeta007/ (folder Laravel di luar public_html)
```

Maka sesuaikan path di `index.php`
