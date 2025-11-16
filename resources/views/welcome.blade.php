<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DigiMeta007 - Digital Innovation Company</title>
    <meta name="description" content="Licensed Digital Innovation Company. Digital Marketing, Full-Stack Web Development, Business Automation">
    @vite(['resources/css/app.css', 'resources/js/app.jsx'])
</head>
<body class="antialiased">
    {{-- Hero Section --}}
    <div id="hero-root"></div>

    {{-- Trust Badges --}}
    <div id="trust-root"></div>

    {{-- Services Section --}}
    <div id="services-root"></div>

    {{-- Blog Section --}}
    <div id="blog-root"></div>

    {{-- Laravel Products Section (Optional) --}}
    <section class="py-20 bg-gray-50">
        <div class="max-w-7xl mx-auto px-6">
            <div class="text-center mb-12">
                <h2 class="text-3xl font-bold text-gray-900">Product Management System</h2>
                <p class="mt-4 text-lg text-gray-600">Kelola produk Anda dengan sistem CRUD yang powerful</p>
                <a href="{{ route('products.index') }}" class="mt-6 inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                    Lihat Semua Produk
                </a>
            </div>
        </div>
    </section>

    {{-- CTA Section --}}
    <div id="cta-root"></div>

    {{-- Footer --}}
    <div id="footer-root"></div>
</body>
</html>
