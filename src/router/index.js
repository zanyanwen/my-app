import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/partOne",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/partOne/index.vue"),
      children:[
        {
          path:"one",
          component:()=> import(/* webpackChunkName: "about" */ "../views/partOne/index.vue"),
        }
      ]
  },
  {
    path: "/partTwo",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/partTwo/index.vue"),
      children:[
        {
          path:"one",
          component:()=> import(/* webpackChunkName: "about" */ "../views/partTwo/Chapter1.vue"),
        }
      ]
  },
  {
    path: "/partThree",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/partThree/index.vue"),
      children:[
        {
          path:"one",
          component:()=> import(/* webpackChunkName: "about" */ "../views/partThree/Chapter1.vue"),
        }
      ]
  },
  {
    path: "/partFour",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/partFour/index.vue"),
      children:[
        {
          path:"one",
          component:()=> import(/* webpackChunkName: "about" */ "../views/partOne/index.vue"),
        }
      ]
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
