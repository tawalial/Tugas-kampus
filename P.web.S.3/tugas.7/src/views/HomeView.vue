<script setup>
import ProductCard from '../components/ProductCard.vue'
const products = [
  { id: 1, name: 'Ferrari 488 GTB', price: 7500000000, emoji: '🏎️' },
  { id: 2, name: 'Lamborghini Huracan', price: 6500000000, emoji: '🏎️' },
  { id: 3, name: 'Porsche 911 Carrera', price: 4500000000, emoji: '🏎️' }
]
</script>
<template>
  <section>
    <h1>Katalog Mobil Sport</h1>
    <p>Pilih mobil sport impianmu.</p>
    <div class="products">
      <ProductCard v-for="product in products" :key="product.id" :product="product" />
    </div>
  </section>
</template>
