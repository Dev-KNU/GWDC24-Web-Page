<script setup lang="ts">
const props = defineProps(
    {
        background_img: String
    }
)
</script>

<template>
    <div>
        <div class="background_blur"></div>
        <div>
            <img :src="background_img" alt="background_img" />
        </div>
    </div>
</template>

<style scoped lang="scss">
.background_blur {
    width: 100%;

    backdrop-filter: blur(5px);
}
</style>