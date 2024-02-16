<script setup lang="ts">
import type { SpeakerItem } from '@/types/SpeakerItem'

defineProps<{
    speaker: SpeakerItem
}>();
</script>

<template>
    <div class="speaker-container">
        <div>
            <img :src="speaker.image" alt="GWDC24 speaker" />
        </div>
        <div class="speaker-text">
            <div class="speaker-text-info">
                <span class='speaker-text-name'>{{ speaker.name }}</span>
                <span class="speaker-text-affiliate">{{ speaker.affiliate }}</span>
            </div>
            <span class='speaker-text-title'>{{ speaker.title }}</span>
        </div>
    </div>
</template>

<style scoped lang="scss">
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
        gap: 8px;

        color: white;
        font-style: normal;
        line-height: normal;

        .speaker-text-info {
            display: flex;
            flex-flow: column;
            gap: 4px;

            .speaker-text-name {
                font-size: 24px;
                font-weight: 600;
            }

            .speaker-text-affiliate {
                font-size: 18px;
                font-weight: 500;
            }
        }

        .speaker-text-title {
            font-size: 20px;
            font-weight: 600;
        }
    }
}
</style>
