import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({ items: [] }),
  getters: {
    totalItems: (state) => state.items.reduce((total, item) => total + item.qty, 0)
  },
  actions: {
    add(product) {
      const found = this.items.find(item => item.id === product.id)
      if (found) found.qty++
      else this.items.push({ ...product, qty: 1 })
    },
    remove(id) {
      this.items = this.items.filter(item => item.id !== id)
    }
  }
})
