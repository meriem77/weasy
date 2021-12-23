import Vue from 'vue'
import VueRouter from 'vue-router'
import store from "./store/index";

Vue.use(VueRouter)

const routes = [
    //login
    {
        path: '/login',
        name: 'login',
        component: () => import('./views/auth/login'),
        meta: {
            title: 'Login'
        }
    },
    {
        path: '*',
        name: 'notFound',
        component: () => import('./views/notFound'),
        meta: {
            title: 'Not found!'
        }
    },
    {
        path: '/my-account',
        name: 'my-account',
        component: () => import('./views/auth/my-account'),
        meta: {
            title: 'My account'
        }
    },
    //admins
    {
        path: '/admins',
        name: 'admins',
        component: () => import('./views/admins/index'),
        meta: {
            title: 'Admins'
        }
    },
    {
        path: '/admins/create',
        name: 'admins.create',
        component: () => import('./views/admins/create'),
        meta: {
            title: 'Add admin'
        }
    },
    //partners
    {
        path: '/partners',
        name: 'partners',
        component: () => import('./views/partners/index'),
        meta: {
            title: 'Partners'
        }
    },
    {
        path: '/partners/create',
        name: 'partners.create',
        component: () => import('./views/partners/create'),
        meta: {
            title: 'Add partner'
        }
    },
]
const router = new VueRouter({
    mode: 'history',
    routes
})
router.beforeEach((to, from, next) => {
    const publicPages = ['/login'];
    const authRequired = !publicPages.includes(to.path);
    const loggedIn = store.state.isLoggedIn;
    if (authRequired && !loggedIn) {
        next('/login');
    } else if (!authRequired && loggedIn) {
        next('/home');
    } else {
        next()
    }
});
router.beforeEach((to, from, next) => {
    document.title = process.env.MIX_APP_NAME + ' | ' + to.meta.title
    next()
})

export default router
