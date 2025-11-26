<script setup lang="ts">
import HelloWorld from '../components/HelloWorld.vue'
import TheWelcome from '../components/TheWelcome.vue'
import ItemList from '../components/AllItems.vue';
import {ref} from 'vue';

//const token = localStorage.getItem('token');
const token = JSON.parse(localStorage.getItem("token")!);
</script>

<template>
  <header>
    <div class="wrapper">
    </div>
  </header>

  <div class="wrapper">
    <p>Token: {{ token.token }}</p>
      <ItemList/>
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
