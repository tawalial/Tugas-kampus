// tugas-es6.mjs

const transaksi = [
  { id: 1, barang: "Beras", harga: 15000, qty: 2, kategori: "Makanan" },
  { id: 2, barang: "Minyak Goreng", harga: 18000, qty: 1, kategori: "Makanan" },
  { id: 3, barang: "Sabun", harga: 5000, qty: 3, kategori: "Kebutuhan Rumah" },
  { id: 4, barang: "Gula", harga: 14000, qty: 2, kategori: "Makanan" },
  { id: 5, barang: "Buku Tulis", harga: 4000, qty: 5, kategori: "Alat Tulis" },
  { id: 6, barang: "Kopi", harga: 12000, qty: 2, kategori: "Makanan" }
];

// Filter kategori Makanan
const transaksiMakanan = transaksi.filter(
  ({ kategori }) => kategori === "Makanan"
);

// Map untuk menghitung subtotal
const rincianSubtotal = transaksi.map(
  ({ barang, harga, qty }) => ({
    barang,
    harga,
    qty,
    subtotal: harga * qty
  })
);

// Reduce untuk menghitung total keseluruhan
const totalKeseluruhan = rincianSubtotal.reduce(
  (total, { subtotal }) => total + subtotal,
  0
);

// Reduce untuk menghitung total makanan
const totalMakanan = transaksiMakanan.reduce(
  (total, { harga, qty }) => total + harga * qty,
  0
);

// Menampilkan hasil
console.log("=== SEMUA TRANSAKSI ===");
console.log(rincianSubtotal);

console.log("\n=== TRANSAKSI MAKANAN ===");
console.log(transaksiMakanan);

console.log(
  "\nTotal seluruh transaksi: Rp" +
  totalKeseluruhan.toLocaleString("id-ID")
);

console.log(
  "Total kategori makanan: Rp" +
  totalMakanan.toLocaleString("id-ID")
);