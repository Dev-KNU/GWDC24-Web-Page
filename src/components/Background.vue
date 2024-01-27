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
            <BackgroundIcon :icon='Python' left='221.67px' top='20.85px'/>
            <BackgroundIcon :icon='Figma' right='223.64px' top='6px'/>
            <BackgroundIcon :icon='Github' left='-62.75px' top='135.25px'/>
            <BackgroundIcon :icon='Npm' right='0px' top='142.35px'/>
            <BackgroundIcon :icon='Swift' left='-40px' top='496px'/>
            <BackgroundIcon :icon='Android' right='0px' top='397px'/>

            <BackgroundIcon :icon='Jabascript' right='154.77px' top='599.44px'/>

            <BackgroundIcon :icon='InteliJ' left='222.42px' top='332.42px'/>
            <BackgroundIcon :icon='Unity' right='133.04px' top='278.62px'/>
        </div>
        <div class='other'>
            <BackgroundIcon :icon='Discord' left='217px' top='868px'/>
            <BackgroundIcon :icon='Gpt' left='35px' top='1201px'/>
            <BackgroundIcon :icon='Terminal' right='0px' top='1151px'/>
            <BackgroundIcon :icon='Notepad' right='151.47px' top='1680.36px'/>
            <BackgroundIcon :icon='Xcode' left='211px' top='2092px'/>
            <BackgroundIcon :icon='Apple' right='203.16px' top='2200px'/>
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

        filter: blur(6px);
        position: absolute;
    }
}
</style>