# DigiMeta007 - Laravel Product CRUD

Laravel application dengan fitur CRUD Product management.

## Features

- ✅ Product Management (Create, Read, Update, Delete)
- ✅ Clean UI dengan styling modern
- ✅ Form validation
- ✅ Database migration
- ✅ RESTful routing

## Tech Stack

- Laravel 11
- PHP 8.3
- MySQL
- Blade Templates

## Installation

1. Clone repository
```bash
git clone https://github.com/YOUR_USERNAME/digimeta007.git
cd digimeta007
```

2. Install dependencies
```bash
composer install
```

3. Copy environment file
```bash
copy .env.example .env
```

4. Generate application key
```bash
php artisan key:generate
```

5. Configure database di `.env`
```
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=digimeta007
DB_USERNAME=root
DB_PASSWORD=
```

6. Run migration
```bash
php artisan migrate
```

7. Start development server
```bash
php artisan serve
```

8. Akses aplikasi di browser
```
http://127.0.0.1:8000
http://127.0.0.1:8000/products
```

## Routes

- `GET /` - Homepage
- `GET /products` - List all products
- `GET /products/create` - Create product form
- `POST /products` - Store new product
- `GET /products/{id}` - Show product detail
- `GET /products/{id}/edit` - Edit product form
- `PUT /products/{id}` - Update product
- `DELETE /products/{id}` - Delete product

## Database Schema

### Products Table
- id (bigint, primary key)
- name (string)
- description (text, nullable)
- price (decimal 10,2)
- stock (integer)
- created_at (timestamp)
- updated_at (timestamp)

## License

Open-sourced software licensed under the MIT license.
