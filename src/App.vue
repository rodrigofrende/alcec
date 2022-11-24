<script>
import Header from './components/common/Header.vue';

export default {
  components: {
    Header
  },
  data () {
    return {
      viewKey: 0
    }
  },
  methods: {
    updateKey () {
      this.viewKey += 1
    }
  }
}
</script>

<template>
  <div class="">
    <Header @updateKey="updateKey"/>
    <router-view :key="viewKey"></router-view>
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

