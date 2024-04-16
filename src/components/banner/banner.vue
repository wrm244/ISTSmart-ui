<template>
  <div class="flex w-full flex-col items-center justify-center">
    <div class="mb-1 h-4 w-12 border-b-8 border-ist-blue-800"></div>
    <div class="text-2xl font-thin text-ist-blue-500">
      {{ $props.subtitle }}
    </div>
    <div class="text-4xl font-semibold text-ist-blue-900">
      {{ $props.title }}
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  title: {
    type: String,
    default: "主标题",
  },
  subtitle: {
    type: String,
    default: "副标题",
  },
});
</script>

<style scoped>
* {
  overflow: hidden;
}
</style>
