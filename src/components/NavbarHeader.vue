<script setup lang='ts'>
import logo from '@/assets/image/logo1.svg';
</script>

<template>
    <BNavbar toggleable="lg" container="true">
        <BNavbarBrand href="/">
            <img :src='logo' alt='GWDC logo version1' />
        </BNavbarBrand>
    </BNavbar>
</template>

<style lang='scss' scoped>
@import "@/assets/color";
$color-backgroun-navbar: rgba($color-white, .1);

.navbar {
    display: flex;
    padding: 20px;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 10px;

    z-index: 1;
    width: 100%;

    background: $color-backgroun-navbar;
}
</style>