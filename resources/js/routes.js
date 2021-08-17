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
    //version
    {
        path: '/version',
        name: 'version',
        component: () => import('./views/version/index'),
        meta: {
            title: 'Version'
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
    //faf
    {
        path: '/faf',
        name: 'faf',
        component: () => import('./views/faf/index'),
        meta: {
            title: 'Faf'
        }
    },
    //leagues
    {
        path: '/leagues',
        name: 'leagues',
        component: () => import('./views/leagues/index'),
        meta: {
            title: 'Ligues'
        }
    },
    {
        path: '/leagues/create',
        name: 'leagues.create',
        component: () => import('./views/leagues/create'),
        meta: {
            title: 'Ajouter une ligue'
        }
    },
    {
        path: '/leagues/:id/edit',
        name: 'leagues.update',
        component: () => import('./views/leagues/update'),
        meta: {
            title: 'Modifier une ligue'
        }
    },
    //clubs
    {
        path: '/clubs',
        name: 'clubs',
        component: () => import('./views/clubs/index'),
        meta: {
            title: 'Clubs'
        }
    },
    {
        path: '/clubs/create',
        name: 'clubs.create',
        component: () => import('./views/clubs/create'),
        meta: {
            title: 'Ajouter un club'
        }
    },
    {
        path: '/clubs/:id/edit',
        name: 'clubs.update',
        component: () => import('./views/clubs/update'),
        meta: {
            title: 'Modidier un club'
        }
    },
    //roles
    {
        path: '/roles',
        name: 'roles',
        component: () => import('./views/roles/index'),
        meta: {
            title: 'Roles'
        }
    },
    {
        path: '/roles/create',
        name: 'roles.create',
        component: () => import('./views/roles/create'),
        meta: {
            title: 'Ajouter un role'
        }
    },
    {
        path: '/roles/:id/edit',
        name: 'roles.update',
        component: () => import('./views/roles/update'),
        meta: {
            title: 'Modifier un role'
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
