<template>
  <div class="searchbar">
    <input type="search" @focus="state = true" v-model="userInput" placeholder="Sök på ett märke">
    <ul v-if="state == true" @mouseleave=" state = false ">
      <li v-for="(data, key) in carsToDisplay">
        <button @click="() => {router.push('/item/' + data.id)}" class="search-result">{{ data.brand }} {{ data.model }} {{ data.year }}</button>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import '../styles/search.css'
import { useRouter } from 'vue-router';
const router = useRouter()

const props = defineProps({
  data: Array,
})

const state = ref(false)
const userInput = ref("")
const carsToDisplay = ref(props.data)

watch(userInput, (oldInput, newInput) => {
  let newArray = []
  for(let i = 0; i <= props.data.length - 1; i++) {
    if(userInput.value.toLowerCase() == props.data[i].brand.slice(0, userInput.value.length).toLowerCase()) {
      newArray.push(props.data[i])
    }
  }
  carsToDisplay.value = [...newArray]
})



</script>
