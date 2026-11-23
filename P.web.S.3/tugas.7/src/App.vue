<script setup>
import { useCartStore } from './stores/cart'
const cart = useCartStore()
</script>
<template>
  <header>
    <div class="brand">Toko Sederhana</div>
    <nav><RouterLink to="/">Beranda</RouterLink><RouterLink to="/cart">Keranjang ({{ cart.totalItems }})</RouterLink></nav>
  </header>
  <main><RouterView /></main>
</template>
