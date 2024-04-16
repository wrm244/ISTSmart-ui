<template>
  <Banner title="实验室安排" subtitle="NEWS"></Banner>

  <div class="flex flex-1 items-center justify-around">
    <div class="flex flex-col justify-center px-16">
      <div class="text-4xl font-thin tracking-widest">GUET</div>
      <div class="h-96 bg-list-banner bg-contain bg-left bg-no-repeat"></div>
      <div class="my-8 flex flex-col">
        <div class="text-2xl font-bold">IST智能实验室介绍</div>
        <div class="w-[40rem] font-thin tracking-wider">
          桂林电子科技大学坐落于世界著名的风景游览城市和中国历史文化名城桂林市，是工业和信息化部与广西壮族自治区人民政府共建高校、国家国防科技工业局与广西壮族自治区人民政府共建高校、国家“中西部高校基础能力建设工程”入选高校。学校是全国四所电子科技大学之一，始建于1960年，1980年经国务院批准成立桂林电子工业学院，2006年更名为桂林电子科技大学。
        </div>
      </div>
    </div>
    <div class="flex flex-col gap-4">
      <div class="flex justify-end">
        <div class="flex items-center text-sm text-gray-400">
          <div class="cursor-pointer hover:text-gray-500">更多</div>
          <el-icon><ArrowRight /></el-icon>
        </div>
      </div>
      <div class="flex h-full items-end gap-4">
        <NewNotice :flexType="'col'" :data="newNoticeList"></NewNotice>
        <NewNotice
          :flexType="'col'"
          :data="newNoticeList"
          :hiddenTitle="true"
        ></NewNotice>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from "vue";
import NewNotice from "@/components/newsNotice/newNotice.vue";
import { type TypeNews } from "@/components/newsNotice/interface";
import Banner from "@/components/banner/banner.vue"

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
