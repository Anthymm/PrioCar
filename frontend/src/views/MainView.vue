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
    <div style="display: flex; align-items: center;">
      <p style="font-size: 2vw;">Vår prio, är din prio på första bil.</p>
    </div>
    <div style="width: 36.5%; display: flex; justify-content: flex-end;">
    <Saved />
    <User />
  </div>
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
  margin-bottom: 32px;
}

.search {
  display: flex;
  justify-content: center;
  width: 100vw;
  margin-bottom: 64px;
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
  align-items: center;
  justify-content: center;
  gap: 16px;
}
</style>
