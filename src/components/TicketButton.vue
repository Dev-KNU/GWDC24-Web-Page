<script lang="ts" setup>
import TicketIcon from '@/assets/image/ticket.svg'
</script>

<template>
    <a href="https://event-us.kr/m/77961/14164" class="ticket-button">
        <span class="ticket-button-text">입장 티켓 구매하기</span>
        <TicketIcon />
    </a>
</template>

<style scoped lang="scss">
@import '@/assets/color';

a.ticket-button {
    display: flex;
    padding: 8px 20px;
    justify-content: center;
    align-items: center;
    gap: 10px;

    background: rgba(255, 255, 255, 0.1);
    border-radius: 50px;
    border: 2px solid $color-primary-100;

    &:hover {
        background: rgba(255, 255, 255, 0.05);
    }

    span.ticket-button-text {
        color: $color-primary-100;
        text-align: center;
        font-family:
            'Pretendard',
            -apple-system,
            BlinkMacSystemFont,
            system-ui,
            Roboto,
            'Helvetica Neue',
            'Segoe UI',
            'Apple SD Gothic Neo',
            'Noto Sans KR',
            'Malgun Gothic',
            sans-serif;
        font-size: 20px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
    }
}
</style>
