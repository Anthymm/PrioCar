<template>
  <button @click="() => { show = true }" class="userButton">
    <div v-if="loggedIn" >{{ user.currentUser }}
      <div v-if="show && loggedIn" class="saved-container" @mouseleave="show = false">
        <ul>
          <li>
            PROFIL
          </li>
          <li>
            LOGGA UT
          </li>
        </ul>
      </div>
    </div>
    <div v-else>LOG IN/REGISTER
      <div v-if="show" class="saved-container" @mouseleave="show = false">
        <ul v-if="!register">
          <li>
            <p>Username:</p>
            <input type="text" name="" id="">
          </li>
          <li>
            <p>Password:</p>
            <input type="password" name="" id="">
          </li>
          <li><button></button></li>
        </ul>
        <ul v-else>
          <li>
            <p>Username:</p>
            <input type="text" name="" id="">
          </li>
          <li>
            <p>Password:</p>
            <input type="password" name="" id="">
          </li>
          <li><button></button></li>
        </ul>
      </div>
    </div>
  </button>
</template>

<script setup>
import '../styles/user.css'
import { ref } from 'vue';
import { useUserStore } from '@/stores/user'

const user = useUserStore()
const loggedIn = ref(true)
const show = ref(false)
</script>
