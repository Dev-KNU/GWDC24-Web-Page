<script lang="ts" setup>
import TicketButton from '@/components/TicketButton.vue'
import { ref } from 'vue'

const conferenceInfo = {
    'date': new Date(2024, 3, 9, 13),
    'location1': "강원특별자치도 춘천시 강원대학길 1 (강원대학교)",
    'location2': "강원대학교 춘천캠퍼스",
    'location3': '60주년기념관 국제회의실(1F)'
}
const reference = ref<HTMLDivElement | null>();

defineExpose({
    reference
})
</script>

<template>
    <!-- <div class="information">
        <TicketButton />
        <span>2024년 3월 9일 토요일</span>
        <span class="highlighter">강원대학교 춘천캠퍼스<br />60주년기념관 국제회의실</span>
    </div> -->
    <div class='information' ref='reference'>
        <h2>강원도 유일의<br/>개발 컨퍼런스</h2>
        <div>
            <span>

            {{ conferenceInfo.location2 }}<br/>
            {{ conferenceInfo.location3 }}<br/>
            </span>
            <span>

            {{ conferenceInfo.date.getFullYear() }}.
            {{ conferenceInfo.date.getMonth() }}.
            {{ conferenceInfo.date.getDate() }}<br/>
            </span>
        </div>
        <ticket-button />
    </div>
</template>

<style lang="scss" scoped>
@import '@/assets/color';
@import "@/assets/variable";
@import 'pretendard/dist/web/static/pretendard.css';

div.information {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 64px;
    z-index: 3;

    span, a, h2 {
        color: $color-text-200;
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
        font-style: normal;
        line-height: normal;
        text-decoration: none;
    }

    h2 {
        color: $color-text-100;
        font-size: 48px;
        font-weight: 700;

        @media screen and (max-width: $breakpoint-mobile-to-pc) {
            text-shadow: -1px 0px $color-background, 0px 1px $color-background, 1px 0px $color-background, 0px -1px $color-background;
        }
    }

    span {
        display: block;
        color: $color-text-200;
        font-size: 24px;
        font-weight: 500;
        letter-spacing: 0.48px;
    }
}

/* div.information {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 18px;
    max-width: 364px;
    z-index: 3;

    span,
    a {
        color: $color-text-200;
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
} */
</style>
