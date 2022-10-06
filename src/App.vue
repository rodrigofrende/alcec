<script setup>
import Header from './components/common/Header.vue';
</script>

<template>
  <div class="">
    <Header/>
    <router-view></router-view>
  </div>
</template>

<style scoped>
#btn-back-to-top {
  position: fixed;
  bottom: 20px;
  right: 20px;
  display: none;
}
</style>
