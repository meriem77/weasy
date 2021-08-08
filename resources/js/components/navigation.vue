<template>
    <div>
        <v-navigation-drawer floating="floating" v-model="drawer"
                             :clipped="$vuetify.breakpoint.lgAndUp" app>
            <v-list dense nav shaped>

                <v-list-item-group color="primary">

                    <v-list-item to="/home" class="mb-3">
                        <v-list-item-icon>
                            <v-icon>mdi-view-dashboard-outline</v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>
                            <v-list-item-title>Accueil</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>

                    <v-list-item to="/faf" class="mb-3">
                        <v-list-item-icon>
                            <v-icon>mdi-account-multiple-outline</v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>
                            <v-list-item-title>FAF</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>

                    <v-list-item to="/leagues" class="mb-3">
                        <v-list-item-icon>
                            <v-icon color="dark">mdi-soccer</v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>
                            <v-list-item-title>Ligues</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>

                    <v-list-item to="/clubs" class="mb-3">
                        <v-list-item-icon>
                            <v-icon color="dark">mdi-message-text-outline</v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>
                            <v-list-item-title>Clubs</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>

                    <v-list-item to="/roles" class="mb-3">
                        <v-list-item-icon>
                            <v-icon color="dark">mdi-lock</v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>
                            <v-list-item-title>Roles</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>

                    <v-list-item to="/version" class="mb-3">
                        <v-list-item-icon>
                            <v-icon color="dark">mdi-credit-card-refresh-outline</v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>
                            <v-list-item-title>Version</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list-item-group>
            </v-list>
            <template v-slot:append>
                <div class="pa-2 elevation-1" style="text-align: center">
                    <v-btn smal text fab icon @click="logout">
                        <v-icon>mdi-logout</v-icon>
                    </v-btn>
                    <v-btn smal text fab icon @click="theme">
                        <v-icon>{{ $vuetify.theme.dark ? 'mdi-brightness-4' : 'mdi-brightness-7' }}</v-icon>
                    </v-btn>
                    <v-btn smal text fab icon to="/my-account">
                        <v-icon>mdi-account-outline</v-icon>
                    </v-btn>
                </div>
            </template>
        </v-navigation-drawer>
        <v-app-bar :clipped-left="$vuetify.breakpoint.lgAndUp" app color="primary lighten-1" dark>
            <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
            <v-toolbar-title style="width: 300px" class="ml-0 pl-4">
        <span class="hidden-sm-and-down">
          Dashboard
        </span>
            </v-toolbar-title>
            <v-text-field flat solo-inverted hide-details prepend-inner-icon="mdi-magnify"
                          class="hidden-sm-and-down" label="Recherche..." placeholder="Recherche..."
            ></v-text-field>
            <v-spacer></v-spacer>

            <v-btn icon dark @click="theme">
                <v-icon>{{ $vuetify.theme.dark ? 'mdi-brightness-4' : 'mdi-brightness-7' }}</v-icon>
            </v-btn>
            <v-btn icon dark @click="logout">
                <v-icon>mdi-logout</v-icon>
            </v-btn>
            <v-btn icon large to="/my-account">
                <v-avatar size="38px" item>
                    <v-img src="https://lux-admin-pro.indielayer.com/images/avatars/avatar1.svg" alt="Vuetify"></v-img>
                </v-avatar>
            </v-btn>
        </v-app-bar>
        <v-overlay :value="overlay" opacity="1" color="white">
            <v-progress-circular indeterminate size="50" color="#036358" width="8"></v-progress-circular>
        </v-overlay>
    </div>
</template>

<script>
export default {
    data() {
        return {
            drawer: null,
            overlay: false,
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
            }).catch(error => {
                console.log(error)
                this.overlay = false
            })
        }
    }
}
</script>


