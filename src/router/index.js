import { createRouter, createWebHistory } from "vue-router"
import HomeView from "../views/HomeView.vue"

const routes = [
    {
        path: "/",
        name: "home",
        component: HomeView
    },
    {
        path: "/auth",
        component: () => import("@/views/auth/Index.vue"),
        meta: { auth: false },
        children: [
            {
                path: "login",
                name: "Auth.Login",
                component: () => import("@/views/auth/Login.vue")
            }
        ]

    },
    {
        path: "/accounts",
        name: "Accounts",
        component: () => import("@/views/Accounts.vue"),
        meta: { auth: false }
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
