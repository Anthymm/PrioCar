<script setup>
import { ref } from 'vue';
import { RouterView } from 'vue-router'

const data = ref([])

document.addEventListener("DOMContentLoaded", () => {
  fetch("/api/fetch?amount=all")
    .then((res) => res.json())
    .then((result) => {
      data.value = [...result.rows]
    })
})

</script>

<template>
  <RouterView :data="data" />
</template>
