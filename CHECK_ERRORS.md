# Troubleshooting Error 500 / 404

## Error 500 (Internal Server Error)

### 1. Cek APP_KEY
```bash
# Generate key
php artisan key:generate

# Atau manual di .env
APP_KEY=base64:xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

### 2. Cek Permission Folder
```bash
chmod -R 755 storage
chmod -R 755 bootstrap/cache
chmod -R 644 .env
```

### 3. Cek PHP Version
Laravel 11 butuh PHP 8.2 atau lebih tinggi
```bash
php -v
```

### 4. Cek Extension PHP
Extension yang dibutuhkan:
- BCMath
- Ctype
- Fileinfo
- JSON
- Mbstring
- OpenSSL
- PDO
- Tokenizer
- XML

Cek di cPanel → Select PHP Version

### 5. Cek Error Log
- cPanel → Error Log
- Atau file: `storage/logs/laravel.log`

### 6. Enable Debug Mode (Sementara)
Di `.env`:
```
APP_DEBUG=true
APP_ENV=local
```
Refresh browser, lihat error detail. **JANGAN lupa set kembali ke false!**

## Error 404 (Not Found)

### 1. Cek .htaccess
File `public/.htaccess` harus ada dan berisi:
```apache
<IfModule mod_rewrite.c>
    RewriteEngine On
    RewriteCond %{REQUEST_FILENAME} !-d
    RewriteCond %{REQUEST_FILENAME} !-f
    RewriteRule ^ index.php [L]
</IfModule>
```

### 2. Cek mod_rewrite
Pastikan mod_rewrite aktif di hosting (biasanya sudah aktif)

### 3. Cek Path di index.php
Pastikan path ke `vendor/autoload.php` dan `bootstrap/app.php` benar

### 4. Clear Cache
```bash
php artisan config:clear
php artisan route:clear
php artisan cache:clear
php artisan view:clear
```

## Blank Page / White Screen

### 1. Cek .env file
Pastikan file `.env` ada dan valid

### 2. Cek Composer Dependencies
```bash
composer install --no-dev --optimize-autoloader
```

### 3. Cek Storage Writable
```bash
ls -la storage/
ls -la bootstrap/cache/
```

## Database Connection Error

### 1. Cek Kredensial Database
```env
DB_CONNECTION=mysql
DB_HOST=localhost  # atau 127.0.0.1
DB_PORT=3306
DB_DATABASE=nama_database
DB_USERNAME=user_database
DB_PASSWORD=password_database
```

### 2. Test Koneksi
```bash
php artisan migrate:status
```

### 3. Cek Host Database
Beberapa hosting pakai `localhost`, ada yang pakai IP spesifik

## CSRF Token Mismatch

### 1. Cek APP_URL
```env
APP_URL=https://yourdomain.com
```

### 2. Clear Session
```bash
php artisan session:clear
```

## Quick Fix Commands

```bash
# Reset semua cache
php artisan optimize:clear

# Rebuild cache untuk production
php artisan config:cache
php artisan route:cache
php artisan view:cache

# Fix permission
find storage -type d -exec chmod 755 {} \;
find storage -type f -exec chmod 644 {} \;
find bootstrap/cache -type d -exec chmod 755 {} \;
find bootstrap/cache -type f -exec chmod 644 {} \;
```

## Kontak Hosting Support

Jika masih error, hubungi support hosting dengan info:
1. Screenshot error
2. Isi file `storage/logs/laravel.log`
3. PHP version yang digunakan
4. Extension PHP yang aktif
