<script setup lang="ts">
import Python from '@/assets/image/python_logo.png'
import Figma from '@/assets/image/figma_logo.png'
import Github from '@/assets/image/github_logo.png'
import Npm from '@/assets/image/npm_logo.png'
import Swift from '@/assets/image/swift_logo.png'
import Android from '@/assets/image/android_logo.png'
import Jabascript from '@/assets/image/javascript_logo.png'
import InteliJ from '@/assets/image/inteliJ_logo.png'
import Unity from '@/assets/image/unity_logo.png'

import Discord from '@/assets/image/discord_logo.png'
import Gpt from '@/assets/image/chatgpt_logo.png'
import Terminal from '@/assets/image/terminal_logo.png'
import Notepad from '@/assets/image/notepad_logo.png'
import Xcode from '@/assets/image/xcode_logo.png'
import Apple from '@/assets/image/apple_logo.png'

import BackgroundIcon from '@/components/BackgroundIcon.vue'

</script>

<template>
    <div class="backgrounds">
        <div class='background-main'>
            <BackgroundIcon :icon='Python' left=221.67 top=20.85 />
            <BackgroundIcon :icon='Figma' right=223.64 top=6 />
            <BackgroundIcon :icon='Github' left=-62.75 top=135.25 />
            <BackgroundIcon :icon='Npm' right=0 top=142.35 />
            <BackgroundIcon :icon='Swift' left=-40 top=496 />
            <BackgroundIcon :icon='Android' right=0 top=397 />

            <BackgroundIcon :icon='Jabascript' right=154.77 top=599.44 />

            <BackgroundIcon :icon='InteliJ' left=222.42 top=332.42 />
            <BackgroundIcon :icon='Unity' right=133.04 top=278.62 />
        </div>
        <div class='other'>
            <BackgroundIcon :icon='Discord' left=217 top=868 />
            <BackgroundIcon :icon='Gpt' left=35 top=1201 />
            <BackgroundIcon :icon='Terminal' right=0 top=1151 />
            <BackgroundIcon :icon='Notepad' right=151.47 top=1680.36 />
            <BackgroundIcon :icon='Xcode' left=211 top=2092 />
            <BackgroundIcon :icon='Apple' right=203.16 top=2200 />
        </div>
    </div>
</template>

<style scoped lang="scss">
.backgrounds {
    max-width: 100%;

    .background-main {
        max-width: 100%;

        opacity: 0.5;
    }

    .logo {
        max-width: 100%;

        filter: blur(6);
        position: absolute;
    }
}
</style>