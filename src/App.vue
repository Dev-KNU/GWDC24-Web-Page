<script setup lang="ts">
import NavbarHeader from '@/components/NavbarHeader.vue'
import MainTitle from '@/components/MainTitle.vue'
import Information from '@/components/Information.vue'
import Motive from '@/components/Motive.vue'
</script>

<template>
    <NavbarHeader />
    <div class='wrapper'>
        <MainTitle />
        <Information />
        <Motive />
    </div>
</template>

<style scoped>
div.wrapper {
    display: flex;
    padding: 130px 0 100px 0;
    flex-direction: column;
    align-items: center;
    gap: 80px;
}
</style>
