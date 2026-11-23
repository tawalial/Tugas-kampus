<script setup>
defineProps({ product: { type: Object, required: true } })
defineEmits(['add'])
const rupiah = (value) => `Rp${value.toLocaleString('id-ID')}`
</script>

<template>
  <article class="product-card">
    <div class="product-art">
      <img :src="product.image" :alt="product.name" loading="lazy" />
      <span class="product-label">{{ product.badge }}</span>
      <span class="image-index">0{{ product.id }}</span>
    </div>
    <div class="product-info">
      <p class="product-category">{{ product.category }}</p>
      <h3>{{ product.name }}</h3>
      <p class="product-description">{{ product.description }}</p>
      <div class="spec-row">
        <span>◷ {{ product.year }}</span><span>⚡ {{ product.power }}</span><span>⚙ {{ product.transmission }}</span>
      </div>
      <div class="product-bottom">
        <div><small>HARGA MULAI</small><strong class="price">{{ rupiah(product.price) }}</strong></div>
        <button class="button button-primary button-small" @click="$emit('add', product)">+ Pilih mobil</button>
      </div>
    </div>
  </article>
</template>
