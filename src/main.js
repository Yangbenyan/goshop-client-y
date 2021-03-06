
/* 引入库模块 */
import Vue from 'vue';
import {Button} from 'mint-ui';
import VueLazyload from 'vue-lazyload';

/* 引入文件模块 */
import App from './App.vue';
import router from './router';
import store from './store';
import loading from './common/imgs/loading.gif';
import './mock/mockServer';     // 加载mockServer
import './filters'      // 加载过滤器

// 注册全局组件标签
Vue.component(Button.name, Button)    // <mt-Button>

// 图片懒加载
Vue.use(VueLazyload, {    // 内部自定义一个指令v-lazy
  loading
})

new Vue({
  el: '#app',
  render: h => h(App),
  router,     // 使用vue-router
  store       // 使用vuex
})