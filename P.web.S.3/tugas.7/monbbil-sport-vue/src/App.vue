<script setup>
import { computed } from 'vue'
import { RouterLink, RouterView, useRoute } from 'vue-router'
import { useCartStore } from './stores/cart'

const cart = useCartStore()
const route = useRoute()
const isCartPage = computed(() => route.path === '/cart')
</script>

<template>
  <div class="site-shell">
    <header class="topbar">
      <RouterLink class="brand" to="/" aria-label="MONBBIL SPORT beranda">
        <span class="brand-mark">M</span>
        <span>MONBBIL <b>SPORT</b></span>
      </RouterLink>
      <nav class="navigation">
        <RouterLink to="/" :class="{ active: !isCartPage }">Beranda</RouterLink>
        <a href="/#katalog">Koleksi</a>
        <RouterLink to="/cart" class="cart-link" :class="{ active: isCartPage }">
          Keranjang <span class="cart-count">{{ cart.totalItems }}</span>
        </RouterLink>
      </nav>
    </header>

    <main><RouterView /></main>

    <footer class="footer">
      <span>© 2026 MONBBIL SPORT</span>
      <span>DRIVE YOUR DREAM · Praktikum Vue.js</span>
    </footer>
  </div>
</template>
