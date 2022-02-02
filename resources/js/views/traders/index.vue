<template>
    <div>
        <v-container fluid>
            <v-row>
                <v-col cols="9">
                    <v-card color="#F4F5FE" flat>
                        <v-card-title>
                            Dashboard
                            <v-card-subtitle>Ecommerce</v-card-subtitle>
                            <v-spacer></v-spacer>
                            <v-text-field dense rounded style="margin-top: 20px" solo prepend-inner-icon="mdi-magnify"
                                          placeholder="Search"></v-text-field>
                        </v-card-title>
                    </v-card>
                    <v-card class="rounded-xl">
                        <v-card-title>
                            <v-avatar size="35" class="mr-2">
                                <img alt="user" src="/images/people.svg">
                            </v-avatar>
                            <h5> Total Traders</h5>
                            <v-spacer/>
                            <v-avatar size="35" class="mr-2">
                                <img alt="user" src="/images/transaction.svg">
                            </v-avatar>
                            <h5>B2C Transactions</h5>

                        </v-card-title>
                        <v-card-text>
                            <v-row>
                                <v-col cols="9">
                                    <v-sheet v-if="loading" color="lighten-4">
                                        <v-skeleton-loader type="card-heading"></v-skeleton-loader>
                                    </v-sheet>
                                    <h1 v-else class="ml-6" style="font-size:32px">
                                        {{tradersCount}}
                                    </h1>
                                </v-col>
                                <v-spacer/>
                                <v-col >
                                    <v-sheet v-if="loading" color="lighten-4">
                                        <v-skeleton-loader type="card-heading"></v-skeleton-loader>
                                    </v-sheet>
                                    <h1 v-else class="ml-6" style="font-size:32px">
                                        {{transactionsTradersCount}}
                                    </h1>
                                </v-col>
                            </v-row>
                        </v-card-text>
                    </v-card>
                    <v-card color="#F4F5FE" flat class="mt-6">
                        <v-card-title>
                            Traders list
                        </v-card-title>
                        <v-card-text>
                            <v-sheet v-if="loading" color="lighten-4">
                                <v-skeleton-loader type="table"></v-skeleton-loader>
                            </v-sheet>
                            <v-simple-table v-else style="background: transparent">
                                <template v-slot:default>
                                    <thead>
                                    <tr>
                                        <th class="text-left">Sender</th>
                                        <th class="text-left">Amount</th>
                                        <th class="text-left">Receiver</th>
                                        <th class="text-left">ID</th>
                                        <th class="text-left">Action</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr v-for="item in transactionsTraders.data" :key="item.id">
                                        <td>{{ item.sender.fullName }}</td>
                                        <td>{{ item.amount }}</td>
                                        <td>{{ item.receiver.fullName }}</td>
                                        <td>{{ item.id }}</td>
                                        <td>
                                            <v-btn icon small @click="deleteTrader(item.sender.id)">
                                                <v-icon small>mdi-delete</v-icon>
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
            transactionsTraders: [],
            errors: {},
            form:{},
            transactionsTradersCount:'',
            tradersCount:'',
            pagination: {
                current: 1,
                total: 0
            },
        }
    },
    methods: {
        deleteTrader(id) {
            Swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#272727',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
            }).then((result) => {
                if (result.isConfirmed) {
                    axios.post('/userDelete/' + id).then(() => {
                        this.getTransactionsTraders()
                        this. getTransactionsTradersCount()
                    }).catch(err => {
                        console.log(err)
                        this.loading = false
                    })
                }
            })
        },
        getTransactionsTraders() {
            axios.get('/transactionsTraders?page=' + this.pagination.current).then(res => {
                this.loading = false
                this.transactionsTraders = res.data.data
                this.pagination.current = res.data.data.current_page;
                this.pagination.total = res.data.data.last_page;
            }).catch(err => {
                console.log(err)
                this.loading = false
            })
        },
        onPageChange() {
            this.getTransactionsTraders();
        },
        getTradersCount() {
            axios.get('/tradersCount').then(res => {
                this.loading = false
                this.tradersCount = res.data.data
            }).catch(err => {
                console.log(err)
                this.loading = false
            })
        },
        getTransactionsTradersCount() {
            axios.get('/transactionsTradersCount').then(res => {
                this.loading = false
                this.transactionsTradersCount = res.data.data
            }).catch(err => {
                console.log(err)
                this.loading = false
            })
        },
    },
    created() {
        this.getTransactionsTraders()
        this.getTradersCount()
        this. getTransactionsTradersCount()
    }
}
</script>

<style scoped>

</style>
