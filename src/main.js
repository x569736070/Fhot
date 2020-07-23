// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './index.vue'
import router from './router'

/*导入echarts*/
import echarts from 'echarts'
/*导入百度api*/
import BaiduMap from 'vue-baidu-map'

Vue.prototype.$echarts = echarts;
Vue.use(BaiduMap,{ak:'kTHIMKfxtNOzCzFvErGtbd0i2v1o3no9'});

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
