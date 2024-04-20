import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "mainPage",
      component: () => import("@/views/mainPage.vue"),
    },
    {
      path: "/notice",
      name: "notice",
      component: ()=> import("@/views/detailNotice.vue")
    }
  ],
});

export default router;
