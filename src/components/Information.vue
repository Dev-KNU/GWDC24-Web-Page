<script setup lang='ts'>
import TicketButton from '@/components/TicketButton.vue'
</script>

<template>
    <div class="information">
        <TicketButton />
        <span>2024년 3월 9일 토요일</span>
        <span class='highlighter'>강원대학교 춘천캠퍼스</span>
        <a href='mailto:halogen@gwdc.dev' class='donation'>후원 문의</a>
    </div>
</template>

<style lang="scss" scoped>
@import '@/assets/color';
@import "pretendard/dist/web/static/pretendard.css";

div.information {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 18px;
    max-width: 364px;

    span, a {
        color: $color-text-200;
        text-align: center;
        font-family: 'Pretendard', -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', sans-serif;
        font-size: 24px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
        text-decoration: none;

        &.donation {
            color: $color-primary-100;
            font-size: 20px;
            text-decoration-line: underline;
        }
    }

    .highlighter {
        color: $vt-c-white;
        font-size: 32px;
    }
}
</style>