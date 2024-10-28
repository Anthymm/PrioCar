<script setup>
defineProps({
  data: Object
})
</script>

<style scoped>
div {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>

<template>
  <div>
    <p>Märke: {{ data.brand }}</p>
    <p>Modell: {{ data.model }}</p>
    <p>År: {{ data.year }}</p>
  </div>
</template>
