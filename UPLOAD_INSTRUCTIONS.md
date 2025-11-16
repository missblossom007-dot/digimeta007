# Panduan Upload DigiMeta007 ke digimeta007.com

## Langkah 1: Persiapan File untuk Upload

### A. Buat ZIP file (tanpa folder vendor yang besar)
Kita akan upload file dan install composer di server.

### B. File yang HARUS di-upload:
- ✅ Semua folder: app, bootstrap, config, database, public, resources, routes, storage
- ✅ File: .env.example, .htaccess, artisan, composer.json, composer.lock
- ❌ JANGAN upload: vendor/ (terlalu besar, akan di-install di server)
- ❌ JANGAN upload: .env (akan dibuat manual di server)
- ❌ JANGAN upload: node_modules/

## Langkah 2: Upload via cPanel File Manager

### 1. Buka File Manager di cPanel
- Login ke cPanel digimeta007.com
- Klik "File Manager"

### 2. Buat Folder Laravel
- Masuk ke folder `/home/username/` (di luar public_html)
- Klik "New Folder"
- Nama: `laravel` atau `digimeta007`
- Klik "Create New Folder"

### 3. Upload File
- Masuk ke folder yang baru dibuat
- Klik "Upload"
- Upload file ZIP project Laravel (tanpa vendor)
- Atau upload file satu per satu

### 4. Extract ZIP (jika upload ZIP)
- Klik kanan file ZIP
- Pilih "Extract"
- Tunggu sampai selesai
- Hapus file ZIP

## Langkah 3: Setup public_html

### 1. Pindahkan isi folder public ke public_html
- Buka folder `laravel/public`
- Select All files
- Klik "Move"
- Pindahkan ke `/home/username/public_html/`

### 2. Edit index.php di public_html
Buka `public_html/index.php` dan ubah baris ini:

**DARI:**
```php
require __DIR__.'/../vendor/autoload.php';
$app = require_once __DIR__.'/../bootstrap/app.php';
```

**MENJADI:**
```php
require __DIR__.'/../laravel/vendor/autoload.php';
$app = require_once __DIR__.'/../laravel/bootstrap/app.php';
```

Sesuaikan `laravel` dengan nama folder Anda.

## Langkah 4: Setup Database

### 1. Buat Database di cPanel
- Klik "MySQL Databases"
- Database Name: `digimeta007` (atau nama lain)
- Klik "Create Database"

### 2. Buat User Database
- Username: `digi_user` (atau nama lain)
- Password: (buat password kuat)
- Klik "Create User"

### 3. Tambahkan User ke Database
- Pilih user dan database yang baru dibuat
- Klik "Add"
- Centang "ALL PRIVILEGES"
- Klik "Make Changes"

### 4. Catat Informasi:
```
Database Name: username_digimeta007
Database User: username_digi_user
Database Password: (password yang Anda buat)
Database Host: localhost
```

## Langkah 5: Setup .env File

### 1. Copy .env.example
- Di File Manager, masuk ke folder `laravel`
- Klik kanan `.env.example`
- Pilih "Copy"
- Nama: `.env`

### 2. Edit .env
Klik kanan `.env` → Edit

Ubah konfigurasi:
```env
APP_NAME=DigiMeta007
APP_ENV=production
APP_KEY=
APP_DEBUG=false
APP_URL=https://digimeta007.com

DB_CONNECTION=mysql
DB_HOST=localhost
DB_PORT=3306
DB_DATABASE=username_digimeta007
DB_USERNAME=username_digi_user
DB_PASSWORD=your_password_here
```

Save file.

## Langkah 6: Install Composer Dependencies

### Via Terminal cPanel:
1. Klik "Terminal" di cPanel
2. Jalankan:
```bash
cd laravel
php composer.phar install --no-dev --optimize-autoloader
```

### Jika tidak ada composer:
1. Download composer.phar:
```bash
cd laravel
curl -sS https://getcomposer.org/installer | php
php composer.phar install --no-dev --optimize-autoloader
```

## Langkah 7: Generate APP_KEY & Migration

```bash
cd laravel
php artisan key:generate
php artisan migrate --force
```

## Langkah 8: Set Permission

```bash
chmod -R 755 storage
chmod -R 755 bootstrap/cache
```

Atau via File Manager:
- Klik kanan folder `storage` → Change Permissions → 755
- Klik kanan folder `bootstrap/cache` → Change Permissions → 755

## Langkah 9: Optimize

```bash
php artisan config:cache
php artisan route:cache
php artisan view:cache
```

## Langkah 10: Test Website

Buka browser:
- https://digimeta007.com
- https://digimeta007.com/products

## Troubleshooting

### Error 500
1. Cek `.env` file
2. Cek `APP_KEY` sudah di-generate
3. Cek permission storage dan bootstrap/cache
4. Cek error log: cPanel → Error Log

### Error 404
1. Cek `.htaccess` ada di public_html
2. Cek path di `public_html/index.php` benar

### Database Error
1. Cek kredensial database di `.env`
2. Test: `php artisan migrate:status`

## Struktur Akhir

```
/home/username/
├── laravel/              (folder Laravel)
│   ├── app/
│   ├── bootstrap/
│   ├── config/
│   ├── database/
│   ├── resources/
│   ├── routes/
│   ├── storage/
│   ├── vendor/
│   ├── .env
│   ├── artisan
│   └── composer.json
│
└── public_html/          (isi dari folder public)
    ├── index.php         (sudah diedit path-nya)
    ├── .htaccess
    └── (file public lainnya)
```
