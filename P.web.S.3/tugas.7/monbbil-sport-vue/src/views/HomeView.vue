<script setup>
import ProductCard from '../components/ProductCard.vue'
import { products } from '../data/products'
import { useCartStore } from '../stores/cart'
import { RouterLink } from 'vue-router'
const cart = useCartStore()
</script>

<template>
  <section class="hero">
    <div class="hero-shade"></div>
    <div class="hero-copy">
      <p class="eyebrow"><span></span> PREMIUM SPORT CAR SHOWROOM</p>
      <h1>BUKAN SEKADAR<br />KENDARAAN. <em>INI</em><br /><em>ADALAH PASSION.</em></h1>
      <p class="hero-description">Temukan koleksi mobil sport pilihan dengan performa luar biasa dan desain yang tak terlupakan.</p>
      <a href="#katalog" class="button button-primary">JELAJAHI KOLEKSI <span>↗</span></a>
      <div class="hero-note">PERFORMANCE <b>·</b> LUXURY <b>·</b> EXCLUSIVITY</div>
    </div>
    <div class="hero-caption"><strong>01 / 03</strong><span>THE ART OF SPEED</span></div>
  </section>

  <section class="intro-strip">
    <div><strong>01</strong><span>CURATED COLLECTION</span></div>
    <div><strong>02</strong><span>ICONIC PERFORMANCE</span></div>
    <div><strong>03</strong><span>EXCLUSIVE EXPERIENCE</span></div>
  </section>

  <section id="katalog" class="catalog-section">
    <div class="section-heading">
      <div><p class="eyebrow">THE COLLECTION</p><h2>Temukan <em>mobil impianmu.</em></h2><p class="section-subtitle">Pilihan istimewa untuk mereka yang selalu ingin lebih.</p></div>
      <span class="muted">{{ products.length }} UNIT TERSEDIA</span>
    </div>
    <div class="product-grid">
      <ProductCard v-for="product in products" :key="product.id" :product="product" @add="cart.addToCart" />
    </div>
    <p class="notice" v-if="cart.totalItems"><span>✓</span> {{ cart.totalItems }} mobil telah dipilih. <RouterLink to="/cart">Lihat keranjang →</RouterLink></p>
  </section>
  <section class="closing-banner"><p class="eyebrow">MONBBIL SPORT EXPERIENCE</p><h2>THE ROAD IS YOURS.</h2><p>Temukan performa. Rasakan perbedaannya.</p></section>
</template>
