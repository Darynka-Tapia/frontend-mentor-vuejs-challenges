<script setup>
  import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div>
    <router-link to="/">Home</router-link>
    <router-link to="/rating">Interactive rating component</router-link>
  </div>
</template>

<style scoped>
#app div {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 15px;
  padding: 20px 0;
}
</style>
