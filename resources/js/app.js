import Vue from 'vue'
import vuetify from "../plugins/vuetify"
import Main from "./Main"
import router from "./routes"
import store from './store/auth'
import './globalVariables'

window.axios = require('axios')
axios.defaults.baseURL = '/api/';
axios.defaults.headers.common = {
    'Content-Type': "application/json",
    'Accept': "application/json",
    'Authorization': `Bearer ` + store.state.user.token
}
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

const app = new Vue({
    el: '#app',
    router,
    vuetify,
    store,
    render: h => h(Main)
});
