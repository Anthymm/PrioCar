import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useItemStore = defineStore('itemStore', (item) => {
  const items = ref([])
  function addItem(item) {
    items.value.push(item)
  }
  return { items, addItem }
})
