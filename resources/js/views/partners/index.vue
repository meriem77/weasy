<template>
    <div>
        <v-container fluid>
            <v-row>
                <v-col cols="9">
                    <v-card color="#F4F5FE" flat>
                        <v-card-title>
                            Dashboard
                            <v-card-subtitle>Partners mamager</v-card-subtitle>
                            <v-spacer></v-spacer>
                            <v-text-field dense rounded style="margin-top: 20px" solo prepend-inner-icon="mdi-magnify"
                                          placeholder="Search"></v-text-field>
                        </v-card-title>
                    </v-card>
                    <v-card color="#F4F5FE" flat>
                        <v-card-title>
                            Partners list
                            <v-spacer/>
                            <v-btn dark rounded depressed to="/partners/create">
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
                                        <th class="text-left">First name</th>
                                        <th class="text-left">Last name</th>
                                        <th class="text-left">Email</th>
                                        <th class="text-left">Points</th>
                                        <th class="text-left">Create at</th>
                                        <th class="text-left">Actions</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr v-for="item in admins" :key="item.id">
                                        <td>{{ item.first_name }}</td>
                                        <td>{{ item.last_name }}</td>
                                        <td>{{ item.email }}</td>
                                        <td>300</td>
                                        <td>{{ item.created_at }}</td>
                                        <td>
                                            <v-btn icon small @click="deleteAdmin(item.id)">
                                                <v-icon small>mdi-delete</v-icon>
                                            </v-btn>
                                            <v-btn icon small>
                                                <v-icon small>mdi-pencil</v-icon>
                                            </v-btn>
                                        </td>
                                    </tr>
                                    </tbody>
                                </template>
                            </v-simple-table>
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
            admins: [],
        }
    },
    methods: {
        deleteAdmin(id) {
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
                    axios.delete('/partners/' + id).then(() => {
                        this.getAdmins()
                    }).catch(err => {
                        console.log(err)
                        this.loading = false
                    })
                }
            })
        },
        getAdmins() {
            axios.get('/partners').then(res => {
                this.loading = false
                this.admins = res.data.data
            }).catch(err => {
                console.log(err)
                this.loading = false
            })
        }
    },
    created() {
        this.getAdmins()
    }
}
</script>

<style scoped>

</style>
