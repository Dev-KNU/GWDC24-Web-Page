<script setup lang="ts">
import type { SpeakerItem } from '@/types/SpeakerItem'

defineProps<{
    speaker: SpeakerItem
}>()
</script>

<template>
    <div class="speaker-container">
        <div>
            <img :src="speaker.image" alt="GWDC24 speaker" />
        </div>
        <div class="speaker-text">
            <span class="speaker-text-title">{{ speaker.title }}</span>
            <div class="speaker-text-info">
                <span class="speaker-text-name">{{ speaker.name }}</span>
                <span class="speaker-text-affiliate">{{ speaker.affiliate }}</span>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
@import "@/assets/color";

.speaker-container {
    img {
        width: 120px;
        border-radius: 60px;
    }

    display: flex;
    flex-flow: row;
    gap: 12px;
    align-items: center;

    .speaker-text {
        display: flex;
        flex-flow: column;
        gap: 16px;

        font-style: normal;
        line-height: normal;

        .speaker-text-info {
            display: flex;
            flex-flow: column;
            gap: 4px;

            .speaker-text-name {
                font-size: 24px;
                font-weight: 600;
                color: $color-text-100;
            }

            .speaker-text-affiliate {
                font-size: 18px;
                font-weight: 400;
                color: $color-text-200;
            }
        }

        .speaker-text-title {
            color: $color-primary-100;
            font-size: 24px;
            font-weight: 600;
        }
    }
}
</style>
