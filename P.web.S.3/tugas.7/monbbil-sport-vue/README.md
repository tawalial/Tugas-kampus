# MONBBIL SPORT — Praktikum Vue.js

Website katalog showroom mobil sport dengan Vue 3, Vite, Vue Router, dan Pinia.

## Fitur
- Katalog 3 mobil sport dengan foto, harga simulasi, dan spesifikasi.
- Komponen `ProductCard.vue` untuk setiap mobil.
- Vue Router: `/` (Beranda/Katalog) dan `/cart` (Keranjang).
- Pinia `useCartStore()` untuk tambah, kurangi, hapus, dan hitung total pilihan secara reaktif.
- Desain responsif untuk desktop dan ponsel.

## Menjalankan project
Pastikan Node.js sudah terpasang, lalu buka terminal di folder project dan jalankan:

```bash
npm install
npm run dev
```

Buka alamat lokal yang muncul di terminal (umumnya `http://localhost:5173`).

Untuk membuat build:

```bash
npm run build
```

> Catatan: harga mobil hanya data simulasi untuk tugas praktikum, bukan penawaran jual beli. Foto menggunakan URL Unsplash sehingga koneksi internet diperlukan agar gambar tampil.
