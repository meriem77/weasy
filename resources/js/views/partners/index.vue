<template>
    <div>
        <v-container fluid>
            <v-row>
                <v-col cols="9">
                    <v-card color="#F4F5FE" flat>
                        <v-card-title>
                            Dashboard
                            <v-card-subtitle>Partners manager</v-card-subtitle>
                            <v-spacer></v-spacer>
                            <v-text-field dense rounded style="margin-top: 20px" solo prepend-inner-icon="mdi-magnify"
                                          placeholder="Search"></v-text-field>
                        </v-card-title>
                    </v-card>
                      <v-card class="rounded-xl">
                        <v-card-title>

                            <img alt="user" src="/images/partners.svg" class="mr-2">
                           <h5> Total partners</h5>


                        </v-card-title>
                        <v-card-text>
                            <v-row>
                                <v-col cols="9">
                                   <v-sheet v-if="loading" color="lighten-4">
                                      <v-skeleton-loader type="card-heading"></v-skeleton-loader>
                                   </v-sheet>
                                  <h1 v-else class="ml-6" style="font-size:32px">
                                      {{partnerCount}}
                                  </h1>
                                </v-col>

                            </v-row>
                        </v-card-text>
                    </v-card>
                    <v-card color="#F4F5FE" flat class="mt-6">
                        <v-card-title>
                            Partners list
                            <v-spacer/>
                            <v-btn dark rounded depressed to="/transactions/users">
                                <v-icon>mdi-plus</v-icon>
                                Add new
                            </v-btn>
                        </v-card-title>
                        <v-card-text>
                            <v-sheet v-if="loading" color="lighten-4">
                                <v-skeleton-loader type="table"></v-skeleton-loader>
                            </v-sheet>
                            <v-simple-table v-else style="background: transparent">
                                <template v-slot:default>
                                    <thead>
                                    <tr>
                                        <th class="text-left">Full name</th>
                                        <th class="text-left">Sub name</th>
                                        <th class="text-left">Phone</th>
                                        <th class="text-left">Points</th>
<!--                                        <th class="text-left">Actions</th>-->
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr v-for="item in partners.data" :key="item.id">
                                        <td>{{ item.user.fullName }}</td>
                                        <td>{{ item.user.subName }}</td>
                                        <td>{{ item.user.phone }}</td>
                                        <td>{{ item.balence }}</td>
<!--                                        <td>-->
<!--                                            <v-btn dark rounded depressed  @click="[RefillDialog = true,user_id = item.user.id]">-->
<!--                                                Refill-->
<!--                                            </v-btn>-->

<!--                                        </td>-->
                                    </tr>
                                    </tbody>

                                </template>
                            </v-simple-table>
                            <div class="text-center mt-4">
                                <v-pagination
                                    v-model="pagination.current"
                                    :length="pagination.total"
                                    @input="onPageChange"
                                    prev-icon="mdi-menu-left"
                                    next-icon="mdi-menu-right"
                                ></v-pagination>
                            </div>
                        </v-card-text>
                    </v-card>

                </v-col>

                <v-col cols="3">
                    <right-sidebar/>
                </v-col>
            </v-row>
        </v-container>

        <!----Refill coins dialog---->
        <v-dialog v-model="RefillDialog" persistent max-width="700">
            <v-card>
                <form @submit.prevent="RefillPartner(user_id)">
                    <v-card-title>Refill</v-card-title>
                    <v-divider></v-divider>
                    <v-card-text>
                        <v-text-field v-model="form.value" label="Value *" dense
                                      :error-messages="errors.value"></v-text-field>
                    </v-card-text>
                    <v-card-actions>

                        <v-btn text @click="RefillDialog = false">Fermer</v-btn>
                        <v-spacer></v-spacer>
                        <v-btn dark rounded :loading="btnLoading" type="submit">
                            <v-icon left>mdi-content-save</v-icon>
                            Save
                        </v-btn>
                    </v-card-actions>
                </form>
            </v-card>
        </v-dialog>

    </div>
</template>

<script>
import RightSidebar from "../../components/right-sidebar";


export default {
    components: {RightSidebar},
    data() {
        return {
            loading: true,
            btnLoading:false,
            RefillDialog:false,
            partners: [],
            errors: {},
            form:{},
            pagination: {
                current: 1,
                total: 0
            },
            partnerCount:'',
        }
    },
    methods: {

        getPartners() {
            axios.get('/partners?page='+ this.pagination.current).then(res => {
                this.loading = false
                this.partners = res.data.data
                this.pagination.current = res.data.data.current_page;
                this.pagination.total = res.data.data.last_page;
            }).catch(err => {
                console.log(err)
                this.loading = false
            })
        },
        getPartnersCount() {
            axios.get('/partnersCount').then(res => {
                this.loading = false
                this.partnerCount = res.data.data
            }).catch(err => {
                console.log(err)
                this.loading = false
            })
        },
        onPageChange() {
            this.getPartners();
        },
        RefillPartner($id) {
            this.btnLoading = true
            axios.post('/refillPartner/'+$id, this.form).then(() => {
                this.$error = false
                this.$success = true
                this.getPartners()
                this.RefillDialog=false
            }).catch(err => {
                console.log(err)
                this.btnLoading = false
                this.$success = false
                this.$error = true
                this.errors = err.response.data.errors
            })

        },


    },
    created() {
        this.getPartners()
        this.getPartnersCount()
    },

}
</script>

<style scoped>

</style>
