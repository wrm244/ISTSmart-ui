import "@/assets/style.css";
import "element-plus/dist/index.css";

import { createApp } from "vue";
import { createPinia } from "pinia";
import Elementplus from 'element-plus'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(Elementplus)
//全局注册Elementplus的Icon图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

app.mount("#app");
