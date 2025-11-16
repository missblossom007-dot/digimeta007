# Deploy DigiMeta007 via Git (Cara Termudah)

## Langkah-langkah:

### 1. Buka Terminal di cPanel
- Login ke cPanel digimeta007.com
- Cari dan klik "Terminal"

### 2. Clone Repository dari GitHub
```bash
cd ~
git clone https://github.com/missblossom007-dot/digimeta007.git laravel
cd laravel
```

### 3. Install Composer Dependencies
```bash
curl -sS https://getcomposer.org/installer | php
php composer.phar install --no-dev --optimize-autoloader
```

### 4. Setup .env
```bash
cp .env.example .env
nano .env
```

Edit konfigurasi (tekan Ctrl+X, Y, Enter untuk save):
```env
APP_ENV=production
APP_DEBUG=false
APP_URL=https://digimeta007.com

DB_CONNECTION=mysql
DB_HOST=localhost
DB_DATABASE=username_digimeta007
DB_USERNAME=username_digi
DB_PASSWORD=your_password
```

### 5. Generate Key & Migrate
```bash
php artisan key:generate
php artisan migrate --force
php artisan config:cache
php artisan route:cache
php artisan view:cache
```

### 6. Set Permission
```bash
chmod -R 755 storage
chmod -R 755 bootstrap/cache
```

### 7. Setup public_html
```bash
# Backup public_html jika ada
mv ~/public_html ~/public_html_backup

# Copy public ke public_html
cp -r ~/laravel/public ~/public_html

# Edit index.php
nano ~/public_html/index.php
```

Ubah path menjadi:
```php
require __DIR__.'/../laravel/vendor/autoload.php';
$app = require_once __DIR__.'/../laravel/bootstrap/app.php';
```

### 8. Test
Buka: https://digimeta007.com

Selesai! ✅
