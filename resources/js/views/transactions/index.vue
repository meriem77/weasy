<template>
    <div>
        <v-container fluid>
            <v-row>
                <v-col cols="9">
                    <v-card color="#F4F5FE" flat>
                        <v-card-title>
                            Dashboard
                            <v-card-subtitle>Transactions</v-card-subtitle>
                            <v-spacer></v-spacer>
                            <v-text-field dense rounded style="margin-top: 20px" solo prepend-inner-icon="mdi-magnify"
                                          placeholder="Search"></v-text-field>
                        </v-card-title>
                    </v-card>
                      <v-card class="rounded-xl">
                        <v-card-title>
                            <v-avatar size="35" class="mr-2">
                              <img alt="user" src="/images/Groupe 207.svg">
                            </v-avatar>
                           <h5> Distributed Balance</h5>
                            <v-spacer/>
                            <v-btn dark rounded depressed  @click="[RefillDialog=true]">
                                Refill
                            </v-btn>

                        </v-card-title>
                        <v-card-text>
                            <v-row>
                                <v-col cols="9">
                                   <v-sheet v-if="loading" color="lighten-4">
                                      <v-skeleton-loader type="card-heading"></v-skeleton-loader>
                                   </v-sheet>
                                  <h1 v-else class="ml-6" style="font-size:32px">
                                      {{wazaPoint.balence}}
                                  </h1>
                                </v-col>
                                  <v-spacer/>
                                <v-col >
                                    <v-btn v-if="ditributePartners.length===0" dark rounded depressed>
                                        Destribute
                                    </v-btn>
                                   <v-btn v-else color="pink" style="color: white" rounded depressed @click="[DestributeDialog=true]">
                                     Destribute
                                   </v-btn>
                                </v-col>
                            </v-row>
                        </v-card-text>
                    </v-card>
                    <v-card color="#F4F5FE" flat class="mt-6">
                        <v-card-title>
                            Transactions list
                            <v-spacer/>
                            <v-btn dark rounded depressed to="/transactions/partners">
                                Show partner list
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
                                        <th class="text-left">Partner</th>
                                        <th class="text-left">Amount</th>
                                        <th class="text-left">Reciever</th>
                                        <th class="text-left">ID</th>
                                        <th class="text-left"></th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr v-for="item in transactionsPartners.data" :key="item.id">
                                        <td>{{ item.sender.fullName }}</td>
                                        <td>{{ item.amount }}</td>
                                        <td>{{ item.receiver.fullName }}</td>
                                        <td>{{ item.id }}</td>
                                        <td>
                                            <v-avatar v-if="item.cash>0" size="35" class="mr-2">
                                                <img alt="user" src="/images/vert.svg">
                                            </v-avatar>
                                            <v-avatar v-else  size="35" class="mr-2">
                                                <img alt="user" src="/images/rouge.svg">
                                            </v-avatar>
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
        <!----Refill coins dialog---->
            <v-dialog v-model="RefillDialog" persistent max-width="700">
            <v-card>
                <form @submit.prevent="Refill">
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
        <!----Refill coins dialog---->
        <!----Destribute dialog---->
        <v-dialog v-model="DestributeDialog" persistent max-width="700">
            <v-card>
                <form @submit.prevent="destributeWallet()">
                    <v-card-title>Partners</v-card-title>

                    <v-card-text>
                        <v-sheet v-if="loading" color="lighten-4">
                            <v-skeleton-loader type="table"></v-skeleton-loader>
                        </v-sheet>
                        <v-simple-table v-else style="background: transparent">
                            <template v-slot:default>
                                <thead>
                                <tr>
                                    <th class="text-left">Partner</th>
                                    <th class="text-left">ID</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr v-for="item in ditributePartners" :key="item.id">
                                    <td>{{ item.user.fullName }}</td>
                                    <td>{{ item.user.id }}</td>
                                </tr>
                                </tbody>
                            </template>
                        </v-simple-table>
                    </v-card-text>
                    <v-card-actions>

                        <v-btn text @click="DestributeDialog = false">Fermer</v-btn>
                        <v-spacer></v-spacer>
                        <v-btn  color="pink" style="color: white"
                               rounded depressed :loading="btnLoading" type="submit">
                            Destribute
                        </v-btn>

                    </v-card-actions>
                </form>
            </v-card>
        </v-dialog>
        <!----Destribute dialog---->
    </div>
</template>

<script>
import RightSidebar from "../../components/right-sidebar";
import Swal from 'sweetalert2'

export default {
    components: {RightSidebar},
    data() {
        return {
            checkbox: true,
            loading: true,
            btnLoading:false,
            RefillDialog:false,
            DestributeDialog:false,
            transactionsPartners: [],
            ditributePartners: [],
            errors: {},
            form:{},
            wazaPoint:'',
            pagination: {
                current: 1,
                total: 0
            },
        }
    },
    methods: {

        getTransactionsPartners() {
            axios.get('/transactionsPartners?page=' + this.pagination.current).then(res => {
                this.loading = false
                this.transactionsPartners = res.data.data
                this.pagination.current = res.data.data.current_page;
                this.pagination.total = res.data.data.last_page;
            }).catch(err => {
                console.log(err)
                this.loading = false
            })
        },
        onPageChange() {
            this.getTransactionsPartners();
        },
        getBalence() {
            axios.get('/balence').then(res => {
                this.loading = false
                this.wazaPoint = res.data.data
            }).catch(err => {
                console.log(err)
                this.loading = false
            })
        },
        Refill() {
         this.btnLoading = true
         axios.post('/refill', this.form).then(() => {
             this.$error = false
             this.$success = true
             this.getBalence()
             this.RefillDialog=false
         }).catch(err => {
             console.log(err)
             this.btnLoading = false
             this.$success = false
             this.$error = true
             this.errors = err.response.data.errors
         })

        },
        getPartners(){
            axios.get('/ditributePartners').then(res => {
                this.loading = false
                this.ditributePartners = res.data.data

            }).catch(err => {
                console.log(err)
                this.loading = false
            })
        },
        destributeWallet(){
            this.getPartners()
            this.btnLoading = true
            axios.post('/destributeWallet/' , this.form).then(() => {
                this.$error = false
                this.$success = true
                this.DestributeDialog=false
                this.getPartners()

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
        this.getTransactionsPartners(),
        this.getBalence()
        this.getPartners()
    }
}
</script>

<style scoped>

</style>
