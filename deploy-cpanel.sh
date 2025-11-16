#!/bin/bash

echo "=========================================="
echo "DigiMeta007 - Deploy Script untuk cPanel"
echo "=========================================="
echo ""

# Warna
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Fungsi untuk print dengan warna
print_success() {
    echo -e "${GREEN}✓ $1${NC}"
}

print_error() {
    echo -e "${RED}✗ $1${NC}"
}

print_info() {
    echo -e "${YELLOW}→ $1${NC}"
}

# Cek apakah di direktori yang benar
if [ ! -f "artisan" ]; then
    print_error "File artisan tidak ditemukan. Pastikan Anda di folder root Laravel!"
    exit 1
fi

print_info "Memulai deployment..."
echo ""

# 1. Install dependencies
print_info "Installing Composer dependencies..."
if command -v composer &> /dev/null; then
    composer install --no-dev --optimize-autoloader
    print_success "Dependencies installed"
else
    print_error "Composer tidak ditemukan. Install manual atau upload vendor/"
fi

echo ""

# 2. Copy .env jika belum ada
if [ ! -f ".env" ]; then
    print_info "Copying .env.example to .env..."
    cp .env.example .env
    print_success ".env file created"
    print_info "PENTING: Edit .env dan sesuaikan konfigurasi database!"
else
    print_success ".env file already exists"
fi

echo ""

# 3. Generate APP_KEY
print_info "Generating application key..."
php artisan key:generate
print_success "Application key generated"

echo ""

# 4. Set permissions
print_info "Setting permissions..."
chmod -R 755 storage
chmod -R 755 bootstrap/cache
print_success "Permissions set"

echo ""

# 5. Run migrations
print_info "Running database migrations..."
read -p "Apakah database sudah dikonfigurasi di .env? (y/n): " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]; then
    php artisan migrate --force
    print_success "Migrations completed"
else
    print_info "Skipping migrations. Jalankan manual: php artisan migrate --force"
fi

echo ""

# 6. Optimize
print_info "Optimizing application..."
php artisan config:cache
php artisan route:cache
php artisan view:cache
print_success "Application optimized"

echo ""
echo "=========================================="
print_success "Deployment selesai!"
echo "=========================================="
echo ""
echo "Langkah selanjutnya:"
echo "1. Pastikan .env sudah dikonfigurasi dengan benar"
echo "2. Pastikan public/index.php path sudah benar"
echo "3. Test aplikasi di browser"
echo ""
echo "Jika ada error, cek:"
echo "- storage/logs/laravel.log"
echo "- Error log di cPanel"
echo ""
