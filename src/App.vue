<script setup lang="ts">
import NavbarHeader from '@/components/NavbarHeader.vue'
import Footer from '@/components/Footer.vue'
import Background from '@/components/Background.vue'
</script>

<template>
    <Background />
    <NavbarHeader />
    <RouterView />
    <Footer />
</template>
