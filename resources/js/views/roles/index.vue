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
                    <v-col>
                        <v-btn color="primary" to="/roles/create">
                            <v-icon left>mdi-plus</v-icon>
                            Ajouter
                        </v-btn>
                    </v-col>
                </v-row>
                <v-row v-if="dataLoading">
                    <v-col cols="12">
                        <v-sheet color="lighten-4">
                            <v-skeleton-loader type="table-tbody"></v-skeleton-loader>
                        </v-sheet>
                    </v-col>
                </v-row>
                <v-row v-if="!dataLoading && roles.length>0">
                    <v-col cols="12">
                        <v-card>
                            <v-simple-table>
                                <template v-slot:default>
                                    <thead>
                                    <tr>
                                        <th class="text-left">Nom</th>
                                        <th class="text-left">Description</th>
                                        <th class="text-right">Actions</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr v-for="role in roles" :key="role.id">
                                        <td>{{ role.name }}</td>
                                        <td>{{ role.description }}</td>
                                        <td class="text-right">
                                            <v-btn icon :to="'roles/'+role.id+'/edit'">
                                                <v-icon>mdi-pencil-outline</v-icon>
                                            </v-btn>
                                            <v-btn icon @click="[deleteDialog=true,deleteId=role.id]">
                                                <v-icon>mdi-delete-outline</v-icon>
                                            </v-btn>
                                        </td>
                                    </tr>
                                    </tbody>
                                </template>
                            </v-simple-table>
                            <!--Delete Dialog -->
                            <v-dialog v-model="deleteDialog" width="400">
                                <v-card class="text-center">
                                    <v-card-text>
                                        <v-icon color="warning" class="my-5" size="80">mdi-information-outline</v-icon>
                                        <h1 class="mb-5">Es-tu sûr?</h1>
                                        <h3 class="my-5">Vous ne pourrez pas revenir en arrière !</h3>
                                    </v-card-text>
                                    <v-card-actions>
                                        <v-btn depressed color="secondary" @click="deleteDialog = false">Annuler</v-btn>
                                        <v-spacer></v-spacer>
                                        <v-btn depressed color="primary" :loading="deleteBtnLoading"
                                               @click="deleteRole">Supprimer
                                        </v-btn>
                                    </v-card-actions>
                                </v-card>
                            </v-dialog>
                            <!--Delete Dialog -->
                        </v-card>
                    </v-col>
                </v-row>
                <v-row v-if="!dataLoading && roles.length===0">
                    <v-col cols="12">
                        <v-card class="text-center">
                            <v-card-text>
                                <v-avatar tile size="400">
                                    <v-img src="assets/images/no-data.png" aspect-ratio="1">
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
                            </v-card-text>
                        </v-card>
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
            deleteDialog: false,
            deleteBtnLoading: false,
            deleteId: '',
            roles: [],
            breadcrumbs: [
                {
                    text: 'Accueil',
                    disabled: false,
                    to: '/home'
                },
                {
                    text: 'Roles',
                    disabled: true,
                },
            ]
        }
    },
    methods: {
        getRoles() {
            this.dataLoading = true
            axios.get('/roles').then(response => {
                this.roles = response.data
                this.dataLoading = false
            }).catch(error => {
                console.log(error)
                this.dataLoading = false
            })
        },
        deleteRole() {
            this.deleteBtnLoading = true
            axios.delete('/roles/' + this.deleteId).then(() => {
                this.deleteBtnLoading = false
                this.$success = true
                this.deleteDialog = false
                let i = this.roles.map(item => item.id).indexOf(this.deleteId)
                this.roles.splice(i, 1)
            }).catch(error => {
                console.log(error)
                this.deleteBtnLoading = false
                this.deleteDialog = false
            })
        },
    },
    created() {
        this.getRoles()
    }
}
</script>

