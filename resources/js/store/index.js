import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex)

const store = new Vuex.Store({
    plugins: [createPersistedState()],
    state: {
        user: '',
        isLoggedIn: '',
    },
    mutations: {
        STORE_USER_AUTH: (state, userData) => {
            state.user = userData
        },
        IS_LOGGED_IN: (state, boolean) => {
            state.isLoggedIn = boolean
        },
        VERSION: (state, val) => {
            state.version = val
        },
    },
    actions: {
        createUserAuth({commit}, userData) {
            commit("STORE_USER_AUTH", userData);
        },
        isLoggedIn({commit}, boolean) {
            commit("IS_LOGGED_IN", boolean);
        },
    },
})
export default store
