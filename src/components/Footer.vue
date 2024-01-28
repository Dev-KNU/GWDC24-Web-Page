<script setup lang="ts"></script>

<template>
    <div class="footer">
        <span>Copyright © 2024 GWDC 준비위원회. 모든 권리 보유.</span>
        <span>문의처 halogen@gwdc.dev</span>
    </div>
</template>

<style scoped lang="scss">
@import '@/assets/color';
$color-backgroun-footer: rgba($color-white, 0.1);

.footer {
    display: flex;
    width: 100%;
    padding: 40px 20px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 8px;

    color: #c1c1c1;
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
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px; /* 142.857% */
    letter-spacing: -0.28px;

    background: $color-backgroun-footer;
}
</style>
