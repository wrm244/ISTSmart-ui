<template>
  <div
    id="mainTop"
    class="item flex h-[800px] w-full flex-col bg-left-bottom bg-no-repeat"
  >
    <div
      class="absolute -right-[1290px] -top-[1150px] z-0 h-[2000px] w-[2000px] bg-login-bg bg-contain bg-left-bottom"
    ></div>
    <Nav></Nav>
    <div
      class="bg-notice-bg flex w-full flex-1 justify-end bg-cover bg-no-repeat pt-32"
    >
      <div class="z-20 mr-6">
        <Login v-if="!UserInfoStore.isLogined"></Login>
        <UserInfo v-if="UserInfoStore.isLogined"></UserInfo>
      </div>
    </div>
  </div>
  <div id="notice" class="-translate-y-24">
    <div
      class="z-20 flex h-24 w-[250px] items-center justify-center bg-ist-blue-900 font-mono text-4xl text-white"
    >
      实验室通知
    </div>
    <div class="flex">
      <div id="notice-list" class="relative w-1/4 bg-ist-blue-900">
        <NewNotice
          :hidden-title="true"
          :data="titles"
          date-position="center"
          textColor="text-white"
          date-bg-color="bg-ist-blue-700"
        ></NewNotice>
      </div>
      <div id="notice-content" class="w-3/4">
        <NoticeDetail></NoticeDetail>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from "vue";
import Nav from "@/components/nav.vue";
import { useUserInfoStore } from "@/stores/userInfo";
import Login from "@/components/login.vue";
import UserInfo from "@/components/userInfo.vue";
import NewNotice from "@/components/newsNotice/newNotice.vue";
import NoticeDetail from "@/components/noticeDetail/noticeDetail.vue";

const UserInfoStore = useUserInfoStore();

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

<style lang="scss" scoped></style>
