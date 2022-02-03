<template>
    <div>
        <v-navigation-drawer floating="floating" app class="pt-4" color="#ECEDF6" mini-variant>
            <v-list-item class="home px-2" to="/home">
                <div style="margin-left: -26px" >
                    <img src="/images/logo.png" height="90" width="90">
                </div>
            </v-list-item>
<!--            <v-list-item to="/admins" class="mt-15" style="margin-left: -3px">-->
<!--                <div>-->
<!--                    <img src="/images/Union 3.svg" height="30" width="30">-->
<!--                </div>-->
<!--            </v-list-item>-->
            <v-list-item to="/transactions" class="mt-5" style="margin-left: -3px">
                <div>
                    <img src="/images/partners.svg" height="30" width="30">
                </div>
            </v-list-item>
            <v-list-item to="/users" class="mt-5" style="margin-left: -3px">
                <div>
                    <img src="/images/people.svg" height="30" width="30">
                </div>
            </v-list-item>
            <v-list-item to="/traders" class="mt-5" style="margin-left: -3px">
                <div>
                    <img src="/images/Ecommerce.svg" height="30" width="30">
                </div>
            </v-list-item>
            <v-list-item to="/stores" class="mt-5" style="margin-left: -3px">
                <div>
                    <img src="/images/store.png" height="30" width="30">
                </div>
            </v-list-item>

        </v-navigation-drawer>
        <v-overlay :value="overlay" opacity="1" color="white">
            <v-progress-circular indeterminate size="50" color="#036358" width="8"></v-progress-circular>
        </v-overlay>
    </div>
</template>
<script>
export default {
    data() {
        return {
            overlay: false,
            mini: true,
            APP_NAME: process.env.MIX_APP_NAME,
        }
    },
    methods: {
        theme() {
            this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
        },
        logout() {
            this.overlay = true
            axios.post('/logout').then(() => {
                this.$store.dispatch('createUserAuth', '')
                this.$store.dispatch('isLoggedIn', false)
                this.overlay = false
                this.$router.push({name: 'login'})
            }).catch(err => {
                this.overlay = false
                console.log(err)
            })
        },
    }
}
</script>
<style scoped>
.v-list-item--active.v-list-item.v-list-item--link.theme--light {
    background: none;
    border-right: solid #443b3b;
}
.home {
    border-right: none !important;
}
.v-application a {
    color: #ECEDF6;
}
</style>
