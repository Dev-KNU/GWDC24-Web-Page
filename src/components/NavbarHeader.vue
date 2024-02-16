<script setup lang="ts">
import Logo from '@/assets/image/logo1.svg'
</script>

<template>
    <BNavbar toggleable="lg" container="true">
        <BNavbarBrand href="/">
            <Logo />
        </BNavbarBrand>
    </BNavbar>
</template>

<style lang="scss" scoped>
@import '@/assets/color';
$color-backgroun-navbar: rgba($color-white, 0.1);

.navbar {
    display: flex;
    padding: 20px;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 10px;

    z-index: 10;
    width: 100%;

    position: fixed;
    top: 0;
    left: 0;
    right: 0;

    backdrop-filter: blur(10px);
    background: $color-backgroun-navbar;
}
</style>
