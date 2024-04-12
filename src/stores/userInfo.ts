import { ref } from "vue";
import { defineStore } from "pinia";

export const useUserInfoStore = defineStore("counter", () => {
  //默认未登录
  const isLogined = ref<boolean>(false);

  return {
    isLogined
  }
});
