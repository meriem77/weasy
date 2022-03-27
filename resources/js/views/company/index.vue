<template>
    <div>
        <v-container fluid>
            <v-row>
                <v-col cols="9">
                    <v-card color="#F4F5FE" flat>
                        <v-card-title>
                            Dashboard
                            <v-card-subtitle>Companies</v-card-subtitle>
                            <v-spacer></v-spacer>
                            <v-text-field dense rounded style="margin-top: 20px" solo prepend-inner-icon="mdi-magnify"
                                          placeholder="Search"></v-text-field>
                        </v-card-title>
                    </v-card>

                    <v-card color="#F4F5FE" flat class="mt-6">
                        <v-card-title>
                            Companies list
                        </v-card-title>
                        <v-card-text>
                            <v-sheet v-if="loading" color="lighten-4">
                                <v-skeleton-loader type="table"></v-skeleton-loader>
                            </v-sheet>
                            <v-simple-table v-else style="background: transparent">
                                <template v-slot:default>
                                    <thead>
                                    <tr>
                                        <th class="text-left">Name</th>
                                        <th class="text-left">Addresse</th>
                                        <th class="text-left">Phone</th>
                                        <th class="text-left">WebSite</th>
                                        <th class="text-left">Registre</th>
                                        <th class="text-left">Nif</th>
                                        <th class="text-left">Action</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr v-for="item in Companies.data" :key="item.id">
                                        <td>{{ item.name }}</td>
                                        <td>{{ item.address }}</td>
                                        <td>{{ item.phone }}</td>
                                        <td>{{ item.website }}</td>
                                        <td>
                                            <v-btn icon small @click="handleClick(item.rc)">
                                                <v-icon small>mdi-eye</v-icon>
                                            </v-btn>
                                        </td>
                                        <td>
                                            <v-btn icon small @click="handleClick(item.nif)">
                                                <v-icon small>mdi-eye</v-icon>
                                            </v-btn>
                                        </td>
                                        <td>
                                            <v-row>
                                                <v-col lg="2">
                                                    <v-tooltip bottom>
                                                        <template v-slot:activator="{ on, attrs }">
                                                            <div  v-bind="attrs"
                                                                  v-on="on">
                                                                <v-btn icon small @click="ConfirmCompany(item.id)">
                                                                    <v-icon small color="green">mdi-check-bold</v-icon>
                                                                </v-btn>
                                                            </div>
                                                        </template>
                                                        <span>Confirmer</span>
                                                    </v-tooltip>
                                                </v-col>
                                                <v-col>
                                                    <v-tooltip bottom>
                                                        <template v-slot:activator="{ on, attrs }">
                                                            <div  v-bind="attrs"
                                                                  v-on="on">
                                                                <v-btn icon small @click="refuseCompany(item.id)">
                                                                    <v-icon small color="red">mdi-close-thick</v-icon>
                                                                </v-btn>
                                                            </div>
                                                        </template>
                                                        <span>Annuler</span>
                                                    </v-tooltip>
                                                </v-col>
                                            </v-row>

                                        </td>
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
    </div>
</template>

<script>
import RightSidebar from "../../components/right-sidebar";
import Swal from 'sweetalert2'

export default {
    components: {RightSidebar},
    data() {
        return {
            loading: true,
            btnLoading:false,
            Companies: [],
            errors: {},
            form:{},
            overlay: false,

            pagination: {
                current: 1,
                total: 0
            },
        }
    },
    methods: {
        handleClick(item) {
            window.open(item, '_blank') //to open in new tab
        },
        refuseCompany(id) {
            Swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#272727',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, Delete it!'
            }).then((result) => {
                if (result.isConfirmed) {
                    axios.post('/companiesDelete/' + id).then(() => {
                        this.getCompanies()

                    }).catch(err => {
                        console.log(err)
                        this.loading = false
                    })
                }
            })
        },
        ConfirmCompany(id) {
            Swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#272727',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, Confirm it!'
            }).then((result) => {
                if (result.isConfirmed) {
                    axios.post('/companies/' + id).then(() => {
                        this.getCompanies()

                    }).catch(err => {
                        console.log(err)
                        this.loading = false
                    })
                }
            })
        },
        getCompanies() {
            axios.get('/companies?page=' + this.pagination.current).then(res => {
                this.loading = false
                this.Companies = res.data.data
                this.pagination.current = res.data.data.current_page;
                this.pagination.total = res.data.data.last_page;
            }).catch(err => {
                console.log(err)
                this.loading = false
            })
        },
        onPageChange() {
            this.getCompanies();
        },

    },
    created() {
        this.getCompanies()
    }
}
</script>

<style scoped>

</style>
