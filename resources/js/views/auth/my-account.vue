<template>
    <div>
        <v-main>
            <v-container fluid>
                <v-card class="mb-3">
                    <v-breadcrumbs :items="breadcrumbs" large>
                        <template v-slot:divider>
                            <v-icon>mdi-chevron-right</v-icon>
                        </template>
                    </v-breadcrumbs>
                </v-card>
                <v-row>
                    <v-col lg="8" sm="12">
                        <form @submit.prevent="update">
                            <v-card>
                                <v-card-text>
                                    <v-row>
                                        <v-col lg="6" sm="12" cols="12">
                                            <v-text-field v-model="form.email"
                                                          :error-messages="validateErrMessages.email"
                                                          outlined dense label="Email *"></v-text-field>
                                            <v-text-field v-model="form.current_password"
                                                          :error-messages="validateErrMessages.current_password"
                                                          outlined dense
                                                          label="Ancien mot de passe *"></v-text-field>
                                            <v-text-field v-model="form.new_password"
                                                          :error-messages="validateErrMessages.new_password"
                                                          outlined dense
                                                          label="Nouveau mot de passe *"></v-text-field>
                                            <v-text-field v-model="form.new_confirm_password"
                                                          :error-messages="validateErrMessages.new_confirm_password"
                                                          outlined dense
                                                          label="Confirmer le mot de passe *"></v-text-field>
                                            <v-btn color="primary" type="submit" :loading="btnLoading">
                                                <v-icon left>mdi-content-save</v-icon>
                                                Enrigistrer
                                            </v-btn>
                                        </v-col>
                                        <v-col lg="6" sm="12" cols="12" class="text-right">
                                            <v-avatar tile size="300" style="margin-top: -30px">
                                                <v-img src="assets/images/profile.png"
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
                                    </v-row>
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
            breadcrumbs: [
                {
                    text: 'Accueil',
                    disabled: false,
                    to: '/home'
                },
                {
                    text: 'Mon compte',
                    disabled: true,
                },
            ],
            form: {
                email: this.$store.state.user.email,
                current_password: '',
                new_password: '',
                new_confirm_password: '',
            },
            validateErrMessages: '',
            btnLoading: false,
        }
    },
    methods: {
        update() {
            this.validateErrMessages = ''
            this.btnLoading = true
            axios.post('/account', this.form).then(res => {
                this.btnLoading = false
                this.$success = true
                this.$error = false
                this.clearForm()
            }).catch(err => {
                this.validateErrMessages = err.response.data.errors
                this.btnLoading = false
                this.$success = false
                this.$error = true
            })
        },
        clearForm() {
            this.form.current_password = ''
            this.form.new_password = ''
            this.form.new_confirm_password = ''
        }
    }
}
</script>
