<script setup>
import { ref, computed } from 'vue'

const judul = ref('')
const kategori = ref('')
const sudahDibaca = ref(false)
const daftarBuku = ref([])

function tambahBuku() {
  if (judul.value.trim() === '' || kategori.value === '') {
    alert('Isi judul dan kategori buku terlebih dahulu!')
    return
  }

  daftarBuku.value.push({
    id: Date.now(),
    judul: judul.value.trim(),
    kategori: kategori.value,
    sudahDibaca: sudahDibaca.value
  })

  judul.value = ''
  kategori.value = ''
  sudahDibaca.value = false
}

const jumlahSelesai = computed(() => {
  return daftarBuku.value.filter(buku => buku.sudahDibaca).length
})
</script>

<template>
  <main class="container">
    <header class="header">
      <p class="label">TUGAS MANDIRI / LAB PRAKTIKUM</p>
      <h1>Buku Catatan</h1>
      <p class="subtitle">Catat buku yang ingin dan sudah kamu baca.</p>
    </header>

    <section class="card">
      <h2>Tambah Buku</h2>

      <form @submit.prevent="tambahBuku">
        <label for="judul">Judul Buku</label>
        <input
          id="judul"
          v-model="judul"
          type="text"
          placeholder="Masukkan judul buku"
        >

        <label for="kategori">Kategori Buku</label>
        <select id="kategori" v-model="kategori">
          <option value="">Pilih kategori</option>
          <option value="Teknologi">Teknologi</option>
          <option value="Pendidikan">Pendidikan</option>
          <option value="Novel">Novel</option>
          <option value="Sejarah">Sejarah</option>
        </select>

        <label class="check">
          <input type="checkbox" v-model="sudahDibaca">
          Sudah selesai dibaca
        </label>

        <button type="submit">Tambah Buku</button>
      </form>
    </section>

    <section class="list-section">
      <div class="list-header">
        <div>
          <h2>Daftar Buku</h2>
          <p class="subtitle">Buku yang sudah dicatat.</p>
        </div>
        <div class="counter">
          <strong>{{ jumlahSelesai }}</strong>
          <span>Selesai dibaca</span>
        </div>
      </div>

      <p v-if="daftarBuku.length === 0" class="empty">
        Belum ada buku. Silakan tambahkan buku.
      </p>

      <ul v-else class="book-list">
        <li v-for="(buku, index) in daftarBuku" :key="buku.id" class="book">
          <div>
            <h3>{{ index + 1 }}. {{ buku.judul }}</h3>
            <p>{{ buku.kategori }}</p>
          </div>
          <span :class="buku.sudahDibaca ? 'status done' : 'status pending'">
            {{ buku.sudahDibaca ? 'Sudah dibaca' : 'Belum dibaca' }}
          </span>
        </li>
      </ul>
    </section>
  </main>
</template>
