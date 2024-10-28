<template>
  <div class="searchbar">
    <input type="search" @focus="state = true" @blur="state = false">
    <ul v-if="state == true">
      <li v-for="(data, key) in data" :key="key">
        <div class="search-result">Namn:{{ data.brand }} Modell:{{ data.model }} År: {{ data.year }}</div>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import '../styles/search.css'

const state = ref(false)

defineProps({
  data: Array,
})

</script>
