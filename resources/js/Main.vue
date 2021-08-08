<template>
    <v-app>
        <navigation v-if="$store.state.isLoggedIn"/>
        <error/>
        <success/>
        <router-view/>
        <app-footer v-if="$store.state.isLoggedIn"/>
    </v-app>
</template>
<script>


import Error from "./components/snackbar/error";
import Success from "./components/snackbar/success";
import Navigation from "./components/navigation";
import AppFooter from "./components/appFooter";

export default {
    components: {AppFooter, Success, Error, Navigation}
}
</script>
