import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import ProductDetail from "../views/ProductDetail.vue";

const routes = [
  { path: "/", component: HomePage },
  { path: "/product/:id", component: ProductDetail, props: true },
  { path: "/cart", component: CartPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
