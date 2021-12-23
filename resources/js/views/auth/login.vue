<template>
    <div>
        <v-main>
            <v-container fluid>
                <v-row justify="center" class="mt-15">
                    <v-col cols="12" lg="6" md="8">
                        <v-alert v-if="errors" prominent type="error" class="my-3">
                            <v-row align="center">
                                <v-col class="grow">
                                    {{ errors.email[0] }}
                                </v-col>
                            </v-row>
                        </v-alert>
                        <form @submit.prevent="login">
                            <v-card>
                                <v-card-text>
                                    <div class="my-5">
                                        <v-row>
                                            <v-col cols="12" lg="6" md="6">
                                                <v-avatar tile size="300" style="margin-top: -30px">
                                                    <v-img src="assets/images/login.webp" width="60%"
                                                           aspect-ratio="1">
                                                        <template v-slot:placeholder>
                                                            <v-row class="fill-height ma-0" align="center"
                                                                   justify="center">
                                                                <v-progress-circular
                                                                    indeterminate
                                                                    color="primary"
                                                                ></v-progress-circular>
                                                            </v-row>
                                                        </template>
                                                    </v-img>
                                                </v-avatar>
                                            </v-col>
                                            <v-col cols="12" lg="6" md="6">
                                                <v-text-field v-model="form.email" outlined label="Email *" required
                                                              type="email"></v-text-field>
                                                <v-text-field v-model="form.password" outlined label="Mot de passe *"
                                                              required
                                                              type="password"></v-text-field>
                                                <v-btn :loading="loading" type="submit" color="primary" large block>
                                                    Connexion
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
                                            </v-row>
                                        </div>
                                    </div>
                                </v-card-text>
                            </v-card>
                        </form>
                    </v-col>
                </v-row>
            </v-container>
        </v-main>
    </div>
</template>
<script>
export default {
    data() {
        return {
            loading: false,
            form: {},
            errors: '',
        }
    },
    methods: {
        login() {
            this.loading = true
            axios.get('/sanctum/csrf-cookie').then(() => {
                axios.post('/login', this.form).then(() => {
                    this.getUserAuth()
                }).catch(error => {
                    this.errors = error.response.data.errors;
                    this.loading = false
                })
            });
        },
        async getUserAuth() {
            try {
                let user = await axios.get('user')
                await this.$store.dispatch('createUserAuth', user.data)
                await this.$store.dispatch('isLoggedIn', true)
                await this.$router.push({name: 'admins'})
            } catch (e) {
                console.log(e)
            }
        },
    }
}
</script>
