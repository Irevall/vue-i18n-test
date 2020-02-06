<template>
    <div class="home-language-switch">
        <span @click="switchToEnglish">English</span>
        <span @click="switchToPolish">Polish</span>
    </div>
</template>

<script>
    export default {
        name: 'HomeLanguageSwitch',
        methods: {
            switchToEnglish() {
                this.$i18n.locale = 'en'
            },
            switchToPolish() {
                this.$i18n.locale = 'pl'
            }
        }
    }
</script>

<style lang="scss" scoped>
    .home-language-switch {

    }
</style>