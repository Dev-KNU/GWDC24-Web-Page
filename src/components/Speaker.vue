<script setup lang="ts">
import SpeakerMember from '@/components/SpeakerMember.vue'

import speaker_1 from '@/assets/image/speaker_1.svg'
import speaker_2 from '@/assets/image/speaker_2.svg'
import speaker_3 from '@/assets/image/speaker_3.svg'
import speaker_4 from '@/assets/image/speaker_4.svg'
import speaker_blur_img from '@/assets/image/speaker_blur_img.svg'


</script>

<template>
    <div class='speakers'>
        <div class='speakers-blur'>
            <div class='speakers-blur-text'>
                <img :src='speaker_blur_img' alt='speaker blur'>
                <span>GWDC24를 빛내 주실 연사진과 내용은 추후 공개 예정입니다.</span>
            </div>
        </div>
        <div class='speakers-container'>
            <SpeakerMember :SpeakerName='"연사1"' :SpeakerInfo='"아직 공개되지 않았습니다"' :SpeakerSession='"궁금해서 여기까지 오셨다면 축하드립니다! 이스터에그를 발견하셨습니다"' :SpeakerImg='speaker_1'/>
            <SpeakerMember :SpeakerName='"연사2"' :SpeakerInfo='"곧 공개될 예정이니 기다려주세요"' :SpeakerSession='"이곳 말고도 다른 곳에 이스터에그가 있으니, 잘 탐색해주세요 :)"' :SpeakerImg='speaker_2'/>
            <SpeakerMember :SpeakerName='"연사3"' :SpeakerInfo='"3월 초, 기대해주세요"' :SpeakerSession='"이 웹페이지는 Vue + TS 기반으로 만들어졌습니다"' :SpeakerImg='speaker_3'/>
            <SpeakerMember :SpeakerName='"연사4"' :SpeakerInfo='"현재 연사 섭외중입니다"' :SpeakerSession='"이 이스터에그는 오거나이저 이용현님의 아이디어로 제작되었습니다"' :SpeakerImg='speaker_4'/>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import '@/assets/color';
@import "pretendard/dist/web/static/pretendard.css";

$color-backgroun-speaker: $color-primary-100;

.speakers {
    max-width: 340px;

    position: relative;
    font-family: 'Pretendard', -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', sans-serif;
}

.speakers-blur {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;

    position: absolute;
    z-index: 1;

    backdrop-filter: blur(5px);

    .speakers-blur-text {
        display: flex;
        flex-flow: column;
        align-items: center;
        padding: 10px;
        gap: 24px;

        position: relative;

        font-size: 24px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        text-align: center;

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
            background: $color-backgroun-speaker
        }
    }
}

.speakers-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 32px;
    margin: 10px;

    font-size: 14px;
    font-weight: 500;
}

</style>