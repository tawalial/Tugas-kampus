import { computed, ref } from 'vue'
import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', () => {
  // Daftar produk di keranjang. Data ini reaktif karena menggunakan ref.
  const items = ref([])

  const totalItems = computed(() =>
    items.value.reduce((total, item) => total + item.quantity, 0),
  )

  const totalPrice = computed(() =>
    items.value.reduce((total, item) => total + item.price * item.quantity, 0),
  )

  function addToCart(product) {
    const existingItem = items.value.find((item) => item.id === product.id)

    if (existingItem) {
      existingItem.quantity += 1
    } else {
      items.value.push({ ...product, quantity: 1 })
    }
  }

  function increase(id) {
    const item = items.value.find((product) => product.id === id)
    if (item) item.quantity += 1
  }

  function decrease(id) {
    const item = items.value.find((product) => product.id === id)
    if (!item) return

    if (item.quantity > 1) {
      item.quantity -= 1
    } else {
      removeFromCart(id)
    }
  }

  function removeFromCart(id) {
    items.value = items.value.filter((item) => item.id !== id)
  }

  function clearCart() {
    items.value = []
  }

  return {
    items,
    totalItems,
    totalPrice,
    addToCart,
    increase,
    decrease,
    removeFromCart,
    clearCart,
  }
})