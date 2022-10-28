// import { createWebHistory, createRouter } from "vue-router";
// import ContactBook from "@/views/ContactBook.vue";
// const routes = [
//     {
//         path: "/",
//         name: "contactbook",
//         component: ContactBook,
//     },

//     {
//         path: "/contacts/create",
//         name: "contact.add",
//         component: () => import("@/views/ContactAdd.vue"),
//         props: true 
//     },

//     {
//         path: "/contacts/:id",
//         name: "contact.edit",
//         component: () => import("@/views/ContactEdit.vue"),
//         props: true
//     },



//     {
//         path: "/:pathMatch(.*)*",
//         name: "notFound",
//         component: () => import("@/views/NotFound.vue"),
//     },
// ];
// const router = createRouter({
//     history: createWebHistory(import.meta.env.BASE_URL),
//     routes,
// });

// export default router;

import { createWebHistory, createRouter } from "vue-router";
import ContactBook from "@/views/ContactBook.vue";
const routes = [
    {
        path: "/",
        name: "contactbook",
        component: ContactBook,
    },

    {
        path: "/:pathMatch(.*)*",
        name: "notFound",
        component: () => import("@/views/NotFound.vue"),
        path: "/contact/create",
        name: "contact.add",
        component: () => import("@/views/ContactAdd.vue"),
        props: true,
    },

    {
        path: "/contacts/:id",
        name: "contact.edit",
        component: () => import("@/views/ContactEdit.vue"),
        props: true,
    },
    {
        path: "/:pathMatch(.*)*",
        name: "notfound",
        component: () => import("@/views/NotFound.vue"),
    },
];
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

export default router;