<template>
  <div class="min-w-470px flex w-4/12 flex-col">
    <div class="text-ist-blue-900 text-2xl font-semibold">最新通知</div>
    <div class="border-ist-blue-900 flex flex-col border-b-4 border-t-4">
      <div
        class="border-ist-blue-800 flex border-b"
        v-for="(item, index) in newNoticeList"
      >
        <div class="bg-ist-blue-200 m-4 flex w-24 flex-col">
          <div
            class="text-ist-blue-500 flex justify-end px-2 align-bottom text-4xl font-semibold"
          >
            {{ item.time.day }}
          </div>
          <div class="px-2 align-bottom text-lg font-light">
            {{ item.time.year }}.{{ item.time.month }}
          </div>
        </div>
        <div class="my-4 text-lg font-medium">{{ item.title }}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from "vue";

const newNoticeList = reactive([
  {
    time: {
      year: 2023,
      month: 12,
      day: 26,
    },
    title: "2023年度IST人工智能实验室开始招新",
  },
  {
    time: {
      year: 2023,
      month: 11,
      day: 25,
    },
    title: "2023年度IST人工智能实验室招新公告(一)",
  },
  {
    time: {
      year: 2023,
      month: 8,
      day: 24,
    },
    title: "2023年度IST人工智能实验室招新公告(二)",
  },
]);
</script>

<style lang="scss" scoped></style>
