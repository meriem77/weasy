<template>
    <div>
        <v-container fluid>
            <v-row>
                <v-col cols="9">
                    <v-card color="#F4F5FE" flat>
                        <v-card-title>
                            Dashboard
                            <v-card-subtitle>Ads</v-card-subtitle>
                            <v-spacer></v-spacer>
                            <v-text-field dense rounded style="margin-top: 20px" solo prepend-inner-icon="mdi-magnify"
                                          placeholder="Search"></v-text-field>
                        </v-card-title>
                    </v-card>

                    <v-card color="#F4F5FE" flat class="mt-6">
                        <v-card-title>
                            Ads list
                            <v-spacer/>
                            <v-row>
                                <v-col lg="6" md="4" cols="4">
                                    <v-text-field dense rounded solo prepend-inner-icon="mdi-magnify" v-model="query"
                                                  style="margin-bottom: -30px"
                                                  placeholder="Recherche..."
                                                  clearable></v-text-field>
                                </v-col>
                            </v-row>
                            <v-btn dark rounded depressed to="/ads/create">
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
                                        <th class="text-left">Link</th>
                                        <th class="text-left">Images</th>
                                        <th class="text-left">Type</th>
                                        <th class="text-left">date d'expiration</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr v-for="item in ads.data" :key="item.id">
                                        <td>{{ item.link }}</td>
                                        <td>
                                            <v-avatar tile size="100" class="my-2">
                                                <v-carousel height="100"
                                                            :continuous="false"
                                                            :cycle="cycle"
                                                            :show-arrows="false"
                                                            hide-delimiter-background
                                                            delimiter-icon="mdi-minus">
                                                    <v-carousel-item
                                                        v-for="(image,i) in item.images.split(';')"
                                                        :key="i"
                                                        :src="image"
                                                        reverse-transition="fade-transition"
                                                        transition="fade-transition"
                                                    ></v-carousel-item>
                                                </v-carousel>
                                            </v-avatar>




                                        </td>
                                        <td v-if="item.type===0">People</td>
                                        <td v-else>Market</td>
                                        <td>{{ item.expiration_date }}</td>
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
            ads: [],
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
                    axios.post('/ads/' + id).then(() => {
                        this.getads()

                    }).catch(err => {
                        console.log(err)
                        this.loading = false
                    })
                }
            })
        },
        getads() {
            axios.get('/ads?page=' + this.pagination.current).then(res => {
                this.loading = false
                this.ads = res.data.data
                this.pagination.current = res.data.data.current_page;
                this.pagination.total = res.data.data.last_page;
            }).catch(err => {
                console.log(err)
                this.loading = false
            })
        },
        onPageChange() {
            this.getads();
        },

    },
    created() {
        this.getads()
    }
}
</script>

<style scoped>

</style>
