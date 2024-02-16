<script lang="ts" setup>
import Logo from '@/assets/image/GWDC24.png'
import Information from '@/components/Information.vue'
import AnimatedArrowScroll from '@/components/AnimatedArrowScroll.vue'
import { ref } from 'vue'

const informationElement = ref<InstanceType<typeof Information> | null>(null)
const onArrowClicked = () => {
    ;(
        informationElement.value?.$refs.reference ?? document.querySelector('.information')
    )?.scrollIntoView({ behavior: 'smooth', block: 'center' })
}
</script>

<template>
    <!-- <div class="main">
        <img :src="Logo" alt="logo" class="logo" />
        <span class="main-title">강원도 유일의 개발 컨퍼런스, GWDC24가 곧 찾아옵니다.</span>
    </div> -->
    <div class="main-container">
        <div class="main">
            <div class="logo">
                <img :src="Logo" alt="logo" class="logo-image" />
                <AnimatedArrowScroll v-on:click="onArrowClicked" />
            </div>
            <Information ref="informationElement" />
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import '@/assets/color';
@import '@/assets/variable';
@import 'pretendard/dist/web/static/pretendard.css';

div.main-container {
    display: flex;
    justify-content: center;
    align-items: center;

    z-index: 5;

    @media screen and (min-width: $breakpoint-mobile-to-pc) {
        height: 100vh;
    }

    div.main {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 88px;

        @media screen and (max-width: $breakpoint-mobile-to-pc) {
            flex-direction: column;
        }

        div.logo {
            @media screen and (min-width: $breakpoint-mobile-to-pc) {
                width: $image-cut-in-size-width;
                height: $image-cut-in-size-height;

                img.logo-image {
                    top: calc(-1 * ($image-original-size-height - $image-cut-in-size-height) / 2);
                    left: calc(-1 * ($image-original-size-width - $image-cut-in-size-width) / 2);
                    position: relative;
                }

                div.animated_arrow_scroll {
                    display: none;
                }
            }

            @media screen and (max-width: $breakpoint-mobile-to-pc) {
                display: flex;
                flex-direction: column;

                align-items: center;
            }

            @media screen and (max-height: $image-original-size-height),
                (max-width: $image-original-size-width) {
                height: 100vh;

                img.logo-image {
                    top: calc((100vh - $image-original-size-height) / 2);
                    position: relative;
                }
            }
        }
    }
}

/* div.main {
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
        font-size: 32px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;

        position: absolute;
        bottom: 0;
    }
} */
</style>
