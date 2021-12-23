<template>
    <div>
        <v-card flat color="#F4F5FE">
            <v-img src="/images/carte.svg" height="200">
                <v-app-bar flat color="rgba(0, 0, 0, 0)">
                    <v-icon color="white">mdi-logout</v-icon>
                    <v-toolbar-title @click="logout" class="white--text pl-0"
                                     style="font-size: 15px;cursor: pointer">Log out
                    </v-toolbar-title>
                    <v-spacer></v-spacer>
                    <span class="white--text" style="font-size: 14px">Supper admin</span>
                </v-app-bar>
                <v-card-title class="white--text mt-8">
                    <v-avatar size="56">
                        <img alt="user"
                             src="https://cdn.pixabay.com/photo/2020/06/24/19/12/cabbage-5337431_1280.jpg">
                    </v-avatar>
                    <p class="ml-3">Oussama seddiki <small style="font-size: 12px">00001</small></p>
                </v-card-title>
            </v-img>
        </v-card>
        <h4 class="my-4 ml-3"> Recent activities</h4>
    </div>
</template>

<script>
export default {
    name: 'right-sidebar',
    data() {
        return {}
    },
    methods: {
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

</style>
