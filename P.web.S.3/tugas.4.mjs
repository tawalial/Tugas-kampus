// tugas-es6.mjs

const transaksi = [
  { id: 1, barang: "kaos boxy", harga: 90000, qty: 2, kategori: "kaos" },
  { id: 2, barang: "jeans pants", harga: 120000, qty: 1, kategori: "celana" },
  { id: 3, barang: "jersey", harga: 100000, qty: 3, kategori: "Kaos" },
  { id: 4, barang: "cargo", harga: 130000, qty: 2, kategori: "celana" },
  { id: 5, barang: "jaket tracktop", harga: 200000, qty: 5, kategori: "jaket" },
  { id: 6, barang: "kaos oversize", harga: 80000, qty: 2, kategori: "kaos" }
];

// Filter kategori Makanan
const transaksifasion = transaksi.filter(
  ({ kategori }) => kategori === "kaos"
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
const totalfasion = transaksifasion.reduce(
  (total, { harga, qty }) => total + harga * qty,
  0
);

// Menampilkan hasil
console.log("=== SEMUA TRANSAKSI ===");
console.log(rincianSubtotal);

console.log("\n=== TRANSAKSI fasion ===");
console.log(transaksifasion);

console.log(
  "\nTotal seluruh transaksi: Rp" +
  totalKeseluruhan.toLocaleString("id-ID")
);

console.log(
  "Total kategori makanan: Rp" +
  totalfasion.toLocaleString("id-ID")
);
