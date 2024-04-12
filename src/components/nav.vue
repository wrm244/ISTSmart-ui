<template>
  <div
    class="border-ist-blue-800 relative flex h-24 items-center justify-around border-t-4"
  >
    <div class="relative flex h-24 items-center">
      <div
        class="mx-8 h-full w-56 bg-GUET-logo bg-contain bg-center bg-no-repeat"
      ></div>
      <div
        class="mx-2 h-full w-16 bg-IST-logo bg-contain bg-center bg-no-repeat"
      ></div>
    </div>
    <div class="relative flex h-24 items-center">
      <div class="mx-4 flex w-32 items-center justify-center gap-2">
        <div>实验室概况</div>
        <el-icon class="relative top-px"><ArrowDown /></el-icon>
      </div>
      <div class="mx-4 flex w-32 items-center justify-center gap-2">
        <div>最新动态</div>
        <el-icon class="relative top-px"><ArrowDown /></el-icon>
      </div>
      <div class="mx-4 flex w-32 items-center justify-center gap-2">
        <div>活动安排</div>
        <el-icon class="relative top-px"><ArrowDown /></el-icon>
      </div>
      <div class="mx-4 flex w-32 items-center justify-center gap-2">
        <div>文件下载</div>
        <el-icon class="relative top-px"><ArrowDown /></el-icon>
      </div>
      <div class="mx-4 flex w-32 items-center justify-center gap-2">
        <div>网上报名</div>
        <el-icon class="relative top-px"><ArrowDown /></el-icon>
      </div>
    </div>
    <div
      class="text-ist-blue-800 mx-16 flex-nowrap text-nowrap rounded-lg bg-white font-semibold"
    >
      <button class="px-6 py-2" @click="UserInfoStore.isLogined = !UserInfoStore.isLogined">报名登录</button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useUserInfoStore } from "@/stores/userInfo";

const UserInfoStore = useUserInfoStore();
</script>

<style lang="scss" scoped></style>
