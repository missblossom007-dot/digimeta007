# Setup React + Laravel Integration

## Yang Sudah Dibuat:
✅ Tailwind CSS config
✅ Vite config dengan React plugin
✅ React Hero component
✅ Laravel Blade template dengan React integration
✅ Package.json dengan dependencies

## Langkah Install:

### 1. Install Node.js Dependencies
```bash
npm install
```

### 2. Build Assets (Production)
```bash
npm run build
```

### 3. Atau Jalankan Dev Server (Development)
```bash
npm run dev
```

Buka terminal baru dan jalankan Laravel:
```bash
php artisan serve
```

### 4. Akses Aplikasi
- Homepage dengan React Hero: http://127.0.0.1:8000
- Products CRUD: http://127.0.0.1:8000/products

## Struktur File:

```
resources/
├── css/
│   └── app.css (Tailwind CSS)
├── js/
│   ├── app.jsx (Main React entry)
│   ├── bootstrap.js
│   └── components/
│       └── Hero.jsx (React Hero Component)
└── views/
    ├── welcome.blade.php (Homepage dengan React)
    └── product/ (Laravel Blade views)
```

## Development Workflow:

1. **Terminal 1:** `npm run dev` (Vite dev server)
2. **Terminal 2:** `php artisan serve` (Laravel server)
3. Edit React components di `resources/js/components/`
4. Edit Blade templates di `resources/views/`

## Production Build:

```bash
npm run build
php artisan config:cache
php artisan route:cache
php artisan view:cache
```

## Troubleshooting:

### Error: npm not found
Install Node.js dari: https://nodejs.org/

### Error: Vite manifest not found
Jalankan: `npm run build` atau `npm run dev`

### React component tidak muncul
1. Cek console browser untuk error
2. Pastikan `npm run dev` atau `npm run build` sudah dijalankan
3. Clear cache: `php artisan cache:clear`
