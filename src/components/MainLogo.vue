<script setup lang='ts'>
import LogoStrock from '@/assets/image/logo_strok.svg'
</script>

<template>
    <div class='logo-container'>
        <div class='effect pos'>
            <img :src='LogoStrock' alt='logo-stroke'>
        </div>
        <div class='logo pos overlay'></div>
        <div class='logo overlay multiply'></div>

    </div>
</template>

<style scoped lang='scss'>
.logo-container {
    transform: rotate(2.347deg);
}

.pos {
    position: absolute;
}

.multiply {
    mix-blend-mode: multiply;
}


.effect {
    width: 100%;
    filter: drop-shadow(0.563px 0.563px 240px rgba(255, 255, 255, 0.32)) drop-shadow(18px 27px 128px rgba(136, 196, 240, 0.16)) drop-shadow(-24px -24px 128px rgba(255, 94, 94, 0.16));
}

.logo {
    width: 345.68px;
    height: 454.206px;

    background: url('@/assets/image/effect.png'), url('@/assets/image/effect.png'),url("@/assets/image/logo2_hologram.png");
    background-blend-mode: overlay;
    mask: url("@/assets/image/logo2_hologram.png");
    filter: drop-shadow(0.563px 0.563px 240px rgba(255, 255, 255, 0.32)) drop-shadow(18px 27px 128px rgba(136, 196, 240, 0.16)) drop-shadow(-24px -24px 128px rgba(255, 94, 94, 0.16));

}


</style>