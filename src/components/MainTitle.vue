<script lang="ts" setup>
import MainLogo from '@/assets/image/logo2.svg'
</script>

<template>
    <div class="main">
        <img :src="MainLogo" alt="main logo" />
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
    gap: 80px;
    max-width: 364px;

    img {
        width: 320px;
    }

    span.main-title {
        color: $color-text-100;
        text-align: center;
        font-family: 'Pretendard', -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', sans-serif;
        font-size: 32px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
    }
}
</style>