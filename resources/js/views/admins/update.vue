<template>
    <div>
        <v-container fluid>
            <v-row>
                <v-col cols="9">
                    <v-card color="#F4F5FE" flat>
                        <v-card-title>
                            Dashboard
                            <v-card-subtitle>Permission mamager</v-card-subtitle>
                            <v-spacer></v-spacer>
                            <v-text-field dense rounded style="margin-top: 20px" solo prepend-inner-icon="mdi-magnify"
                                          placeholder="Search"></v-text-field>
                        </v-card-title>
                    </v-card>
                    <v-card color="#F4F5FE" flat>
                        <v-card-title>
                            Update admin
                            <v-spacer/>
                            <v-btn text rounded depressed to="/admins">
                                <v-icon>mdi-arrow-left</v-icon>
                                Back
                            </v-btn>
                        </v-card-title>
                        <form @submit.prevent="updateAdmin">
                            <v-card-text>
                                <v-row>
                                    <v-col>
                                        <v-text-field v-model="form.name" label="Name *" dense
                                                      :error-messages="errors.name"></v-text-field>
                                    </v-col>
                                    <v-col>
                                        <v-text-field v-model="form.fonction" label="Fonction *" dense
                                                      :error-messages="errors.fonction"></v-text-field>
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col>
                                        <v-select :items="['admin','refiller','analyst']" v-model="form.role"
                                                  label="Role *"  dense
                                                  :error-messages="errors.role"></v-select>
                                    </v-col>
                                    <v-col>
                                        <v-text-field v-model="form.email" label="Email *" dense
                                                      :error-messages="errors.email"></v-text-field>
                                    </v-col>
                                </v-row>
                            </v-card-text>
                            <v-card-actions>
                                <v-spacer/>
                                <v-btn dark rounded :loading="btnLoading" type="submit">
                                    <v-icon left>mdi-content-save</v-icon>
                                    Save
                                </v-btn>
                            </v-card-actions>
                        </form>
                    </v-card>
                </v-col>
                <v-col cols="3">
                    <right-sidebar/>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
import RightSidebar from "../../components/right-sidebar";

export default {
    components: {RightSidebar},
    data() {
        return {
            btnLoading: false,
            form: {},
            errors: {},
        }
    },
    methods: {
         updateAdmin() {
            this.btnLoading = true
            axios.post('/admins/'+ this.$route.params.id, this.form).then(() => {
                this.$error = false
                this.$success = true
                this.$router.push('/admins')
            }).catch(err => {
                console.log(err)
                this.btnLoading = false
                this.$success = false
                this.$error = true
                this.errors = err.response.data.errors
            })

        },
        getAdminById() {
         this.btnLoading = true
         axios.get('admins/' + this.$route.params.id + '/edit').then(response => {
             this.btnLoading = false
             this.form = response.data.data
         }).catch(error => {
             this.btnLoading = false
             if (error.response.status === 404) {
                 this.$router.push({name: 'notFound'})
             }
         })
        }
    },
    created() {
        this.getAdminById()
    }
   
}
</script>

<style scoped>

</style>
