import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('userStore', (user) => {
  const currentUser = ref("")
  fetch("/api/user?username=admin")
    .then((resp) => resp.json())
    .then((result) => {
      currentUser.value = result.username
    })
  return { currentUser }
})
