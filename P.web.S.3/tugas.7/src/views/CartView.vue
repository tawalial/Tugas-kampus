<script setup>
import { useCartStore } from '../stores/cart'
const cart = useCartStore()
</script>
<template>
  <section>
    <h1>Keranjang Belanja</h1>
    <p v-if="cart.items.length === 0">Keranjang masih kosong.</p>
    <div v-for="item in cart.items" :key="item.id" class="cart-item">
      <span>{{ item.emoji }} {{ item.name }} ({{ item.qty }})</span>
      <span>Rp {{ (item.price * item.qty).toLocaleString('id-ID') }}</span>
      <button class="remove" @click="cart.remove(item.id)">Hapus</button>
    </div>
    <p v-if="cart.items.length">Total barang: {{ cart.totalItems }}</p>
  </section>
</template>
