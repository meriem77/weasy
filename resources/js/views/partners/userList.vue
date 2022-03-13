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
                                   <v-btn dark rounded depressed to="/partners/create">
                                     Destribute
                                   </v-btn>
                                </v-col>
                            </v-row>
                        </v-card-text>
                    </v-card>

                    <v-card color="#F4F5FE" flat class="mt-6">
                        <v-card-title>
                            Users list
                            <v-spacer/>
                            <v-row>
                                <v-col lg="6" md="4" cols="4">
                                    <v-text-field dense rounded solo prepend-inner-icon="mdi-magnify" v-model="query"
                                                  style="margin-bottom: -30px"
                                                  placeholder="Recherche..."
                                                  clearable></v-text-field>
                                </v-col>
                            </v-row>
                            <v-btn text rounded depressed to="/transactions/partners">
                                <v-icon>mdi-arrow-left</v-icon>
                                Back
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
                                        <th class="text-left">Email</th>
                                        <th class="text-left">Actions</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr v-for="item in users.data" :key="item.id">
                                        <td>{{ item.fullName }}</td>
                                        <td>{{ item.subName }}</td>
                                        <td>{{ item.phone }}</td>
                                        <td>{{ item.email }}</td>
                                        <td>
                                            <form @submit.prevent="upgradeUser(item.id)">
                                                <v-btn dark rounded depressed type="submit">
                                                    Upgrade
                                                </v-btn>

                                            </form>

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
                        <v-card-text v-if="!loading && searchPartners.length==0" >
                            <v-sheet v-if="loading" color="lighten-4">
                                <v-skeleton-loader type="table"></v-skeleton-loader>
                            </v-sheet>

                            <v-simple-table  style="background: transparent">
                                <template v-slot:default>
                                    <thead>
                                    <tr>
                                        <th class="text-left">Full name</th>
                                        <th class="text-left">Sub name</th>
                                        <th class="text-left">Phone</th>
                                        <th class="text-left">Email</th>
                                        <th class="text-left">Actions</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr v-for="item in searchPartners.data" :key="item.id">
                                        <td>{{ item.fullName }}</td>
                                        <td>{{ item.subName }}</td>
                                        <td>{{ item.phone }}</td>
                                        <td>{{ item.email }}</td>
                                        <td>
                                            <form @submit.prevent="upgradeUser(item.id)">
                                                <v-btn dark rounded depressed type="submit">
                                                    Upgrade
                                                </v-btn>

                                            </form>

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
            query:'',
            btnLoading:false,
            RefillDialog:false,
            users: [],
            errors: {},
            form:{},
            pagination: {
                current: 1,
                total: 0
            },
            wazaPoint:'',
            userlist: [],



        }
    },
    methods: {

        getUsers() {
            this.loading = true
            axios.get('/users?page=' + this.pagination.current).then(res => {
                this.loading = false
                this.users = res.data.data

                this.pagination.current = res.data.data.current_page;
                this.pagination.total = res.data.data.last_page;

            }).catch(err => {
                console.log(err)
                this.loading = false
            })
        },

        onPageChange() {
            this.getUsers();
        },
        upgradeUser(id) {
            Swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#272727',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, Upgrade it!'
            }).then((result) => {
                if (result.isConfirmed) {
                    axios.post('/upgradeUser/'+id, this.form).then(() => {
                        this.$error = false
                        this.$success = true
                        this.getUsers()

                    }).catch(err => {
                        console.log(err)
                        this.btnLoading = false
                        this.$success = false
                        this.$error = true
                        this.errors = err.response.data.errors
                    })
                }
            })
            this.btnLoading = true


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
    },
    created() {
        this.getUsers()
        this.getBalence()
    },
    computed: {
        searchPartners() {

            var items = this.users;
            var result = {}
console.log(items)
            Object.keys(items).forEach(key => {
                const item = items[key]
                console.log(item)
                if (item.Users.some(spec => spec.fullName === this.query)) {

                    result[key] = item
                }
            })
            console.log(result);
           return result


            // return this.userlist.filter(product => !product.fullName.indexOf(this.query))
            // var filtered = this.users
            // this.activeFilters.forEach(filter => {
            //     filtered = filtered.filter(user => {
            //         return this.query ? user.phone.includes(this.query) : this.users;
            //     })
            // })
            // return filtered

            //  console.log(Object.keys(this.users))
            //

        //     return this.users.filter(user => {
        //
        //         return this.query ? user.fullName.toLowerCase().trim().includes(this.query.toLowerCase().trim()) : this.users;
        //     })
        }
    },
}
</script>

<style scoped>

</style>
