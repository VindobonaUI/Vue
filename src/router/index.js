import Vue from "vue";
import Router from "vue-router";
import Home from "@/views/Home.vue";
import Inputs from "@/views/Inputs.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/inputs",
      name: "inputs",
      component: Inputs
    },
    { path: "*", name: "not-found-pattern", redirect: { name: "home" } }
  ]
});
