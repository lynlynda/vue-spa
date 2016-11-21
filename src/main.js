import Vue from 'vue';
// 第三方库
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';

// 自定义组件
import App from './App';
import goods from 'components/goods/goods';
import ratings from 'components/ratings/ratings';
import seller from 'components/seller/seller';
import 'common/stylus/base.styl';

// 注册第三方库
Vue.use(VueRouter);
Vue.use(VueResource);

let app = Vue.extend(App);

let router = new VueRouter({
  linkActiveClass: 'active'
});
router.map({
  '/goods': {
    component: goods
  }
});
router.map({
  '/ratings': {
    component: ratings
  }
});
router.map({
  '/seller': {
    component: seller
  }
});

router.start(app, '#app');
router.go('/goods');