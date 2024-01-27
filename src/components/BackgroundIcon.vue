<script setup lang='ts'>
defineProps<{
    icon: string,
    left: string | null,
    right: string | null,
    top: string | null

}>()
</script>

<template>
    <div class='logo'>
        <img :src='icon' alt='icon' >
    </div>
</template>

<style scoped lang='scss'>
    .logo {
        left: v-bind(left);
        right: v-bind(right);
        top: v-bind(top);
    }
</style>