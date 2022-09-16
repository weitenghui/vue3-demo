import { createApp } from 'vue'
import router from './router'
import store from './store'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.less'
import './assets/css/config.less'
import App from './App.vue'
import './router/permission'
import { message } from 'ant-design-vue';
const app = createApp(App)
app.config.productionTip = false
app.use(store)
app.use(router)
app.use(Antd);
app.provide('$message', message)
app.mount('#app')
