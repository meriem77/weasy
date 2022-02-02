import Vue from 'vue'
import vuetify from "../plugins/vuetify"
import Main from "./Main"
import router from "./routes"
import store from './store/index'
import './globalVariables'

Vue.component('pagination', require('laravel-vue-pagination'));
window.axios = require('axios')
axios.defaults.baseURL = 'https://dev.fun/api/v2/';
window.axios.defaults.withCredentials = true;
axios.defaults.headers.common = {
    'Content-Type': "application/json",
    'Accept': "application/json",
    'X-Requested-With': "XMLHttpRequest",
}
axios.interceptors.response.use(function (response) {
    return response
}, async function (error) {
    if (error.response.status === 401) {
        await store.dispatch('createUserAuth', '')
        await store.dispatch('isLoggedIn', false)
        await router.push({name: 'login'})
    }
    return Promise.reject(error)
})

new Vue({
    el: '#app',
    router,
    vuetify,
    store,
    render: h => h(Main)
});
