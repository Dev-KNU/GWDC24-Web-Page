<script setup lang="ts">
import Python from '@/assets/image/python_logo.svg'
import Android from '@/assets/image/android_logo.svg'
import Npm from '@/assets/image/npm_logo.svg'
import Github from '@/assets/image/github_logo.svg'

import BackgroundIcon from '@/components/BackgroundIcon.vue'
</script>

<template>
    <div class="backgrounds">
        <BackgroundIcon :background_img="Python"/>
        <BackgroundIcon :background_img="Android"/>
        <BackgroundIcon :background_img="Npm"/>
        <BackgroundIcon :background_img="Github"/>
        <BackgroundIcon :background_img="Python"/>
        <BackgroundIcon :background_img="Python"/>
    </div>
</template>

<style scoped lang="scss">
.backgrounds {
    width: 100%;
    display: flex;
    flex-flow: column;

    position: absolute;
    z-index: 1;

    .npm-logo {

    }
}
</style>