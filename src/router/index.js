import Vue from "vue";
import VueRouter from "vue-router";
import ContactList from "../components/contact-list/index.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/detail",
    name: "Detail",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../components/contact-detail/index.vue"
      )
  },
  {
    path: "*",
    name: "Home",
    component: ContactList
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
