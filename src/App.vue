<template>
  <div class="app">
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'square-panel',
  }
</script>

<style lang="scss" scoped>
  @import '@/assets/style/global.scss';
  .app {
    display: grid;
    min-height: 100vh;
  }
</style>
