<script setup>
import { onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router'
import { ref } from 'vue';
const route = useRoute()
const router = useRouter()

const data = ref({})

onMounted(() => {
  fetch("/api/fetch?amount=" + route.params.id)
  .then((resp) => resp.json())
  .then((result) => {
    data.value = result.rows[0]
  })
})
</script>

<template>
  <section>
  <h1>{{ data.brand }} {{ data.model }}</h1>
  <br>
  <h1>{{ data.year }}</h1>
</section>
</template>

<style scoped>
section{
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>
