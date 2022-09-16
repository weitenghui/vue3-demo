export const baseRoutes = [
  {
    path: "/",
    name: "home",
    meta: {
      title: "首页",
    },
    component: () => import("@/pages/index/index"),
  },
  {
    path: "/login",
    name: "login",
    meta: { title: "登录" },
    component: () => import("@/pages/login/index.vue"),
  },
  {
    path: "/404",
    name: "notFound",
    meta: { title: 404 },
    component: () => import("@/pages/404"),
  },
  {
    path: "/:catchAll(.*)",
    meta: { title: 404 },
    redirect: "/404",
  },
];

export const notFound = [
  {
    path: "/404",
    name: "notFound",
    meta: { title: 404 },
    component: () => import("@/pages/404"),
  },
  {
    path: "/:catchAll(.*)",
    meta: { title: 404 },
    redirect: "/404",
  },
];

export const asyncRoutes = [];
