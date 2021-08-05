<template>
    <div>
        <v-row justify="center" class="mt-15">
            <v-col cols="12" lg="6" md="8">
                <v-alert v-if="errors" prominent type="error" class="my-3">
                    <v-row align="center">
                        <v-col class="grow">
                            {{ errors }}
                        </v-col>
                    </v-row>
                </v-alert>
                <form @submit.prevent="login">
                    <v-card>
                        <v-card-text>
                            <div class="my-5">
                                <v-row>
                                    <v-col cols="12" lg="6" md="6">
                                        <img src="assets/auth/login-rafiki.png" width="100%" style="margin-top: -60px"/>
                                    </v-col>
                                    <v-col cols="12" lg="6" md="6">
                                        <v-text-field v-model="form.email" outlined label="Email *" required
                                                      type="email"></v-text-field>
                                        <v-text-field v-model="form.password" outlined label="Mot de passe *" required
                                                      type="password"></v-text-field>
                                        <v-btn :loading="loading" type="submit" color="primary" large block>Connexion
                                        </v-btn>
                                    </v-col>
                                </v-row>
                                <div class="mt-5">
                                    <v-row>
                                        <v-col cols="12" lg="6" md="6">
                                            <h4 class="text-lg-left text-md-left text-center">
                                                © <a href="https://kaiztech.co" target="_blank">kaiztech.co</a>
                                                2021 - Tous droits réservés. </h4>
                                        </v-col>
                                        <v-col cols="12" lg="6" md="6">
                                            <h4 class="text-lg-right text-md-right text-center">V 0.0.1</h4>
                                        </v-col>
                                    </v-row>
                                </div>
                            </div>
                        </v-card-text>
                    </v-card>
                </form>
            </v-col>
        </v-row>
        <v-overlay :value="overlay" opacity="1" color="white">
            <v-progress-circular indeterminate size="50" color="#036358" width="8"></v-progress-circular>
        </v-overlay>
    </div>
</template>
<script>
export default {
    data() {
        return {
            loading: false,
            form: {},
            errors: '',
            overlay: false,
        }
    },
    methods: {
        async login() {
            this.overlay = true
            this.loading = true
            this.errors = ''
            axios.post('/login', this.form).then((response) => {
                this.loading = false
                if (response.data.user) {
                    axios.defaults.headers.common = {
                        'Authorization': `Bearer ` + response.data.user.token
                    }
                    this.$store.dispatch('createUserAuth', response.data.user)
                    this.$store.dispatch('isLoggedIn', true)
                    this.$router.push({name: 'home'})
                }
            }).catch(error => {
                this.overlay = false
                this.loading = false
                this.errors = error.response.data.message
            })
        }
    }
}
</script>
