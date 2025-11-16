# Panduan Deploy DigiMeta007 ke Hosting

## A. Deploy ke Shared Hosting (cPanel)

### 1. Persiapan File
Download atau clone repository dari GitHub:
```bash
git clone https://github.com/missblossom007-dot/digimeta007.git
```

### 2. Upload File
**Via File Manager cPanel:**
- Login ke cPanel
- Buka File Manager
- Upload semua file Laravel ke folder di luar `public_html` (misal: `/home/username/digimeta007`)
- Upload isi folder `public` ke `public_html`

**Via FTP:**
- Gunakan FileZilla atau WinSCP
- Upload struktur yang sama seperti di atas

### 3. Edit public_html/index.php
Buka `public_html/index.php` dan ubah path:

```php
<?php
require __DIR__.'/../digimeta007/vendor/autoload.php';
$app = require_once __DIR__.'/../digimeta007/bootstrap/app.php';
```

Sesuaikan path dengan lokasi folder Laravel Anda.

### 4. Setup Database
**Di cPanel → MySQL Databases:**
1. Buat database baru (misal: `username_digimeta007`)
2. Buat user database (misal: `username_digi`)
3. Set password yang kuat
4. Tambahkan user ke database dengan ALL PRIVILEGES

### 5. Konfigurasi .env
Edit file `.env` di folder Laravel:

```env
APP_NAME=DigiMeta007
APP_ENV=production
APP_KEY=base64:xxxxx  # Generate dengan: php artisan key:generate
APP_DEBUG=false
APP_URL=https://yourdomain.com

DB_CONNECTION=mysql
DB_HOST=localhost
DB_PORT=3306
DB_DATABASE=username_digimeta007
DB_USERNAME=username_digi
DB_PASSWORD=your_password
```

### 6. Install Dependencies (Via SSH atau Terminal cPanel)
```bash
cd /home/username/digimeta007
composer install --no-dev --optimize-autoloader
```

**Jika tidak ada Composer di hosting:**
- Download composer.phar
- Upload ke folder Laravel
- Jalankan: `php composer.phar install --no-dev --optimize-autoloader`

### 7. Generate APP_KEY
```bash
php artisan key:generate
```

### 8. Set Permission
```bash
chmod -R 755 storage
chmod -R 755 bootstrap/cache
```

**Via File Manager:**
- Klik kanan folder → Change Permissions → 755

### 9. Run Migration
```bash
php artisan migrate --force
```

### 10. Optimize untuk Production
```bash
php artisan config:cache
php artisan route:cache
php artisan view:cache
```

### 11. Setup .htaccess
Pastikan file `.htaccess` ada di `public_html`:

```apache
<IfModule mod_rewrite.c>
    <IfModule mod_negotiation.c>
        Options -MultiViews -Indexes
    </IfModule>

    RewriteEngine On

    # Handle Authorization Header
    RewriteCond %{HTTP:Authorization} .
    RewriteRule .* - [E=HTTP_AUTHORIZATION:%{HTTP:Authorization}]

    # Redirect Trailing Slashes
    RewriteCond %{REQUEST_FILENAME} !-d
    RewriteCond %{REQUEST_URI} (.+)/$
    RewriteRule ^ %1 [L,R=301]

    # Send Requests To Front Controller
    RewriteCond %{REQUEST_FILENAME} !-d
    RewriteCond %{REQUEST_FILENAME} !-f
    RewriteRule ^ index.php [L]
</IfModule>
```

### 12. Test Aplikasi
Buka browser dan akses:
- `https://yourdomain.com`
- `https://yourdomain.com/products`

---

## B. Deploy ke VPS (Ubuntu/Debian)

### 1. Update System
```bash
sudo apt update && sudo apt upgrade -y
```

### 2. Install LEMP Stack
```bash
# Install Nginx
sudo apt install nginx -y

# Install PHP 8.3
sudo apt install php8.3-fpm php8.3-mysql php8.3-mbstring php8.3-xml php8.3-bcmath php8.3-curl -y

# Install MySQL
sudo apt install mysql-server -y

# Install Composer
curl -sS https://getcomposer.org/installer | php
sudo mv composer.phar /usr/local/bin/composer
```

### 3. Clone Repository
```bash
cd /var/www
sudo git clone https://github.com/missblossom007-dot/digimeta007.git
cd digimeta007
```

### 4. Install Dependencies
```bash
composer install --no-dev --optimize-autoloader
```

### 5. Setup .env
```bash
cp .env.example .env
nano .env
```

Edit konfigurasi database dan APP_URL.

### 6. Generate Key & Migrate
```bash
php artisan key:generate
php artisan migrate --force
php artisan config:cache
php artisan route:cache
php artisan view:cache
```

### 7. Set Permission
```bash
sudo chown -R www-data:www-data /var/www/digimeta007
sudo chmod -R 755 /var/www/digimeta007/storage
sudo chmod -R 755 /var/www/digimeta007/bootstrap/cache
```

### 8. Configure Nginx
```bash
sudo nano /etc/nginx/sites-available/digimeta007
```

Isi dengan:
```nginx
server {
    listen 80;
    server_name yourdomain.com www.yourdomain.com;
    root /var/www/digimeta007/public;

    add_header X-Frame-Options "SAMEORIGIN";
    add_header X-Content-Type-Options "nosniff";

    index index.php;

    charset utf-8;

    location / {
        try_files $uri $uri/ /index.php?$query_string;
    }

    location = /favicon.ico { access_log off; log_not_found off; }
    location = /robots.txt  { access_log off; log_not_found off; }

    error_page 404 /index.php;

    location ~ \.php$ {
        fastcgi_pass unix:/var/run/php/php8.3-fpm.sock;
        fastcgi_param SCRIPT_FILENAME $realpath_root$fastcgi_script_name;
        include fastcgi_params;
    }

    location ~ /\.(?!well-known).* {
        deny all;
    }
}
```

Enable site:
```bash
sudo ln -s /etc/nginx/sites-available/digimeta007 /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

### 9. Setup SSL (Optional)
```bash
sudo apt install certbot python3-certbot-nginx -y
sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com
```

---

## C. Troubleshooting

### Error 500
1. Cek `.env` file ada dan valid
2. Cek `APP_KEY` sudah di-generate
3. Cek permission `storage/` dan `bootstrap/cache/`
4. Cek error log: `storage/logs/laravel.log`

### Error 404
1. Cek `.htaccess` ada di folder public
2. Cek mod_rewrite aktif
3. Cek path di `index.php` benar

### Database Connection Error
1. Cek kredensial database di `.env`
2. Cek database sudah dibuat
3. Test koneksi: `php artisan migrate:status`

### Blank Page
1. Set `APP_DEBUG=true` sementara
2. Refresh browser, lihat error
3. Set kembali `APP_DEBUG=false` setelah fix

---

## D. Maintenance Mode

Aktifkan maintenance:
```bash
php artisan down
```

Nonaktifkan:
```bash
php artisan up
```

---

## E. Update Aplikasi

```bash
git pull origin main
composer install --no-dev --optimize-autoloader
php artisan migrate --force
php artisan config:cache
php artisan route:cache
php artisan view:cache
```

---

## Support

Jika ada masalah, cek:
- `storage/logs/laravel.log`
- Error log hosting (cPanel → Error Log)
- PHP version minimal 8.2
