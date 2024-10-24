<script setup>
import Search from '@/components/Search.vue';
import Saved from '@/components/Saved.vue';

defineProps({
  data: Array
})
</script>

<template>
  <nav>
    <Saved />
  </nav>
  <section class="search">
    <Search :data="data" />
  </section>

</template>

<style scoped>
nav {
  display: flex;
  justify-content: flex-end;
}

.search {
  display: flex;
  justify-content: center;
  width: 100vw;
}
</style>
