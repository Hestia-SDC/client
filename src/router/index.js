import { createRouter, createWebHistory } from "vue-router";
import GoogleMap from "../views/GoogleMap.vue";

const routes = [
  {
    path: "/",
    name: "Main",
    component: GoogleMap,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
