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
import { BackgroundIconItem } from '@/types/BackgroundIconItem'

const backgroundIconItems = [
    // Opacity = True
    new BackgroundIconItem(Python, true).setPositionLeft(20.85, 221.67),
    new BackgroundIconItem(Figma, true).setPositionRight(6, 223.64),
    new BackgroundIconItem(Github, true).setPositionLeft(135.25, -62.75),
    new BackgroundIconItem(Npm, true).setPositionRight(142.35, 0),
    new BackgroundIconItem(Swift, true).setPositionLeft(496, -40),
    new BackgroundIconItem(Android, true).setPositionRight(397, 0),

    new BackgroundIconItem(Jabascript, true).setPositionRight(599.44, 154.77),
    new BackgroundIconItem(InteliJ, true).setPositionLeft(332.42, 222.42),
    new BackgroundIconItem(Unity, true).setPositionRight(278.62, 133.04),

    // Opacity = False
    new BackgroundIconItem(Discord, false).setPositionRight(868, 217),
    new BackgroundIconItem(Gpt, false).setPositionLeft(1201, 35),
    new BackgroundIconItem(Terminal, false).setPositionRight(1151, 0),
    new BackgroundIconItem(Notepad, false).setPositionRight(1680.36, 151.47),
    new BackgroundIconItem(Xcode, false).setPositionLeft(2092, 211),
    new BackgroundIconItem(Apple, false).setPositionRight(2200, 203.16)
]
</script>

<template>
    <div class="backgrounds">
        <div
            class="background-main"
            v-for="(item, index) in backgroundIconItems.filter((i) => i.opacity)"
        >
            <BackgroundIcon
                v-bind:key="index"
                :icon="item.icon"
                :left="item.left"
                :right="item.right"
                :top="item.top"
            />
        </div>
        <div class="other" v-for="(item, index) in backgroundIconItems.filter((i) => !i.opacity)">
            <BackgroundIcon
                v-bind:key="index"
                :icon="item.icon"
                :left="item.left"
                :right="item.right"
                :top="item.top"
            />
        </div>
    </div>
</template>

<style scoped lang="scss">
.backgrounds {
    .background-main {
        opacity: 0.5;
    }

    .logo {
        filter: blur(6);
        position: absolute;
    }
}
</style>
