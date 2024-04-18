<template>
  <div class="relative flex h-24 items-center border-t-4 border-ist-blue-800">
    <div class="relative flex h-0 items-center xl:h-24">
      <div
        class="mx-8 h-full bg-GUET-logo bg-contain bg-center bg-no-repeat lg:w-20 xl:w-56"
      ></div>
      <div
        class="mx-2 h-full bg-IST-logo bg-contain bg-center bg-no-repeat xl:w-16"
      ></div>
    </div>
    <div class="relative flex h-24 items-center 2xl:ml-12">
      <div class="flex h-full w-32 items-center justify-center">
        <div class="text-nowrap text-xs lg:text-base z-10">实验室概况</div>
        <el-icon class="relative ml-2 z-0"
          ><ArrowDown class="hidden z-0 md:block"
        /></el-icon>
      </div>
      <div class="flex h-full w-32 items-center justify-center">
        <div class="text-nowrap text-xs lg:text-base z-10">最新动态</div>
        <el-icon class="relative ml-2 z-0"
          ><ArrowDown class="hidden z-0 md:block"
        /></el-icon>
      </div>
      <div class="flex h-full w-32 items-center justify-center">
        <div class="text-nowrap text-xs lg:text-base z-10">活动安排</div>
        <el-icon class="relative ml-2 z-0"
          ><ArrowDown class="hidden z-0 md:block"
        /></el-icon>
      </div>
      <div class="flex h-full w-32 items-center justify-center">
        <div class="text-nowrap text-xs lg:text-base z-10">文件下载</div>
        <el-icon class="relative ml-2 z-0"
          ><ArrowDown class="hidden z-0 md:block"
        /></el-icon>
      </div>
      <div class="flex h-full w-32 items-center justify-center">
        <div class="text-nowrap text-xs lg:text-base z-10">网上报名</div>
        <el-icon class="relative ml-2 z-0"
          ><ArrowDown class="hidden z-0 md:block"
        /></el-icon>
      </div>
    </div>

    <button
      class=" xl:font-bold xl:text-lg right-12 mr-4 h-6 w-16 items-center justify-center text-nowrap rounded-lg bg-ist-blue-500 text-xs text-white lg:absolute lg:h-8 lg:w-24 lg:text-base xl:bg-white xl:text-ist-blue-700"
      @click="UserInfoStore.isLogined = !UserInfoStore.isLogined"
    >
      登录
    </button>
  </div>
</template>

<script lang="ts" setup>
import { useUserInfoStore } from "@/stores/userInfo";

const UserInfoStore = useUserInfoStore();
</script>

<style scoped>
* {
  overflow: hidden;
}
</style>
