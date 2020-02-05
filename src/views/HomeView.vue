<template>
  <div class="home-view">
    <home-header/>
    <home-content/>
  </div>
</template>

<script>
  import HomeHeader from '../components/home/HomeHeader';
  import HomeContent from '../components/home/HomeContent';
  export default {
    name: 'HomeView',
    components: { HomeContent, HomeHeader },
  }
</script>

<style lang="scss" scoped>

</style>
