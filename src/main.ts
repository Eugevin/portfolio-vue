import "normalize.css";

import Vue from "vue";
import App from "./App.vue";

import router from "./router";

import AOS from "aos";
import "aos/dist/aos.css";

// PAGES

Vue.config.productionTip = false;

new Vue({
  created() {
    AOS.init({
      offset: 250,
      duration: 500,
      once: true,
    });
  },
  router,
  render: (h) => h(App),
}).$mount("#app");
