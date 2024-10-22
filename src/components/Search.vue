<template>
  <input type="search" class="searchbar" @focus="state = true" @blur="state = false">
  <ul v-if="state == true">
    <li v-for="data in fakeData">
      <div class="search-result">Namn:{{ data.name }} Pris:{{ data.price }}sek</div>
    </li>
  </ul>
  </input>
</template>

<style scoped></style>

<script setup>
import { watch, ref } from 'vue';
import '../styles/search.css'

const state = ref(false)

defineProps({
  data: Array,
})

const fakeData = [
  { name: "Car1", price: 100 }
]

</script>
