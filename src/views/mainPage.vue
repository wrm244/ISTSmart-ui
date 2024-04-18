<template>
  <div
    id="mainTop"
    class="flex h-screen w-full flex-col bg-building-outline bg-left-bottom bg-no-repeat"
  >
    <div
      class="absolute -right-[1290px] -top-[1150px] -z-10 hidden h-[2000px] w-[2000px] bg-login-bg bg-contain bg-left-bottom xl:block"
    ></div>
    <Nav></Nav>
    <div
      class="flex h-full w-full flex-1 flex-col items-center lg:flex-row lg:items-start lg:justify-center lg:gap-16 xl:justify-between"
    >
      <div
        class="items-center justify-center text-nowrap text-center text-4xl font-semibold leading-normal text-ist-blue-800 md:mt-12 lg:mt-32 lg:text-6xl lg:leading-loose xl:ml-8 xl:mt-52 xl:text-7xl 2xl:mt-64 2xl:text-6xl"
      >
        欢迎报名IST<br />人工智能实验室
      </div>
      <NewNotice
        class="hidden 2xl:mt-44 2xl:block"
        :data="newNoticeList"
      ></NewNotice>

      <div
        class="mt-8 rounded-lg bg-ist-blue-900 px-4 py-4 md:mt-12 xl:mt-28 xl:bg-transparent 2xl:mr-2"
      >
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

  <div id="picture">
    <Banner
      class="mt-8"
      title="IST人工智能实验室项目图片"
      subtitle="PICTURE"
    ></Banner>
    <PictureList class="mt-12"></PictureList>
  </div>

  <div id="footer">
    <Footer class="mt-8"></Footer>
  </div>
</template>

<script lang="ts" setup>
import Nav from "@/components/nav.vue";
import NewNotice from "@/components/newsNotice/newNotice.vue";
import { type TypeNews } from "@/components/newsNotice/interface";
import Login from "@/components/login.vue";
import UserInfo from "@/components/userInfo.vue";
import News from "@/components/news.vue";
import NoticeList from "@/components/noticeList.vue";
import Banner from "@/components/banner/banner.vue";
import PictureList from "@/components/pitureList/pictureList.vue";
import Footer from "@/components/footer.vue";

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

<style scoped>
* {
  overflow: hidden;
}
</style>
