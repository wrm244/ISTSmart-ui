<template>
  <div class="min-w-470px flex flex-col gap-8 text-white">
    <div class="text-2xl text-white">个人中心</div>
    <div class="flex gap-4 border-b pb-3">
      <div class=" ml-4 bg-user-logo h-20 w-20 rounded-full bg-cover"></div>
      <div class="flex flex-col justify-center gap-1">
        <div class="text-xl font-medium">琪露诺</div>
        <div class="text-xl font-medium">2200310511</div>
      </div>
    </div>
    <div class="flex-rows flex justify-between mt-4">
      <div class="flex w-12 flex-col items-center">
        <div class="bg-icon-schedule h-10 w-7 bg-no-repeat bg-contain "></div>
        <div class="text-lg">日程</div>
      </div>
      <div class="flex w-12 flex-col items-center">
        <div class="bg-icon-course h-10 w-8 bg-no-repeat bg-contain "></div>
        <div class="text-lg">课题</div>
      </div>
      <div class="flex w-12 flex-col items-center">
        <div class="bg-icon-share h-10 w-8 bg-no-repeat bg-contain "></div>
        <div class="text-lg">分享</div>
      </div>
      <div class="flex w-12 flex-col items-center">
        <div class="bg-icon-setting h-10 w-8 bg-no-repeat bg-contain "></div>
        <div class="text-lg">设置</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
const account = ref<string>("");
const password = ref<string>("");
</script>

<style scoped></style>
