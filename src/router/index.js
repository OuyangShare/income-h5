import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('../pages/retrospect/index.vue'),
    },
    {
        path: '/retrospect',
        name: 'retrospect',
        component: () => import('../pages/retrospect/index.vue'),
    },
    {
        path: '/commodity',
        name: 'commodity',
        component: () => import('../pages/commodity/index.vue'),
    },
    {
        path: '/overseas',
        name: 'overseas',
        component: () => import('../pages/overseas/index.vue'),
    },

    {
        path: '/detection',
        name: 'detection',
        component: () => import('../pages/detection/index.vue'),
    },
    {
        path: '/quarantine',
        name: 'quarantine',
        component: () => import('../pages/quarantine/index.vue'),
    },
    {
        path: '/clearance',
        name: 'clearance',
        component: () => import('../pages/clearance/index.vue'),
    },
    {
        path: '/logistics',
        name: 'logistics',
        component: () => import('../pages/logistics/index.vue'),
    },
    {
        path: '/circulation',
        name: 'circulation',
        component: () => import('../pages/circulation/index.vue'),
    },
    {
        // 防伪信息
        path: '/security',
        name: 'security',
        component: () => import('../pages/security/index.vue'),
    },
    {
        path: '/aboutus',
        name: 'aboutus',
        component: () => import('../pages/aboutus/index.vue'),
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
