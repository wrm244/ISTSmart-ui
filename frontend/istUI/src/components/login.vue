<template>
  <div class="min-w-470px flex flex-col gap-8">
    <div class="text-2xl text-white">登陆账号</div>
    <el-input v-model="account" placeholder="请输入用户名"></el-input>
    <el-input
      v-model="password"
      placeholder="请输入密码"
      type="password"
      show-password
    ></el-input>
    <div class="flex flex-row-reverse">
      <a class="text-sm text-ist-blue-200" herf="">忘记密码</a>
    </div>
    <el-button type="primary">登录</el-button>
    <div class="flex justify-center">
      <div class="text-sm text-ist-blue-200">还没有账号？</div>
      <a class="text-sm underline text-ist-blue-200" href="">去注册</a>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
const account = ref<string>("");
const password = ref<string>("");
</script>

<style scoped>
.el-input {
  @apply h-12;
}

.el-button {
  @apply h-12;
  @apply rounded-lg;
  @apply text-base;
}
</style>
