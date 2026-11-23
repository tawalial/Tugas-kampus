<script setup>
import { RouterLink } from 'vue-router'
import { useCartStore } from '../stores/cart'
const cart = useCartStore()
const rupiah = (value) => `Rp${value.toLocaleString('id-ID')}`
</script>

<template>
  <section class="cart-page">
    <div class="section-heading"><div><p class="eyebrow">YOUR SELECTION</p><h1>Keranjang <em>pilihan.</em></h1><p class="section-subtitle">Mobil impian yang sudah kamu pilih.</p></div><RouterLink to="/" class="text-link">← Kembali ke koleksi</RouterLink></div>
    <div v-if="cart.items.length" class="cart-layout">
      <div class="cart-list">
        <article v-for="item in cart.items" :key="item.id" class="cart-item">
          <img class="cart-item-image" :src="item.image" :alt="item.name" />
          <div class="cart-item-info"><p class="product-category">{{ item.category }}</p><h3>{{ item.name }}</h3><strong>{{ rupiah(item.price) }}</strong><button class="remove-button" @click="cart.removeFromCart(item.id)">HAPUS PILIHAN</button></div>
          <div class="quantity-control"><button aria-label="Kurangi jumlah" @click="cart.decrease(item.id)">−</button><span>{{ item.quantity }}</span><button aria-label="Tambah jumlah" @click="cart.increase(item.id)">+</button></div>
        </article>
      </div>
      <aside class="summary-card"><p class="eyebrow">ORDER SUMMARY</p><h2>Ringkasan pilihan</h2><div class="summary-row"><span>Total unit</span><strong>{{ cart.totalItems }}</strong></div><div class="summary-row total-row"><span>Estimasi total</span><strong>{{ rupiah(cart.totalPrice) }}</strong></div><button class="button button-primary checkout-button" @click="alert('Terima kasih! Tim MONBBIL SPORT akan menghubungi Anda. (Demo praktikum)')">KONFIRMASI MINAT ↗</button><button class="clear-button" @click="cart.clearCart()">Kosongkan keranjang</button><p class="summary-note">* Harga merupakan simulasi untuk kebutuhan praktikum.</p></aside>
    </div>
    <div v-else class="empty-cart"><div class="empty-icon">🏎️</div><h2>Belum ada mobil pilihan.</h2><p>Jelajahi koleksi MONBBIL SPORT dan temukan mobil impianmu.</p><RouterLink to="/" class="button button-primary">LIHAT KOLEKSI ↗</RouterLink></div>
  </section>
</template>
