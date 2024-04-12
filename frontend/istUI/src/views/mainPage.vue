<template>
  <div
    id="mainTop"
    class="item flex h-screen w-screen flex-col bg-building-outline bg-left-bottom bg-no-repeat"
  >
    <div
      class="absolute -right-[1270px] -top-[1150px] -z-10 h-[2000px] w-[2000px] bg-login-bg bg-contain bg-left-bottom"
    ></div>
    <Nav></Nav>
    <div class="mt-32 flex w-full flex-1 justify-around">
      <div
        class="text-ist-blue-800 mx-4 mt-12 text-nowrap text-7xl font-semibold leading-normal"
      >
        欢迎报名IST<br />人工智能实验室
      </div>
      <NewNotice class="mx-4"></NewNotice>
      <Login v-if="!UserInfoStore.isLogined" class="mx-4"></Login>
      <UserInfo v-if="UserInfoStore.isLogined" class="mx-4" />
    </div>
  </div>

  <div id="news"></div>

  <div id="noticeList"></div>

  <div id="picture"></div>

  <div id="footer"></div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import Nav from "@/components/nav.vue";
import NewNotice from "@/components/newNotice.vue";
import Login from "@/components/login.vue";
import UserInfo from "@/components/userInfo.vue";

import { useUserInfoStore } from "@/stores/userInfo";

const UserInfoStore = useUserInfoStore();
</script>

<style scoped></style>
