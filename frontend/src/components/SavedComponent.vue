<template>
  <button @click="() => { show = true }">SPARADE
    <div v-if="show" class="saved-container" @mouseleave="show = false">
      <ul>
        <li>
          DETTA ÄR EN LISTA
        </li>
      </ul>
    </div>
  </button>
</template>

<script setup>
import '../styles/saved.css'
import { ref } from 'vue';

const show = ref(false)
</script>
