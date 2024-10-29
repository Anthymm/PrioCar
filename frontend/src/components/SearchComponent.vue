<template>
  <div class="searchbar">
    <input type="search" @focus="state = true">
    <ul v-if="state == true" @mouseleave=" state = false ">
      <li v-for="(data, key) in data" :key="key">
        <button @click="() => {router.push('/item/' + data.id)}" class="search-result">Namn:{{ data.brand }} Modell:{{ data.model }} År: {{ data.year }}</button>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import '../styles/search.css'
import { useRouter } from 'vue-router';
const router = useRouter()

const state = ref(false)

defineProps({
  data: Array,
})

</script>
