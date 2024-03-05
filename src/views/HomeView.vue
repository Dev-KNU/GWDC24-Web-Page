<script setup lang='ts'>
import Motive from '@/components/Motive.vue'
import MainTitle from '@/components/MainTitle.vue'
import Speaker from '@/components/Speaker.vue'
</script>

<template>
    <div class="wrapper">
        <MainTitle />
        <Motive />
        <Speaker />
    </div>
</template>

<style lang='scss' scoped>
div.wrapper {
    display: flex;
    padding: 0 0 100px 0;
    flex-direction: column;
    align-items: center;
    gap: 128px;
    overflow-x: hidden;
}
</style>