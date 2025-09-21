# Heritage Batik Website

Website modern untuk penjualan batik ke pasar internasional dengan struktur file yang terorganisir dan mudah di-maintain.

## 📁 Struktur File

```
website/
├── index.html              # File HTML utama
├── styles/
│   └── main.css           # File CSS utama
├── js/
│   ├── config.js          # Konfigurasi website (produk, kontak, dll)
│   └── app.js             # JavaScript utama
├── images/
│   ├── products/          # Folder gambar produk
│   │   ├── sarong.jpg
│   │   ├── shirt.jpg
│   │   ├── dress.jpg
│   │   ├── scarf.jpg
│   │   ├── tablecloth.jpg
│   │   └── wallart.jpg
│   ├── hero-batik.jpg     # Gambar background hero
│   ├── about-batik-workshop.jpg  # Gambar section about
│   └── logo.png           # Logo perusahaan
└── README.md              # Dokumentasi ini
```

## 🚀 Cara Install dan Setup

### 1. Download/Clone File
- Simpan semua file sesuai struktur folder di atas
- Pastikan semua path file sesuai

### 2. Kustomisasi Konten
Edit file `js/config.js` untuk mengubah:

#### Informasi Perusahaan:
```javascript
company: {
    name: "Heritage Batik",
    email: "heritage.batik@email.com", 
    phone: "+62 812-3456-7890",
    address: "Yogyakarta, Indonesia"
}
```

#### Tambah/Edit Produk:
```javascript
products: [
    {
        id: 1,
        name: {
            en: "Product Name English",
            id: "Nama Produk Indonesia"
        },
        description: {
            en: "Product description in English",
            id: "Deskripsi produk dalam Bahasa Indonesia"
        },
        price: "$45",
        image: "images/products/product-image.jpg"
    }
    // Tambah produk lain...
]
```

### 3. Upload Gambar
Siapkan gambar dan upload ke folder `images/`:
- **Produk**: Ukuran 400x300px, format JPG/PNG
- **Hero**: Ukuran 1920x1080px untuk background utama
- **About**: Ukuran 800x600px untuk section tentang
- **Logo**: Format PNG dengan background transparan

### 4. Kustomisasi Warna dan Font
Edit file `styles/main.css` di bagian `:root`:
```css
:root {
    --primary-color: #8B4513;    /* Warna utama */
    --secondary-color: #D2691E;  /* Warna kedua */
    --accent-color: #FFD700;     /* Warna aksen */
    --font-heading: 'Georgia';    /* Font judul */
    --font-body: 'Arial';        /* Font teks */
}
```

## 🛠️ Fitur Website

### ✅ Fitur Utama
- [x] **Responsive Design** - Tampil sempurna di semua device
- [x] **Multi-bahasa** - Indonesia dan English (mudah ditambah bahasa lain)
- [x] **Contact Form** - Terintegrasi dengan WhatsApp
- [x] **Product Showcase** - Grid produk dengan detail
- [x] **Smooth Animations** - Animasi yang halus dan modern
- [x] **SEO Friendly** - Struktur HTML yang baik untuk SEO

### 🔧 Fitur Teknis
- [x] **Modular Structure** - File terpisah untuk mudah maintenance
- [x] **Configuration-based** - Semua konten diatur di config.js
- [x] **Image Optimization** - Lazy loading dan error handling
- [x] **Cross-browser Compatible** - Support browser modern
- [x] **Mobile First** - Didesain untuk mobile terlebih dahulu

## 📝 Cara Mengedit Konten

### Mengubah Teks
1. Buka `js/config.js`
2. Edit bagian `translations` untuk bahasa Indonesia dan English
3. Save file dan refresh browser

### Menambah Produk Baru
1. Buka `js/config.js`
2. Tambah object produk baru di array `products`:
```javascript
{
    id: 7, // ID unik
    name: {
        en: "New Product Name",
        id: "Nama Produk Baru"
    },
    description: {
        en: "Product description",
        id: "Deskripsi produk"
    },
    price: "$99",
    image: "images/products/new-product.jpg"
}
```

### Mengubah Warna Tema
1. Buka `styles/main.css`
2. Edit variabel di bagian `:root`
3. Gunakan color picker online untuk memilih warna

### Menambah Halaman Baru
1. Buat file HTML baru (misal: `gallery.html`)
2. Copy struktur dari `index.html`
3. Tambah link di navigation menu

## 🌐 Cara Deploy/Upload

### Option 1: Hosting Gratis
- **Netlify**: Drag & drop folder website ke netlify.com
- **GitHub Pages**: Upload ke repository GitHub dan aktifkan Pages
- **Vercel**: Connect dengan GitHub untuk auto-deploy

### Option 2: Hosting Berbayar
- Upload semua file ke cPanel/hosting panel
- Pastikan `index.html` ada di root directory
- Set permission file jika diperlukan

## 📱 Testing Website

### Desktop Testing
1. Buka `index.html` di browser
2. Test semua link dan fitur
3. Coba ganti bahasa
4. Test contact form

### Mobile Testing
1. Buka browser DevTools (F12)
2. Switch ke mobile view
3. Test responsiveness
4. Coba semua fitur di mobile

### Cross-browser Testing
Test di browser utama:
- ✅ Chrome
- ✅ Firefox  
- ✅ Safari
- ✅ Edge

## 🔍 SEO Optimization

Website sudah dioptimasi untuk SEO:
- ✅ Semantic HTML structure
- ✅ Meta tags yang proper
- ✅ Alt text untuk images
- ✅ Clean URL structure
- ✅ Fast loading time

### Tips SEO Tambahan:
1. **Tambah meta description** di setiap halaman
2. **Gunakan Google Analytics** untuk tracking
3. **Submit sitemap** ke Google Search Console
4. **Optimasi gambar** - compress ukuran file
5. **Gunakan HTTPS** untuk keamanan

## 🚨 Troubleshooting

### Masalah Umum:

#### Gambar Tidak Muncul
- ✅ Pastikan path gambar benar
- ✅ Check case-sensitive filename
- ✅ Pastikan file gambar sudah diupload

#### JavaScript Tidak Jalan
- ✅ Check console browser (F12)
- ✅ Pastikan semua file JS sudah dilink
- ✅ Check syntax error di config.js

#### WhatsApp Tidak Terbuka
- ✅ Pastikan nomor phone di config.js benar
- ✅ Format nomor: +62xxxxxxxxxx (tanpa spasi)
- ✅ Test di mobile browser

#### Website Lambat
- ✅ Compress gambar (gunakan tools online)
- ✅ Gunakan format WebP untuk gambar
- ✅ Enable browser caching

## 📞 Support

Jika ada pertanyaan atau butuh bantuan:

1. **Check dokumentasi** ini terlebih dahulu
2. **Test di browser** yang berbeda
3. **Check console error** di DevTools (F12)

## 🔄 Update dan Maintenance

### Update Rutin:
- **Produk baru**: Edit `js/config.js`
- **Kontak info**: Update di `js/config.js`
- **Gambar**: Replace di folder `images/`
- **Warna tema**: Edit `styles/main.css`

### Backup:
Selalu backup file sebelum edit:
- Copy folder website
- Simpan versi lama
- Test perubahan sebelum upload

## 📈 Future Enhancements

Fitur yang bisa ditambahkan:
- 🛒 Shopping cart functionality
- 💳 Payment gateway integration
- 📧 Email newsletter
- 🔍 Product search
- ⭐ Customer reviews
- 📊 Analytics dashboard
- 🎨 Theme switcher
- 🌍 More languages

---

**Happy selling your beautiful batik! 🎨**