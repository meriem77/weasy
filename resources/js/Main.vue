<template>
    <v-app>
        <navigation v-if="$store.state.isLoggedIn"/>
        <v-main>
            <error/>
            <success/>
            <router-view/>
        </v-main>
    </v-app>
</template>
<script>


import Error from "./components/snackbar/error";
import Success from "./components/snackbar/success";
import Navigation from "./components/navigation";

export default {
    components: {Success, Error, Navigation}
}
</script>
