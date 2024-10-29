<script setup>
import Search from '../components/SearchComponent.vue';
import Saved from '../components/SavedComponent.vue';
import User from '../components/UserComponent.vue'
import Product from '../components/ProductComponent.vue'

defineProps({
  data: Array
})
</script>

<template>
  <nav>
    <Saved />
    <User />
  </nav>
  <section class="search">
    <Search :data="data"/>
  </section>
  <section class="grid-section">
    <div class="product-grid">
      <Product v-for="item in data" :data="item" />
    </div>
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

.grid-section {
  display: flex;
  justify-content: center;
  align-items: center;
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(5, 10vw);
  grid-template-rows: repeat(5, 10vw);
}
</style>
