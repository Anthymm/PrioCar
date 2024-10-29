<script setup>
import { useRouter } from 'vue-router';
const router = useRouter()

defineProps({
  data: Object
})
</script>

<style scoped>
button {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>

<template>
  <button @click="() => {router.push('/item/' + data.id)}">
    <p>Märke: {{ data.brand }}</p>
    <p>Modell: {{ data.model }}</p>
    <p>År: {{ data.year }}</p>
  </button>
</template>
