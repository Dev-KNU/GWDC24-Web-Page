<script lang="ts" setup>
import LogoImage from '@/assets/image/logo1.svg'
import { type Ref, ref } from 'vue'

const max = 62;
const randomCount = ref(1)
const randomResult: Ref<number[]> = ref([])

const onRandom = (count: number) => {
    let pluckedBall = 0
    while (pluckedBall < count && max > randomResult.value.length) {
        const randomValueResult = Math.floor(Math.random() * max + 1)
        if (randomResult.value.indexOf(randomValueResult) == -1) {
            randomResult.value.push(randomValueResult)
            pluckedBall++
        }
    }
}
</script>

<template>
    <div class="wrapper">
        <h2>
            <LogoImage height="80px" viewBox="0 0 146 26" width="500px" />
            추첨기
        </h2>
        <BButtonGroup>
            <BButton v-on:click="randomCount > 1 ? randomCount-- : null"> -</BButton>
            <BButton v-on:click="onRandom(randomCount)"> {{ randomCount }}명 추첨하기</BButton>
            <BButton v-on:click="randomCount++"> +</BButton>
        </BButtonGroup>
        <div class="result-group">
            <span class="result-title">결과: </span>
            <span v-for="item in randomResult" :class="'result-ball result-ball-' + (item % 10)" :key='item'>{{ item }}</span>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import "@/assets/color";

div.wrapper {
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

    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100vh;
    overflow-y: hidden;

    h2 {
        align-items: center;
        justify-content: center;
        display: flex;
        font-size: 80px;
        font-weight: bold;
        padding: 0 0 200px 0;
    }

    button {
        font-size: 28px;
        font-weight: normal;

        &:nth-child(1),
        &:nth-child(3) {
            width: 60px;
            height: 60px;
        }

        &:nth-child(2) {
            width: 240px;
            height: 60px;
        }
    }

    div.result-group {
        align-items: center;
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        gap: 16px;
        justify-content: center;
        padding: 50px 0 0 0;
        z-index: 100;

        span.result-title {
            font-weight: bold;
            font-size: 48px;
        }

        span.result-ball {
            align-items: center;
            border-radius: 40px;
            display: flex;
            font-size: 48px;
            font-weight: bold;
            text-align: center;
            justify-content: center;
            height: 80px;
            width: 80px;

            &.result-ball-1, &.result-ball-4 {
                background: $color-primary-100;
            }

            &.result-ball-2, &.result-ball-5 {
                background: $color-secondary-100;
            }

            &.result-ball-3, &.result-ball-9 {
                background: #181818;
            }

            &.result-ball-0, &.result-ball-6 {
                background: #ee6002;
            }

            &.result-ball-7, &.result-ball-8 {
                background: #5865f2;
            }
        }
    }
}
</style>
