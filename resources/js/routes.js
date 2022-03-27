import Vue from 'vue'
import VueRouter from 'vue-router'
import store from "./store/index";

Vue.use(VueRouter)

const routes = [
    //login
    {
        path: '/login',
        name: 'login',
        component: () =>
            import ('./views/auth/login'),
        meta: {
            title: 'Login'
        }
    },
    //Home
    {
        path: '/home',
        name: 'home',
        component: () =>
            import ('./views/home/index'),
        meta: {
            title: 'Home'
        }
    },
    {
        path: '*',
        name: 'notFound',
        component: () =>
            import ('./views/notFound'),
        meta: {
            title: 'Not found!'
        }
    },

    //transations
    {
        path: '/transactions',
        name: 'Transactions',
        component: () =>
            import ('./views/transactions/index'),
        meta: {
            title: 'Transactions'
        }
    },
    //partners
    {
        path: '/transactions/partners',
        name: 'partners',
        component: () =>
            import ('./views/partners/index'),
        meta: {
            title: 'Partners'
        }
    },

    //PartnersUsers
    {
        path: '/transactions/users',
        name: 'partners users',
        component: () =>
            import ('./views/partners/userList'),
        meta: {
            title: 'Partners Users'
        }
    },
    //Users
    {
        path: '/users',
        name: 'users',
        component: () =>
            import ('./views/users/index'),
        meta: {
            title: 'Users'
        }
    },
    //Traders
    {
        path: '/traders',
        name: 'traders',
        component: () =>
            import ('./views/traders/index'),
        meta: {
            title: 'Traders'
        }
    },
    //Stores
    {
        path: '/stores',
        name: 'stores',
        component: () =>
            import ('./views/store/index'),
        meta: {
            title: 'Stores'
        }
    },
    //Ads
    {
        path: '/ads',
        name: 'ads',
        component: () =>
            import ('./views/ads/indx'),
        meta: {
            title: 'Ads'
        }
    },
    {
        path: '/ads/create',
        name: 'Ads Create',
        component: () =>
            import ('./views/ads/create'),
        meta: {
            title: 'Create'
        }
    },
    //Companies
    {
        path: '/company',
        name: 'companies',
        component: () =>
            import ('./views/company/index'),
        meta: {
            title: 'Companies'
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
});

export default router
