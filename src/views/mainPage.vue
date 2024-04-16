<template>
  <div
    id="mainTop"
    class="item flex h-screen w-full flex-col bg-building-outline bg-left-bottom bg-no-repeat"
  >
    <div
      class="absolute -right-[1290px] -top-[1150px] -z-10 h-[2000px] w-[2000px] bg-login-bg bg-contain bg-left-bottom"
    ></div>
    <Nav></Nav>
    <div class="mt-32 flex w-full flex-1 justify-around">
      <div
        class="xl:leading mt-12 text-nowrap text-4xl font-semibold leading-normal text-ist-blue-800 xl:text-7xl"
      >
        欢迎报名IST<br />人工智能实验室
      </div>
      <NewNotice :data="newNoticeList"></NewNotice>

      <div>
        <Login v-if="!UserInfoStore.isLogined"></Login>
        <UserInfo v-if="UserInfoStore.isLogined"></UserInfo>
      </div>
    </div>
  </div>

  <div id="news" class="h-screen w-full overflow-hidden">
    <News></News>
  </div>

  <div id="noticeList" class="h-screen w-full">
    <NoticeList></NoticeList>
  </div>

  <div id="picture"></div>

  <div id="footer"></div>
</template>

<script lang="ts" setup>
import Nav from "@/components/nav.vue";
import NewNotice from "@/components/newsNotice/newNotice.vue";
import { type TypeNews } from "@/components/newsNotice/interface";
import Login from "@/components/login.vue";
import UserInfo from "@/components/userInfo.vue";
import News from "@/components/news.vue";
import NoticeList from "@/components/noticeList.vue";

import { useUserInfoStore } from "@/stores/userInfo";
import { reactive } from "vue";

const UserInfoStore = useUserInfoStore();

const newNoticeList = reactive<Array<TypeNews>>([
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

<style scoped></style>
