<script setup>
import { ref } from 'vue';
import { RouterLink, RouterView } from 'vue-router'
import json from './data.json'

const localJson = ref(json)
</script>

<template>
  <RouterView :data="localJson" />
</template>
