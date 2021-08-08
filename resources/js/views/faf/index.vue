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
                <v-row v-if="dataLoading">
                    <v-col lg="4" md="4" cols="12">
                        <v-sheet color="lighten-4">
                            <v-skeleton-loader type="list-item-avatar-three-line"></v-skeleton-loader>
                        </v-sheet>
                    </v-col>
                    <v-col lg="8" md="8" cols="12">
                        <v-sheet color="lighten-4">
                            <v-skeleton-loader type="article, actions"></v-skeleton-loader>
                        </v-sheet>
                    </v-col>
                </v-row>
                <v-row v-else>
                    <v-col lg="4" md="4" cols="12">
                        <v-card class="text-center">
                            <v-card-text>
                                <v-avatar size="100">
                                    <v-img :src="avatar"
                                           aspect-ratio="1">
                                        <template v-slot:placeholder>
                                            <v-row class="fill-height ma-0" align="center" justify="center">
                                                <v-progress-circular
                                                    indeterminate
                                                    color="primary"
                                                ></v-progress-circular>
                                            </v-row>
                                        </template>
                                    </v-img>
                                </v-avatar>
                                <h1 class="mt-5">{{ faf.first_name }}
                                    <span style="color: #3e96e3">{{ faf.last_name }}</span></h1>
                                <h3 class='mt-3 mb-4'>{{ faf.email }}</h3>
                                <v-btn color="primary darken-3" class="text-none mb-3"
                                       :loading="btnUploadLoading"
                                       fab depressed
                                       @click="onButtonClickUpload">
                                    <v-icon>
                                        mdi-cloud-upload
                                    </v-icon>
                                </v-btn>
                                <input ref="uploader" class="d-none" type="file" accept="image/*" @change="uploadFile">
                            </v-card-text>
                        </v-card>
                    </v-col>
                    <v-col lg="8" md="8" cols="12">
                        <form @submit.prevent="updateFafAccount">
                            <v-card class="text-center">
                                <v-card-text>
                                    <v-row>
                                        <v-col lg="6" md="6" cols="12">
                                            <v-text-field outlined dense label="Nom *"
                                                          :error-messages="validateErrMessages.first_name"
                                                          v-model="form.first_name"></v-text-field>
                                        </v-col>
                                        <v-col lg="6" md="6" cols="12">
                                            <v-text-field
                                                :error-messages="validateErrMessages.last_name"
                                                v-model="form.last_name" outlined dense
                                                label="Prenom *"></v-text-field>
                                        </v-col>
                                        <v-col cols="12">
                                            <v-text-field
                                                :error-messages="validateErrMessages.email"
                                                v-model="form.email" outlined dense
                                                label="Email *"></v-text-field>
                                        </v-col>
                                        <v-col cols="12">
                                            <v-text-field
                                                :error-messages="validateErrMessages.password"
                                                v-model="form.password" outlined dense
                                                label="Mot de passe *"></v-text-field>
                                        </v-col>
                                    </v-row>
                                </v-card-text>
                                <v-card-actions>
                                    <v-spacer/>
                                    <v-btn color="primary" type="submit" class="mb-3" :loading="btnLoading">
                                        <v-icon left>mdi-content-save</v-icon>
                                        Enregistrer
                                    </v-btn>
                                </v-card-actions>
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
            dataLoading: false,
            btnUploadLoading: false,
            validateErrMessages: '',
            btnLoading: false,
            faf: '',
            avatar: '',
            breadcrumbs: [
                {
                    text: 'Accueil',
                    disabled: false,
                    to: '/home'
                },
                {
                    text: 'FAF',
                    disabled: true,
                },
            ],
            form: {}
        }
    },
    methods: {
        onButtonClickUpload() {
            this.isSelecting = true
            window.addEventListener('focus', () => {
                this.isSelecting = false
            }, {once: true})
            this.$refs.uploader.click()
        },
        uploadFile(file) {
            this.btnUploadLoading = true
            this.avatar = URL.createObjectURL(file.target.files[0])
            let formData = new FormData
            formData.append('avatar', file.target.files[0])
            formData.append('id', this.form.id)
            axios.post('faf/update-avatar', formData).then(() => {
                this.btnUploadLoading = false
                this.$success = true
            }).catch(error => {
                console.log(error)
                this.btnUploadLoading = false
            })
        },
        getFafAccount() {
            this.dataLoading = true
            axios.get('/faf').then(response => {
                this.faf = response.data
                this.form = response.data
                this.avatar = response.data.avatar
                this.form.password = ''
                this.dataLoading = false
            }).catch(error => {
                console.log(error)
                this.dataLoading = false
            })
        },
        updateFafAccount() {
            this.validateErrMessages = ''
            this.btnLoading = true
            axios.post('/faf/update', this.form).then(() => {
                this.$error = false
                this.btnLoading = false
                this.$success = true
            }).catch(error => {
                this.$error = true
                this.$success = false
                this.validateErrMessages = error.response.data.errors
                this.btnLoading = false
            })
        }
    },
    created() {
        this.getFafAccount()
    }
}
</script>
<style>
.v-input__prepend-outer {
    display: none;
}
</style>
