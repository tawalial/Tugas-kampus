<script setup>
import { useCartStore } from '../stores/cart'
const props = defineProps({ product: Object })
const cart = useCartStore()
</script>
<template>
  <article class="product">
    <div class="emoji">{{ product.emoji }}</div>
    <h3>{{ product.name }}</h3>
    <p class="price">Rp {{ product.price.toLocaleString('id-ID') }}</p>
    <button @click="cart.add(product)">Beli</button>
  </article>
</template>
