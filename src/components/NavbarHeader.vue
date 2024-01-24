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
    width: 1194px;
    padding: 20px;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 10px;

    position: absolute;
    top: 0;
    z-index: 1;

    background: $color-backgroun-navbar;
}
</style>