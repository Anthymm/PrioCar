import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useItemStore = defineStore('itemStore', (item) => {
  const items = ref([])
  fetch("/api/user?username=admin")
    .then((resp) => resp.json())
    .then((result) => {
      currentUser.value = result.username
    })
  return { currentUser }
})
