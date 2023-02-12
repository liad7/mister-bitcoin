import { createRouter, createWebHashHistory } from 'vue-router'

const routerOptions = {
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes: [
    ],
}
const router = createRouter(routerOptions)

export default router
