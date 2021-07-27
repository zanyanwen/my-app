import {
    createRouter,
    createWebHistory
} from "vue-router";

const routes = [{
    path: "/",
    name: "Home",
    component: () => import("@/views/Home.vue"),
},
{
    path: "/partTwo",
    component: () => import("@/views/partTwo/index.vue"),
    children: [
        {
            path: 'one',
            component: import("@/views/partTwo/Chapter1.vue"),
        }
    ]

},
{
    path: "/partThree",
    component: () => import("@/views/partThree/index.vue"),
    children: [
        {
            path: 'one',
            component: import("@/views/partThree/ChapterOne.vue"),
        }
    ]
},
];

export default createRouter({
    history: createWebHistory(),
    routes,
});