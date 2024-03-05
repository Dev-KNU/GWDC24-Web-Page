import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LotteryView from '@/views/LotteryView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: HomeView
        }, {
            path: '/random',
            name: 'Lottery',
            component: LotteryView
        }, {
            path: '/:not_found',
            name: 'NotFound',
            redirect: '/'
        }
    ]
})

export default router
