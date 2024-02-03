<script setup lang="ts">
defineProps({
    SpeakerImg: String,
    SpeakerName: String,
    SpeakerInfo: String,
    SpeakerSession: String
})
</script>

<template>
    <div class="speaker-container">
        <div>
            <img :src="SpeakerImg" alt="GWDC24 speaker" />
        </div>
        <div class="speaker-text">
            <div class="speaker-text-info">
                <span>{{ SpeakerName }}</span>
                <span class="speaker-text-develop">{{ SpeakerInfo }}</span>
            </div>
            <span>{{ SpeakerSession }}</span>
        </div>
    </div>
</template>

<style scoped lang="scss">
.speaker-container {
    img {
        width: 80px;
    }

    display: flex;
    flex-flow: row;
    gap: 12px;
    align-items: center;

    .speaker-text {
        display: flex;
        flex-flow: column;
        gap: 8px;

        .speaker-text-info {
            display: flex;
            flex-flow: column;
            gap: 4px;

            .speaker-text-develop {
                font-size: 12px;
                font-weight: 400;
            }
        }
    }
}
</style>
