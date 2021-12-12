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
                    <v-col lg="8" cols="12" md="8">
                        <form @submit.prevent="createRole">
                            <v-card>
                                <v-card-title class="text--secondary">
                                    Ajouter un role
                                </v-card-title>
                                <v-divider></v-divider>
                                <v-card-text>
                                    <v-row>
                                        <v-col cols="12" lg="12" md="12">
                                            <v-text-field :error-messages="validateErrMessages.name"
                                                          v-model="form.name"
                                                          outlined dense label="Nom *"></v-text-field>
                                        </v-col>
                                        <v-col cols="12" lg="12" md="12">
                                            <v-textarea rows="2" :error-messages="validateErrMessages.description"
                                                        label="Description"
                                                        v-model="form.description"
                                                        outlined dense></v-textarea>
                                        </v-col>
                                    </v-row>
                                    <div class="my-2">
                                        <v-btn color="primary" type="submit" :loading="btnLoading">
                                            <v-icon left>mdi-content-save</v-icon>
                                            Enregistrer
                                        </v-btn>
                                        <v-btn color="secondary ml-2" to="/roles">
                                            <v-icon left>mdi-cancel</v-icon>
                                            Annuler
                                        </v-btn>
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
            validateErrMessages: '',
            btnLoading: false,
            breadcrumbs: [
                {
                    text: 'Accueil',
                    disabled: false,
                    to: '/home'
                },
                {
                    text: 'Roles',
                    disabled: false,
                    to: '/roles',
                    exact: true
                },
                {
                    text: 'Ajouter un role',
                    disabled: true,
                },
            ],
            form: {}
        }
    },
    methods: {
        createRole() {
            this.validateErrMessages = ''
            this.btnLoading = true
            axios.post('/roles', this.form).then(() => {
                this.clearForm()
                this.$error = false
                this.btnLoading = false
                this.$success = true
            }).catch(error => {
                this.$error = true
                this.$success = false
                this.validateErrMessages = error.response.data.errors
                this.btnLoading = false
            })
        },
        clearForm() {
            this.form.name = ''
            this.form.description = ''
        },
    }
}
</script>
