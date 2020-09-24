import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import VueAnalytics from 'vue-analytics';
import VueHighlightJS from 'vue-highlightjs'

Vue.config.productionTip = false;

// Configuration VueAnalytics

Vue.use(VueAnalytics, {
  id: process.env.VUE_APP_ANALYTICS_ID,
  router
});


 
// Tell Vue.js to use vue-highlightjs
Vue.use(VueHighlightJS)

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
