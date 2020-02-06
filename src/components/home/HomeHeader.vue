<template>
  <div class="home-header">
    <span>{{ $t('HomeHeader.header') }}</span>
    <span>{{ $t('common.home') }}</span>
    <span>{{ $t('common.blog') }}</span>
  </div>
</template>

<script>
  export default {
    name: 'HomeHeader',
  }
</script>

<style lang="scss" scoped>

</style>

<i18n>
  en:
    HomeHeader:
      header: placeholder header
</i18n>