<script setup lang='ts'>
import { onMounted, onUnmounted, Ref, ref } from 'vue'

const props = defineProps<{
    icon: string,
    left?: number,
    right?: number,
    top?: number
}>()

const imageTarget: Ref<HTMLElement | null> = ref(null);
const imageTargetCover: Ref<HTMLElement | null> = ref(null);
const onResized = () => {
    const pageWidth = window.innerWidth
    const imageWidth = imageTarget.value.clientWidth
    const finalWidth = (
        props.left ?
            (props.left + imageWidth) - pageWidth : -1
    );
    // console.log(props.icon)
    // console.log(`pageWidth: ${pageWidth}`)
    // console.log(`imageWidth: ${imageWidth}`)
    // console.log(`finalWidth: ${finalWidth}`)
    // console.log("------------------------------------")
    if (finalWidth > 0) {
        imageTargetCover.value.style.width = (imageWidth - finalWidth).toString() + "px";
    }
}

onMounted(() => {
    window.addEventListener("resize", onResized)
})
onUnmounted(() => {
    window.removeEventListener("resize", onResized)
})

</script>

<template>
    <div class='logo' ref='imageTargetCover'>
        <img :src='icon' alt='icon' ref='imageTarget' v-on:load='onResized'>
    </div>
</template>

<style scoped lang='scss'>
    .logo {
        left: calc(v-bind(left) * 1px);
        right: calc(v-bind(right) * 1px);
        top: calc(v-bind(top) * 1px);
        overflow: hidden;

        img {
            object-fit: cover;
        }
    }
</style>