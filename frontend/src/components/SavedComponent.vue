<template>
  <button @click="() => { show = true }" class="savedButton">SPARADE
    <div v-if="show" class="saved-container" @mouseleave="show = false">
      <ul>
        <button v-for="item in items.items" @click="router.push('/item/' + item.id)" class="savedItem" v-if="items.items.length != 0">
          {{ item.brand }} {{ item.model }} {{ item.year }}
        </button>
        <button v-else class="savedItem">Inget Sparat Ännu</button>
      </ul>
    </div>
  </button>
</template>

<script setup>
import { useItemStore } from '@/stores/storedItems'
import '../styles/saved.css'
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter()
const items = useItemStore()
const show = ref(false)
</script>
