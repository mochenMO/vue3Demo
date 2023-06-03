import { createApp } from 'vue'
import App from './App.vue'//首页面
import router from './router'
import 'element-plus/dist/index.css' //全局样式
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import axios from './http/axios'                                     //////////
import  pinia from './utils/pinia'                                   //////////
import { TroisJSVuePlugin } from 'troisjs';


const app = createApp(App)
app.use(pinia) //挂载pinia
app.use(router) //挂载router


for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
app.use(TroisJSVuePlugin);
app.mount('#app') 

app.config.globalProperties.$axios = axios



