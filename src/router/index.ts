import Vue from "vue";
import VueRouter from "vue-router";

// PAGES

import Home from "@/views/Home.vue";
import Projects from "@/views/Projects.vue";
import About from "@/views/About.vue";
import Technologies from "@/views/Technologies.vue";
import Contacts from "@/views/Contacts.vue";
import Null from "@/views/Null.vue";

// LOGIC

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/projects",
    name: "Projects",
    component: Projects,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/technologies",
    name: "Technologies",
    component: Technologies,
  },
  {
    path: "/contacts",
    name: "Contacts",
    component: Contacts,
  },
  {
    path: "*",
    name: "Null",
    component: Null,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
