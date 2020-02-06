<template>
  <div class="home-view">
    <home-header/>
    <home-content/>
    <home-language-switch/>
  </div>
</template>

<script>
  import HomeHeader from '../components/home/HomeHeader';
  import HomeContent from '../components/home/HomeContent';
  import HomeLanguageSwitch from "../components/home/HomeLanguageSwitch";
  export default {
    name: 'HomeView',
    components: {HomeLanguageSwitch, HomeContent, HomeHeader },
  }
</script>

<style lang="scss" scoped>

</style>
