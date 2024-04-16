<template>
  <div class="z-10 flex w-4/12 min-w-470px flex-col">
    <div class="text-2xl font-semibold" v-if="!$props.hiddenTitle">最新通知</div>
    <div class="flex flex-col border-b-4 border-t-4 border-ist-blue-900">
      <div
        class="z-10 flex border-b border-ist-blue-800"
        v-for="(item, index) in props.data"
        :class="$props.flexType === 'col' ? 'col' : ''"
      >
        <div class="z-10 m-4 flex w-24 flex-col" :class="$props.dateBgColor, $props.datePosition === 'center' ? 'center' : ''">
          <div
            class="z-10 flex justify-end px-2 align-bottom text-4xl font-semibold text-ist-blue-500"
          >
            {{ item.time.day }}
          </div>
          <div class="px-2 align-bottom text-lg font-light">
            {{ item.time.year }}.{{ item.time.month }}
          </div>
        </div>
        <div class=" flex flex-col justify-between my-4 text-lg font-medium">
          <div>{{ item.title }}</div>
          <div class=" text-base">{{ item.subtitle }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { type TypeNews } from "./interface";

const props = defineProps({
  flexType: {
    type: String,
    default: "row",
  },
  data: {
    type: Array<TypeNews>,
  },
  dateBgColor: {
    type: String,
    default: "bg-ist-blue-200",
  },
  hiddenTitle:{
    type: Boolean,
    default: false
  },
  datePosition:{
    type: String,
    default: "normal"
  }
});
console.log(props.dateBgColor);
</script>

<style scoped>
* {
  overflow: hidden;
}

.col {
  @apply flex-col;
}

.center{
  @apply justify-center;
  @apply items-center;
}
</style>
