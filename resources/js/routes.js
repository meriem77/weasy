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
            title: 'Connexion'
        }
    },
    {
        path: '*',
        name: 'notFound',
        component: () => import('./views/notFound'),
        meta: {
            title: 'Page non trouvée!'
        }
    },
    //home
    {
        path: '/home',
        name: 'home',
        component: () => import('./views/home/index'),
        meta: {
            title: 'Accueil'
        }
    },
    {
        path: '/my-account',
        name: 'my-account',
        component: () => import('./views/auth/my-account'),
        meta: {
            title: 'Mon compte'
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
            title: 'Ajouter admin'
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
