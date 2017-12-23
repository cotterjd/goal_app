import Vue from "vue";
import VueRouter from "vue-router";
import VueMaterial from "vue-material";
import router from "./routes";
import header from "./components/header/header.vue";
import menu from "./components/menu/mainMenu.vue";
import registerServiceWorker from "./registerServiceWorker";
import AwesomeMask from "awesome-mask";
import BlockUI from "vue-blockui";
import Vue2Filters from "vue2-filters";
import VueHighcharts from 'vue-highcharts';
import Highcharts from 'highcharts';
import loadSunburst from 'highcharts/modules/sunburst.js';

loadSunburst(Highcharts);

Vue.use(VueHighcharts);
Vue.use(Vue2Filters);
Vue.use(BlockUI);
Vue.directive("masker", AwesomeMask);
Vue.use(VueRouter);

require("./scss/app.scss");
require("./scss/vue-material.css");
require("./images/ajax-loading.gif");
require("../index.html");
require("../manifest.json");

Vue.component("foobar-header", header);
Vue.component("main-sidenav", menu);
Vue.use(require("vue-moment"));

registerServiceWorker();
document.addEventListener("DOMContentLoaded", function() {
  Vue.use(VueMaterial);
  Vue.material.registerTheme("default", {
    primary: "indigo",
    accent: { color: "yellow", hue: 900 },
    warn: "red"
  });
  new Vue({
    el: "#vue-app",
    router
  });
});

String.prototype.formatCurrency = function () {
	if (isNaN(this)) return this
	return '$' + Number(this).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,')
}
String.prototype.contains = function (str) {
	return this.indexOf(str) !== -1
}
