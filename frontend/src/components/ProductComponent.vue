<script setup>
import { useRouter } from 'vue-router';
const router = useRouter()

defineProps({
  data: Object
})
</script>

<style scoped>
button {
  justify-self: center;
  overflow: hidden;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  border: 3px solid gray;
  border-radius: 16px;
}

button:hover{
  box-shadow: 1px 5px 5px;
  transition: 0.25s;
}

button > div{
  width: 100%;
  height: 35%;
  display: flex;
}

button > div > div {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 33%;
  height: 100%;
}

img{
  width: 100%;
  height: 65%;
  border-bottom: 3px solid gray;
}
</style>

<template>
  <button @click="() => {router.push('/item/' + data.id)}">
    <img v-if="data.image" :src="data.image" alt=""></img>
    <div>
    <div>
      <div>
        Märke:
      </div>
      <div>
        {{ data.brand }}
      </div>
    </div>
    <div>
      <div>
        Modell:
      </div>
      <div>
        {{ data.model }}
      </div>
    </div>
    <div>
      <div>
        År:
      </div>
      <div>
        {{ data.year  }}
      </div>
    </div>
  </div>
  </button>
</template>
