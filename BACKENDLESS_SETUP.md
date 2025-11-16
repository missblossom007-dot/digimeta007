# Setup Backendless untuk Blog DigiMeta007

## Langkah 1: Buat Akun Backendless

1. Kunjungi https://backendless.com/
2. Klik "Sign Up" dan buat akun gratis
3. Verifikasi email Anda

## Langkah 2: Buat Aplikasi Baru

1. Login ke Backendless Console
2. Klik "Create New App"
3. Nama aplikasi: `digimeta007-blog`
4. Pilih region terdekat
5. Klik "Create"

## Langkah 3: Dapatkan API Credentials

1. Di dashboard aplikasi, klik "Manage" → "App Settings"
2. Copy **APP_ID** dan **REST API Key**
3. Buka file `resources/js/config/backendless.js`
4. Ganti:
   ```javascript
   const APP_ID = 'YOUR_APP_ID'; // Paste APP_ID Anda
   const API_KEY = 'YOUR_API_KEY'; // Paste REST API Key Anda
   ```

## Langkah 4: Buat Data Table untuk Blog

1. Di Backendless Console, klik "Data"
2. Klik "Create New Table"
3. Nama table: `BlogPost`
4. Tambahkan columns:

| Column Name    | Type     | Required | Description                    |
|----------------|----------|----------|--------------------------------|
| title          | STRING   | Yes      | Judul artikel                  |
| content        | TEXT     | Yes      | Isi artikel (HTML supported)   |
| excerpt        | STRING   | No       | Ringkasan singkat              |
| featuredImage  | STRING   | No       | URL gambar utama               |
| category       | STRING   | No       | Kategori (SEO, Marketing, dll) |
| author         | STRING   | No       | Nama penulis                   |
| published      | BOOLEAN  | No       | Status publish                 |
| slug           | STRING   | No       | URL-friendly slug              |

5. Klik "Save Schema"

## Langkah 5: Tambahkan Sample Data

1. Klik tab "Data" di table BlogPost
2. Klik "Add New Object"
3. Isi data sample:

```json
{
  "title": "5 Strategi Digital Marketing untuk UMKM",
  "content": "Digital marketing adalah kunci sukses bisnis modern. Berikut 5 strategi yang bisa Anda terapkan...",
  "excerpt": "Pelajari 5 strategi digital marketing yang efektif untuk mengembangkan bisnis UMKM Anda",
  "featuredImage": "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
  "category": "Digital Marketing",
  "author": "DigiMeta007 Team",
  "published": true,
  "slug": "strategi-digital-marketing-umkm"
}
```

4. Klik "Save"
5. Tambahkan beberapa artikel lagi

## Langkah 6: Set Permissions (Optional)

1. Klik "Security" di table BlogPost
2. Set permissions:
   - **Find**: Allow for all users (public read)
   - **Create/Update/Delete**: Require authentication (admin only)

## Langkah 7: Test Integration

1. Build assets: `npm run build`
2. Jalankan server: `php artisan serve`
3. Buka: http://127.0.0.1:8000
4. Scroll ke section "Blog & Insights"
5. Artikel dari Backendless akan muncul

## Struktur Data BlogPost

```javascript
{
  objectId: "auto-generated",
  title: "Judul Artikel",
  content: "Isi lengkap artikel (bisa HTML)",
  excerpt: "Ringkasan singkat untuk preview",
  featuredImage: "https://url-gambar.com/image.jpg",
  category: "Digital Marketing",
  author: "Nama Penulis",
  published: true,
  slug: "url-friendly-slug",
  created: "auto-timestamp",
  updated: "auto-timestamp"
}
```

## Fitur Blog yang Sudah Dibuat

✅ Fetch posts dari Backendless
✅ Display posts dalam grid layout
✅ Featured image support
✅ Category badges
✅ Modal untuk full article
✅ Responsive design
✅ Loading state
✅ Smooth animations

## API Methods Available

```javascript
import { BlogService } from './config/backendless';

// Get all posts
const posts = await BlogService.getAllPosts();

// Get single post
const post = await BlogService.getPostById('objectId');

// Create post
const newPost = await BlogService.createPost({
  title: 'New Post',
  content: 'Content here...'
});

// Update post
await BlogService.updatePost('objectId', { title: 'Updated' });

// Delete post
await BlogService.deletePost('objectId');
```

## Tips

1. **Images**: Gunakan Unsplash atau upload ke Backendless File Storage
2. **HTML Content**: Backendless support HTML di TEXT field
3. **SEO**: Tambahkan meta description di excerpt
4. **Categories**: Buat consistent categories untuk filtering
5. **Slug**: Generate dari title untuk SEO-friendly URLs

## Troubleshooting

### Error: "Unable to connect to Backendless"
- Cek APP_ID dan API_KEY sudah benar
- Pastikan internet connection aktif
- Cek Backendless Console untuk service status

### Posts tidak muncul
- Cek table name: harus `BlogPost` (case-sensitive)
- Cek permissions: allow public read
- Cek browser console untuk error messages

### Images tidak muncul
- Pastikan URL valid dan accessible
- Gunakan HTTPS URLs
- Test URL di browser terlebih dahulu

## Next Steps

1. Buat admin panel untuk manage posts
2. Tambahkan search & filter
3. Implement pagination
4. Add comments system
5. SEO optimization dengan meta tags

## Resources

- Backendless Docs: https://backendless.com/docs/
- Backendless Console: https://develop.backendless.com/
- Support: https://support.backendless.com/
