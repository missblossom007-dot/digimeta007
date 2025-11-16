# Postman Setup untuk DigiMeta007 API

## Import Collection ke Postman

### Cara 1: Import File JSON
1. Buka Postman
2. Klik "Import" di pojok kiri atas
3. Pilih file `postman_collection.json`
4. Klik "Import"

### Cara 2: Import dari URL (jika sudah di GitHub)
1. Buka Postman
2. Klik "Import"
3. Pilih tab "Link"
4. Paste URL: `https://raw.githubusercontent.com/missblossom007-dot/digimeta007/main/postman_collection.json`
5. Klik "Continue" → "Import"

## Setup Environment Variables

1. Di Postman, klik "Environments" (⚙️ icon)
2. Klik "Create Environment"
3. Nama: `DigiMeta007 Local`
4. Tambahkan variables:

| Variable   | Initial Value              | Current Value              |
|------------|----------------------------|----------------------------|
| base_url   | http://127.0.0.1:8000/api  | http://127.0.0.1:8000/api  |

5. Klik "Save"
6. Select environment "DigiMeta007 Local" di dropdown

## API Endpoints

### Blog API

#### 1. Get All Posts
```
GET {{base_url}}/blog?pageSize=10&offset=0
```

**Query Parameters:**
- `pageSize` (optional): Number of posts per page (default: 10)
- `offset` (optional): Offset for pagination (default: 0)

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "objectId": "xxx",
      "title": "Post Title",
      "content": "Post content...",
      "excerpt": "Short description",
      "featuredImage": "https://...",
      "category": "Digital Marketing",
      "author": "Author Name",
      "published": true,
      "created": 1234567890,
      "updated": 1234567890
    }
  ]
}
```

#### 2. Get Single Post
```
GET {{base_url}}/blog/{objectId}
```

#### 3. Create Post
```
POST {{base_url}}/blog
Content-Type: application/json

{
  "title": "Post Title",
  "content": "Full content here...",
  "excerpt": "Short description",
  "featuredImage": "https://image-url.com/image.jpg",
  "category": "Digital Marketing",
  "author": "Author Name",
  "published": true,
  "slug": "post-title-slug"
}
```

**Required Fields:**
- `title` (string, max 255)
- `content` (text)

**Optional Fields:**
- `excerpt` (string)
- `featuredImage` (URL)
- `category` (string)
- `author` (string)
- `published` (boolean)
- `slug` (string)

#### 4. Update Post
```
PUT {{base_url}}/blog/{objectId}
Content-Type: application/json

{
  "title": "Updated Title",
  "published": true
}
```

#### 5. Delete Post
```
DELETE {{base_url}}/blog/{objectId}
```

#### 6. Search Posts
```
GET {{base_url}}/blog/search?q=digital marketing
```

**Query Parameters:**
- `q`: Search query (searches in title and content)

#### 7. Get Posts by Category
```
GET {{base_url}}/blog/category/Digital Marketing
```

### Products API

#### 1. Get All Products
```
GET {{base_url}}/products
```

#### 2. Get Single Product
```
GET {{base_url}}/products/{id}
```

#### 3. Create Product
```
POST {{base_url}}/products
Content-Type: application/json

{
  "name": "Product Name",
  "description": "Product description",
  "price": 99.99,
  "stock": 100
}
```

#### 4. Update Product
```
PUT {{base_url}}/products/{id}
Content-Type: application/json

{
  "name": "Updated Name",
  "price": 149.99
}
```

#### 5. Delete Product
```
DELETE {{base_url}}/products/{id}
```

## Testing Workflow

### 1. Setup Backendless
- Pastikan sudah setup Backendless (lihat `BACKENDLESS_SETUP.md`)
- Update `.env` dengan APP_ID dan API_KEY

### 2. Start Laravel Server
```bash
php artisan serve
```

### 3. Test di Postman

**Test Create Post:**
1. Select "Blog" → "Create Post"
2. Klik "Send"
3. Copy `objectId` dari response

**Test Get Post:**
1. Select "Blog" → "Get Single Post"
2. Replace `:id` dengan objectId yang di-copy
3. Klik "Send"

**Test Update Post:**
1. Select "Blog" → "Update Post"
2. Replace `:id` dengan objectId
3. Edit body JSON
4. Klik "Send"

**Test Search:**
1. Select "Blog" → "Search Posts"
2. Edit query parameter `q`
3. Klik "Send"

## Environment Setup untuk Production

Buat environment baru untuk production:

| Variable   | Value                              |
|------------|------------------------------------|
| base_url   | https://digimeta007.com/api        |

## CORS Configuration

Jika test dari Postman berhasil tapi dari frontend gagal, tambahkan CORS:

1. Install Laravel CORS:
```bash
composer require fruitcake/laravel-cors
```

2. Publish config:
```bash
php artisan vendor:publish --tag="cors"
```

3. Edit `config/cors.php`:
```php
'paths' => ['api/*'],
'allowed_origins' => ['*'],
'allowed_methods' => ['*'],
```

## Error Handling

### 500 Internal Server Error
- Cek `.env` file: `BACKENDLESS_APP_ID` dan `BACKENDLESS_API_KEY`
- Cek Backendless Console: table `BlogPost` exists
- Cek Laravel logs: `storage/logs/laravel.log`

### 404 Not Found
- Pastikan route sudah terdaftar: `php artisan route:list`
- Cek URL: harus `/api/blog` bukan `/blog`

### 422 Validation Error
- Cek required fields
- Cek data types (string, number, boolean)
- Cek URL format untuk `featuredImage`

## Tips

1. **Save Responses**: Klik "Save Response" untuk reference
2. **Use Variables**: Gunakan `{{objectId}}` untuk dynamic values
3. **Pre-request Scripts**: Automate token generation
4. **Tests**: Add assertions untuk automated testing
5. **Documentation**: Generate API docs dari collection

## Export Collection

Untuk share dengan team:
1. Klik "..." di collection
2. Pilih "Export"
3. Pilih "Collection v2.1"
4. Save file JSON

## Next Steps

1. Add authentication (Laravel Sanctum)
2. Add rate limiting
3. Add API versioning
4. Add webhooks
5. Generate API documentation

## Resources

- Postman Docs: https://learning.postman.com/
- Laravel API: https://laravel.com/docs/routing#api-routes
- Backendless REST API: https://backendless.com/docs/rest/
