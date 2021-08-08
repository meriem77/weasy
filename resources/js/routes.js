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
    {
        path: '/clubs/:id/edit',
        name: 'clubs.update',
        component: () => import('./views/clubs/update'),
    },
    //roles
    {
        path: '/roles',
        name: 'roles',
        component: () => import('./views/roles/index'),
    },
    {
        path: '/roles/create',
        name: 'roles.create',
        component: () => import('./views/roles/create'),
    },
    {
        path: '/roles/:id/edit',
        name: 'roles.update',
        component: () => import('./views/roles/update'),
    },
]

const router = new VueRouter({
    mode: 'history',
    routes
})
export default router
