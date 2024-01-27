<script lang="ts" setup>
import Logo from '@/assets/image/GWDC24.png'
</script>

<template>
    <div class="main">
        <img :src='Logo' alt='logo' class='logo'>
        <span class="main-title">강원도 유일의 개발 컨퍼런스, GWDC24가 곧 찾아옵니다.</span>
    </div>
</template>

<style lang="scss" scoped>
@import '@/assets/color';
@import "pretendard/dist/web/static/pretendard.css";

div.main {
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 0;
    max-width: 364px;

    z-index: 5;
    position: relative;

    .logo {
        //transform: rotate(2.347deg);
        //filter: drop-shadow(0.563px 0.563px 240px rgba(255, 255, 255, 0.32)) drop-shadow(18px 27px 128px rgba(136, 196, 240, 0.16)) drop-shadow(-24px -24px 128px rgba(255, 94, 94, 0.16));
    }

    span.main-title {
        color: $color-text-100;
        text-align: center;
        font-family: 'Pretendard', -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', sans-serif;
        font-size: 32px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;

        position: absolute;
        bottom: 0;
    }
}
</style>