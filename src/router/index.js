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
        path: "/setting",
        name: "Setting",
        component: () => import("@/views/Setting.vue"),
    },
    {
        path: "/one",
        name: "One",
        component: () => import("@/views/one/index.vue"),
    },
    {
        path: "/two",
        name: "Two",
        component: () => import("@/views/two/index.vue"),
    },
    {
        path: "/vue",
        name: "Vue",
        component: () => import("@/views/vue/index.vue"),
    },
    {
        path: "/partTwo/chapterOne",
        name: "chapterOne",
        component: () => import("@/views/partTwo/ChapterOne/index.vue"),
    },
];

export default createRouter({
    history: createWebHistory(),
    routes,
});