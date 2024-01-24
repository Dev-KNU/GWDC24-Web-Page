<script setup lang="ts">
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
            <div class='speaker-container'>
                <div>
                    <img :src='speaker_1' alt='GWDC24 speaker_1'>
                </div>
                <div class='speaker-text'>
                    <div class='speaker-text_info'>
                        <span>박지영</span>
                        <span>Python 개발 | Dev.KNU 관리자</span>
                    </div>
                    <span>Python과 AI: tensorflow 기초 가이드</span>
                </div>
            </div>
            <div class='speaker-container'>
                <div>
                    <img :src='speaker_2' alt='GWDC24 speaker_2'>
                </div>
                <div class='speaker-text'>
                    <div class='speaker-text_info'>
                        <span>박지영</span>
                        <span>Python 개발 | Dev.KNU 관리자</span>
                    </div>
                    <span>Python과 AI: tensorflow 기초 가이드</span>
                </div>
            </div>
            <div class='speaker-container'>
                <div>
                    <img :src='speaker_3' alt='GWDC24 speaker_3'>
                </div>
                <div class='speaker-text'>
                    <div class='speaker-text_info'>
                        <span>박지영</span>
                        <span>Python 개발 | Dev.KNU 관리자</span>
                    </div>
                    <span>Python과 AI: tensorflow 기초 가이드</span>
                </div>
            </div>
            <div class='speaker-container'>
                <div>
                    <img :src='speaker_4' alt='GWDC24 speaker_4'>
                </div>
                <div class='speaker-text'>
                    <div class='speaker-text_info'>
                        <span>박지영</span>
                        <span>Python 개발 | Dev.KNU 관리자</span>
                    </div>
                    <span>Python과 AI: tensorflow 기초 가이드</span>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import '@/assets/color';
$color-backgroun-speaker: $color-primary-100;

.speakers {
    position: relative;
}

.speakers-blur {
    height: 100%;
    display: flex;
    align-items: center;

    position: absolute;
    z-index: 1;

    backdrop-filter: blur(10px);

    .speakers-blur-text {
        display: flex;
        flex-flow: column;
        align-items: center;
        gap: 24px;

        position: relative;

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

    .speaker-container {
        display: flex;
        flex-flow: row;
        gap: 17px;
        align-items: center;

        .speaker-text {
            display: flex;
            flex-flow: column;
            gap: 12px;

            .speaker-text_info {
                display: flex;
                flex-flow: column;
                gap: 4px;
            }
        }
    }
}

</style>