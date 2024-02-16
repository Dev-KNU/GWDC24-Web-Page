<script lang="ts" setup>
import SpeakerMember from '@/components/SpeakerMember.vue'

import speaker_1 from '@/assets/image/speaker_1.png'
import speaker_2 from '@/assets/image/speaker_2.png'
import speaker_3 from '@/assets/image/speaker_3.png'
import speaker_4 from '@/assets/image/speaker_4.png'
import speaker_5 from '@/assets/image/speaker_5.png'
import type { SpeakerItem } from '@/types/SpeakerItem'

const speakers: SpeakerItem[] = [
    {
        image: speaker_1,
        name: 'vivi',
        title: '대학생활 200% 활용하기',
        description: '12:45 ~ 13:30 (45m)',
        affiliate: '모바일 개발 | 현대자동차'
    },
    {
        image: speaker_2,
        name: '류석문',
        title: '프로그래머로 산다는 것',
        description: '13:45 ~ 14:30 (45m)',
        affiliate: 'CTO | SOCAR'
    },
    {
        image: speaker_3,
        name: '구인선',
        title: '왜 임베디드 개발을 하는가',
        description: '14:45 ~ 15:15 (30m)',
        affiliate: '임베디드 개발'
    },
    {
        image: speaker_4,
        name: 'Choyi',
        title: '대학생에서 엔지니어로!',
        description: '15:25 ~ 15:55 (45m)',
        affiliate: 'iOS 개발 | Swift Korea'
    },
    {
        image: speaker_5,
        name: '성유진',
        title: '하고싶은 일만 하면서 살 순 없나요?',
        description: '16:05 ~ 16:50 (45m)',
        affiliate: 'Apple Developer Academy'
    }
]
</script>

<template>
    <div class="speakers">
        <!-- <div class="speakers-blur">
            <div class="speakers-blur-container">
                <img :src="speaker_blur_img" alt="speaker blur" />
                <span>GWDC24를 빛내 주실 연사진과 내용은 추후 공개 예정입니다.</span>
            </div>
        </div> -->
        <div class="speakers-container" v-for="(item, index) in speakers" v-bind:key="index">
            <SpeakerMember :speaker="item" />
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import '@/assets/color';
@import 'pretendard/dist/web/static/pretendard.css';

$color-backgroun-speaker: $color-primary-100;

.speakers {
    position: relative;
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
}

.speakers-blur {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;

    position: absolute;
    backdrop-filter: blur(5px);

    .speakers-blur-container {
        display: flex;
        flex-flow: column;
        align-items: center;
        padding: 10px;
        gap: 24px;

        position: relative;

        span {
            font-size: 24px;
            font-style: normal;
            font-weight: 700;
            line-height: normal;
            text-align: center;
        }

        img {
            display: flex;
            width: 52px;
            height: 52px;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 10px;
            padding: 10px;

            border-radius: 50px;
            background: $color-backgroun-speaker;
        }
    }
}

.speakers-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 32px;
    margin: 16px;
}
</style>
