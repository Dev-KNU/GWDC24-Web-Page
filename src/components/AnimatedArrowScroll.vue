<script lang="ts" setup>
import Arrow from '@/assets/image/arrow.svg'
</script>

<template>
    <div class="animated_arrow_scroll">
        <Arrow width='100px' height='100%' />
    </div>
</template>

<style lang="scss" scoped>
@import "@/assets/color";

div.animated_arrow_scroll {
    position: absolute;
    bottom: 120px;
    left: auto;
    right: auto;
    z-index: 100;

    animation: animation_arrow_scroll 1.5s infinite;

    svg {
        fill: $color-white;
    }
}

@keyframes animation_arrow_scroll {
    0% {
        bottom: 55px;
    }
    50% {
        bottom: 5px;
    }
    100% {
        bottom: 55px;
    }
}
</style>
