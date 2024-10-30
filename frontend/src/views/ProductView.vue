<script setup>
import { useItemStore } from '@/stores/storedItems';
import { onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router'
import { ref } from 'vue';
const route = useRoute()
const router = useRouter()

const items = useItemStore()
const data = ref({})

onMounted(() => {
  fetch("/api/fetch?amount=" + route.params.id)
  .then((resp) => resp.json())
  .then((result) => {
    data.value = result.rows[0]
  })
})
</script>

<template>
  <section>
  <div class="car-other">
    <img :src="data.image" alt="">
    <button @click="() => {items.addItem(data)}" class="saveItemButton">Spara</button>
  </div>
  <div class="car-info">
    <p>{{ data.brand }} {{ data.model }}</p>
    <p>{{ data.year }}</p>
  </div>
  <div class="car-price">
    <p>25000:-</p>
  </div>
  <div class="car-desc">
    <p>Varför tycker vi att detta är en bra första bil?</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque delectus autem placeat praesentium ea architecto nulla quasi quaerat doloribus sapiente quibusdam nisi numquam velit assumenda iure, facilis odit, alias earum?</p>
  </div>
</section>
</template>

<style scoped>
section{
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
}
.car-other{
  position: relative;
  display: flex;
  flex-direction: column;
  width: 40%;
  height: 40%;
  border: 3px solid gray;
  border-bottom: none;
  border-top: none;
}

.car-other > img {
  width: 100%;
  height: 100%;
}

.saveItemButton {
  position: absolute;
  align-self: flex-end;
  border: 2px solid gray;
  width: 100px;
  height: 48px;
  z-index: 10;
  border-bottom-left-radius: 4px;
  border-top: none;
  border-right: none;
  top: 100%;
}

.saveItemButton:hover{
  background-color: lightgray;
}

.car-info{
  border: 3px solid gray;
  display: flex;
  gap: 16px ;
  width: 40%;
  font-size: 32px;
  font-weight: 500;
  border-bottom: none;
  border-top: none;
}

.car-price{
  border: 3px solid gray;
  display: flex;
  gap: 16px ;
  width: 40%;
  font-size: 32px;
  font-weight: 500;
  border-top: none;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
}

.car-desc{
  border: 3px solid gray;
  border-radius: 4px;
  margin-top: 32px;
  display: flex;
  width: 40%;
}

.car-desc p:first-child {
  width: 25%;
  font-size: 32px;
  font-weight: 500;
}

.car-desc p:last-child {
  width: 75%;
  font-size: 24px;
}
</style>
