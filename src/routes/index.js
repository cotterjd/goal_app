import VueRouter from "vue-router";
import add from "../components/pages/add/add.vue";
import home from "../components/pages/home/home.vue";
import store from "../store";

//TODO: 404 route
const routes = [
  { name: "home", path: "/", component: home },
  { name: "add", path: "/add", component: add },
];
const router = new VueRouter({
  mode: "history",
  routes // short for `routes: routes`
});
const publicPaths = {
    "home": "h"
  , "login": "l"
  , "activate": "a"
  , "reset": "r"
};
router.beforeEach((to, from, next) => {
  //if (to.matched.some(record => !record.meta.user)) {
  //  getCurrentUser()
  //    .then(u => {
  //      if(!u && !publicPaths[to.name]) {
  //        next({path: "/login"}); //TODO: maybe do some magic to redirect them after login
  //      } else {
  //        next(vm => {
  //          vm.user = u;
  //        });
  //      }
  //    })
  //    .catch(next);
  //} else {
    next();
  //}
});
export default router;
