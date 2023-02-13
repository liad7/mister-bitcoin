import { createRouter, createWebHashHistory } from 'vue-router'

import HomeView from '../pages/HomeView.vue'
import ContactIndex from '../pages/contact-index.vue'
import StatsIndex from '../pages/stats-index.vue'
import ContactEdit from '../pages/contact-edit.vue'

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
        {
            path: '/contact/edit/:contactId?',
            component: ContactEdit,
        },
        {
            path: '/stats',
            component: StatsIndex,
        },
    ],
}
const router = createRouter(routerOptions)

export default router
