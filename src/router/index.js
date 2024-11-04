import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('../pages/retrospect/index.vue'),
    },
    {
        path: '/commodity',
        name: 'commodity',
        component: () => import('../pages/commodity/index.vue'),
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
