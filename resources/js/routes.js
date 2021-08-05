import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    //login
    {
        path: '/login',
        name: 'login',
        component: () => import('./views/auth/login'),
    },
    {
        path: '*',
        name: 'notFound',
        component: () => import('./views/notFound'),
    },
    //version
    {
        path: '/version',
        name: 'version',
        component: () => import('./views/version/index'),
    },
    //home
    {
        path: '/home',
        name: 'home',
        component: () => import('./views/home/index'),
    },
    {
        path: '/my-account',
        name: 'my-account',
        component: () => import('./views/auth/my-account'),
    },
    //faf
    {
        path: '/faf',
        name: 'faf',
        component: () => import('./views/faf/index'),
    },
    {
        path: '/faf/create',
        name: 'faf.create',
        component: () => import('./views/faf/create'),
    },
    //leagues
    {
        path: '/leagues',
        name: 'leagues',
        component: () => import('./views/leagues/index'),
    },
    {
        path: '/leagues/create',
        name: 'leagues.create',
        component: () => import('./views/leagues/create'),
    },
    {
        path: '/leagues/:id/edit',
        name: 'leagues.update',
        component: () => import('./views/leagues/update'),
    },
    //clubs
    {
        path: '/clubs',
        name: 'clubs',
        component: () => import('./views/clubs/index'),
    },
    {
        path: '/clubs/create',
        name: 'clubs.create',
        component: () => import('./views/clubs/create'),
    },
]

const router = new VueRouter({
    mode: 'history',
    routes
})
export default router
