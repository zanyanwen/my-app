import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";


// import Antd from 'ant-design-vue';
// import 'ant-design-vue/dist/antd.css';

const myApp = createApp(App)
myApp.use(store)
myApp.use(router)
// myApp.use(Antd)
myApp.mount("#app");
