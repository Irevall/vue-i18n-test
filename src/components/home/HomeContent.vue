<template>
  <div class="home-content">
    {{ $t('HomeContent.welcome_home') }}
  </div>
</template>

<script>
  export default {
    name: 'HomeContent',
  }
</script>

<style lang="scss" scoped>

</style>

<i18n>
  en:
    HomeContent:
      welcome_home: Welcome home!
</i18n>