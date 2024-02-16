<template>
    <a href="https://event-us.kr/gwdc24/event/77961" class="ticket-button">
        <span class="ticket-button-text">티켓 구입하기</span>
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

    border-radius: 50px;
    border: 2px solid $color-primary-100;

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
