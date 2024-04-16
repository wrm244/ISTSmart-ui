<template>
  <div class="flex h-full w-full flex-col">
    <div class="flex h-24 w-full justify-between">
      <div class="mb-2 ml-24 flex items-end font-semibold text-ist-blue-700">
        <div class="">最新招募 ></div>
        <div class="">第二节集成电路科技课题</div>
      </div>
      <div class="mr-24 flex items-end font-bold">
        <div
          class="text-ist flex h-16 w-64 cursor-pointer items-center justify-center bg-ist-blue-900 font-mono text-2xl text-white hover:bg-ist-blue-500"
        >
          方向列表
        </div>
        <div
          class="text-ist flex h-16 w-64 cursor-pointer items-center justify-center font-mono text-2xl hover:bg-ist-blue-500"
        >
          其他列表
        </div>
      </div>
    </div>

    <div class="bg-list-bg flex flex-1">
      <div class="mt-24 flex h-full w-2/3 flex-col gap-8">
        <div
          class="flex flex-col items-center font-mono text-lg text-white"
          v-for="(item, index) in titles"
        >
          <div class="flex w-9/12 justify-between border-b">
            <div class="">
              {{ item.title }}
            </div>
            <div>
              {{ item.time.year }}-{{ item.time.month }}-{{ item.time.day }}
            </div>
          </div>
        </div>
      </div>
      <div class="relative h-full w-1/3">
        <div
          class="z-20 h-full w-full before:absolute before:bottom-0 before:h-5/6 before:w-full before:bg-ist-blue-800"
        >
          <newNotice
            class="z-0"
            dateBgColor="bg-ist-blue-700"
            :data="titles"
            :hiddenTitle="true"
            datePosition="center"
            textColor="text-white"
          ></newNotice>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from "vue";
import newNotice from "./newsNotice/newNotice.vue";

const titles = reactive([
  {
    title: "2023年第二节集成电路科技招募通知",
    time: {
      year: 2023,
      month: 7,
      day: 29,
    },
    subtitle: "迷宫饭真好看",
  },
  {
    title: "2023年第二节集成电路科技招募通知",
    time: {
      year: 2023,
      month: 7,
      day: 29,
    },
    subtitle: "迷宫饭真好看",
  },
  {
    title: "2023年第二节集成电路科技招募通知",
    time: {
      year: 2023,
      month: 7,
      day: 29,
    },
  },
  {
    title: "2023年第二节集成电路科技招募通知",
    time: {
      year: 2023,
      month: 7,
      day: 29,
    },
  },
]);
</script>

<style scoped>
* {
  overflow: hidden;
  @apply text-nowrap;
}
</style>
