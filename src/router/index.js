import { createRouter, createWebHashHistory } from 'vue-router'

import Home from '../pages/home.vue'
import ContactIndex from '../pages/contact-index.vue'
import StatsIndex from '../pages/stats-index.vue'
import ContactEdit from '../pages/contact-edit.vue'

const routerOptions = {
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            component: Home,
        },
        {
            path: '/contact/edit/:contactId?',
            component: ContactEdit,
        },
        {
            path: '/contact/:contactId?',
            component: ContactIndex,
        },
        {
            path: '/stats',
            component: StatsIndex,
        },
    ],
}
const router = createRouter(routerOptions)

export default router
