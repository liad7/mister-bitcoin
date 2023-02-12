import { createRouter, createWebHashHistory } from 'vue-router'

import HomeView from '../pages/HomeView.vue'
import ContactIndex from '../pages/contact-index.vue'

const routerOptions = {
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            component: HomeView,
        },
        {
            path: '/contact/:contactId?',
            component: ContactIndex,
        },
    ],
}
const router = createRouter(routerOptions)

export default router
