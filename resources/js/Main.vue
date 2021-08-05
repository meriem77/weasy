<template>
    <v-app>
        <navigation v-if="$store.state.isLoggedIn"/>
        <v-main>
            <v-container fluid>
                <error/>
                <success/>
                <router-view/>
            </v-container>
        </v-main>
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
