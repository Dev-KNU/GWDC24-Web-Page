<script setup lang="ts">
import NavbarHeader from '@/components/NavbarHeader.vue'
import MainTitle from '@/components/MainTitle.vue'
import Information from '@/components/Information.vue'
import Speaker from '@/components/Speaker.vue'
import Motive from '@/components/Motive.vue'
import Footer from '@/components/Footer.vue'
import Background from '@/components/Background.vue'
</script>

<template>
    <Background />
    <NavbarHeader />
    <div class='wrapper'>
        <MainTitle />
        <Information />
        <Speaker />
        <Motive />
    </div>
    <Footer />
</template>

<style scoped>
div.wrapper {
    display: flex;
    padding: 0 0 100px 0;
    flex-direction: column;
    align-items: center;
    gap: 128px;
    overflow-x: hidden;
}
</style>
