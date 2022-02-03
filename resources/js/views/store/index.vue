<template>
    <div>
        <v-container fluid>
            <v-row>
                <v-col cols="9">
                    <v-card color="#F4F5FE" flat>
                        <v-card-title>
                            Dashboard
                            <v-card-subtitle>Stores</v-card-subtitle>
                            <v-spacer></v-spacer>
                            <v-text-field dense rounded style="margin-top: 20px" solo prepend-inner-icon="mdi-magnify"
                                          placeholder="Search"></v-text-field>
                        </v-card-title>
                    </v-card>

                    <v-card color="#F4F5FE" flat class="mt-6">
                        <v-card-title>
                            Stores list
                        </v-card-title>
                        <v-card-text>
                            <v-sheet v-if="loading" color="lighten-4">
                                <v-skeleton-loader type="table"></v-skeleton-loader>
                            </v-sheet>
                            <v-simple-table v-else style="background: transparent">
                                <template v-slot:default>
                                    <thead>
                                    <tr>
                                        <th class="text-left">Full Name</th>
                                        <th class="text-left">Registre</th>
                                        <th class="text-left">Nif</th>
                                        <th class="text-left">Agrement</th>
                                        <th class="text-left">Categorie</th>
                                        <th class="text-left">Action</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr v-for="item in stores.data" :key="item.id">
                                        <td>{{ item.user.fullName }}</td>
<!--                                        <td>{{ item.rc }}</td>-->
                                        <td>
                                            <iframe  class="mt-2" height="95" width="95" @click="overlay = !overlay"
                                                     :src="item.rc">
                                            </iframe>
                                            <v-overlay v-model="overlay" contained class="align-center justify-center">
                                                <iframe  height="550" width="550" @click="overlay = false"
                                                         :src="item.rc">
                                                </iframe>
<!--                                                <v-img-->
<!--                                                    class="mt-2"-->
<!--                                                    max-height="600"-->
<!--                                                    max-width="600"-->
<!--                                                    @click="overlay = false"-->
<!--                                                    src="https://signepub.com/wp-content/uploads/2020/11/Banner-3.jpg"-->
<!--                                                >-->
<!--                                                    <template v-slot:placeholder>-->
<!--                                                        <v-row class="fill-height ma-0" align="center" justify="center">-->
<!--                                                            <v-progress-circular-->
<!--                                                                indeterminate-->
<!--                                                                color="primary"-->
<!--                                                            ></v-progress-circular>-->
<!--                                                        </v-row>-->
<!--                                                    </template>-->

<!--                                                </v-img>-->

                                            </v-overlay>

                                        </td>
                                        <td>
                                            <iframe  class="mt-2" height="95" width="95" @click="overlay = !overlay"
                                                     :src="item.nif">
                                            </iframe>
                                            <v-overlay v-model="overlay" contained class="align-center justify-center">
                                                <iframe  height="550" width="550" @click="overlay = false"
                                                         :src="item.nif">
                                                </iframe>
                                            </v-overlay>
                                        </td>
                                        <td>
                                            <iframe  class="mt-2" height="95" width="95" @click="overlay = !overlay"
                                                     :src="item.agremen">
                                            </iframe>
                                            <v-overlay v-model="overlay" contained class="align-center justify-center">
                                                <iframe  height="550" width="550" @click="overlay = false"
                                                         :src="item.agremen">
                                                </iframe>
                                            </v-overlay>
                                        </td>
                                        <td>{{ item.category.name }}</td>
                                        <td>
                                            <v-btn icon small @click="ConfirmStore(item.id)">
                                                <v-icon small>mdi-check</v-icon>
                                            </v-btn>
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
            stores: [],
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
        ConfirmStore(id) {
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
                    axios.post('/stores/' + id).then(() => {
                        this.getStores()

                    }).catch(err => {
                        console.log(err)
                        this.loading = false
                    })
                }
            })
        },
        getStores() {
            axios.get('/stores?page=' + this.pagination.current).then(res => {
                this.loading = false
                this.stores = res.data.data
                this.pagination.current = res.data.data.current_page;
                this.pagination.total = res.data.data.last_page;
            }).catch(err => {
                console.log(err)
                this.loading = false
            })
        },
        onPageChange() {
            this.getStores();
        },

    },
    created() {
        this.getStores()
    }
}
</script>

<style scoped>

</style>
