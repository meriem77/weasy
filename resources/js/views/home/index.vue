<template>
    <div>
        <v-container fluid>
            <v-row>
                <v-col cols="9">
                    <v-card color="#F4F5FE" flat>
                        <v-card-title>
                            Dashboard
                            <v-card-subtitle>Balance</v-card-subtitle>
                            <v-spacer></v-spacer>
                            <v-text-field dense rounded style="margin-top: 20px" solo prepend-inner-icon="mdi-magnify"
                                          placeholder="Search"></v-text-field>
                        </v-card-title>
                    </v-card>
                    <v-card class="rounded-xl">
                        <v-card-title>
                            <v-avatar size="35" class="ml-4">
                                <img alt="user" src="/images/Groupe 207.svg">
                            </v-avatar>

                            <v-spacer/>
                        </v-card-title>
                        <v-card-text>
                            <v-row>
                                <v-btn dark rounded depressed  @click="[RefillDialog=true]" class="ml-2 mt-4">
                                    Refill
                                </v-btn>
                                <v-spacer></v-spacer>
                                <v-col cols="4">
                                    <v-row >
                                        <h1  class="ml-6" style="font-size:42px">
                                            1 000 000
                                        </h1>
                                    </v-row>
                                    <v-row class="mt-4 ml-6" >
                                        <h5  class="ml-6" style="font-size:16px">
                                            Initial Balance
                                        </h5>
                                    </v-row>

                                </v-col>

                                <v-col cols="4" >
                                    <v-row >
                                        <v-sheet v-if="loading" color="lighten-4">
                                            <v-skeleton-loader type="card-heading"></v-skeleton-loader>
                                        </v-sheet>
                                        <h1 v-else class="ml-6" style="font-size:42px">
                                            {{wazaPoint.balence}}
                                        </h1>
                                    </v-row>
                                    <v-row class="mt-4 " >
                                        <h5  class="ml-6" style="font-size:16px">
                                            current Balance
                                        </h5>
                                    </v-row>

                                </v-col>

                                <v-col cols="2" >
                                    <v-row>
                                        <v-progress-circular
                                            style="top: -17px;"
                                            :rotate="-90"
                                            :size="70"
                                            :width="10"
                                            :value="valuePoint"
                                            color="#00CCF2"
                                        >
                                            {{ valuePoint }} %
                                        </v-progress-circular>



                                    </v-row>

                                </v-col>
                                <v-col>
                                    <v-row >
                                        <h5  class="ml-2" style="font-size:16px;">
                                           {{month}}
                                        </h5>
                                    </v-row>
                                </v-col>
                            </v-row>
                        </v-card-text>
                    </v-card>
                    <v-row class="mt-4 ml-2">
                        <v-col lg="3" md="3" cols="6">
                            <v-card class="rounded-xl">
                                <v-card-title>
                                    User to user
                                </v-card-title>
                                <v-progress-circular
                                    class="ml-8"
                                    :rotate="-90"
                                    :size="150"
                                    :width="15"
                                    :value="valueU2U"
                                    color="pink"
                                >
                                    {{ valueU2U }} %
                                </v-progress-circular>
                                <v-card-actions>
                                    <v-avatar size="20" class="mr-2" color="pink">
                                    </v-avatar>
                                    {{ balenceU2U }} WAP
                                </v-card-actions>
                            </v-card>
                        </v-col>
                        <v-col lg="3" md="3" cols="6">
                            <v-card class="rounded-xl">
                                <v-card-title>
                                    B2C / C2C
                                </v-card-title>
                                <v-progress-circular
                                    class="ml-8"
                                    :rotate="-90"
                                    :size="150"
                                    :width="15"
                                    :value="valueB2C"
                                    color="purple"
                                >
                                    {{ valueB2C }} %
                                </v-progress-circular>

                                <v-card-actions>
                                    <v-avatar size="20" class="mr-2" color="purple">
                                    </v-avatar>
                                    {{ balenceB2U }} WAP
                                </v-card-actions>
                            </v-card>
                        </v-col>
                        <v-col lg="3" md="3" cols="6">
                            <v-card class="rounded-xl">
                                <v-card-title>
                                    Ads
                                </v-card-title>
                                <v-progress-circular
                                    class="ml-8"
                                    :rotate="-90"
                                    :size="150"
                                    :width="15"
                                    :value="valueAds"
                                    color="teal"
                                >
                                    {{ valueAds }} %
                                </v-progress-circular>

                                <v-card-actions>
                                    <v-avatar size="20" class="mr-2" color="teal">
                                    </v-avatar>
                                    0 WAP
                                </v-card-actions>
                            </v-card>
                        </v-col>
                        <v-col lg="3" md="3" cols="6">
                            <v-card class="rounded-xl">
                                <v-card-title>
                                    Partner to business
                                </v-card-title>
                                <v-progress-circular
                                    class="ml-8"
                                    :rotate="-90"
                                    :size="150"
                                    :width="15"
                                    :value="valueP2B"
                                    color="blue"
                                >
                                    {{ valueP2B }} %
                                </v-progress-circular>

                                <v-card-actions>
                                    <v-avatar size="20" class="mr-2" color="blue">
                                    </v-avatar>
                                    {{ balenceP2B }} WAP
                                </v-card-actions>
                            </v-card>
                        </v-col>
                        <v-col lg="3" md="3" cols="6">
                            <v-card class="rounded-xl">
                                <v-card-title>
                                    Partner to user
                                </v-card-title>
                                <v-progress-circular
                                    class="ml-8"
                                    :rotate="-90"
                                    :size="150"
                                    :width="15"
                                    :value="valueP2U"
                                    color="orange"
                                >
                                    {{ valueP2U }} %
                                </v-progress-circular>

                                <v-card-actions>
                                    <v-avatar size="20" class="mr-2" color="orange">
                                    </v-avatar>
                                    {{ balenceP2U }} WAP
                                </v-card-actions>
                            </v-card>
                        </v-col>
                    </v-row>
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

import PieChart from "../balance/chart/PieChart";
import RightSidebar from "../../components/right-sidebar";

export default {
    components: {PieChart,RightSidebar},
    data() {
        return {
            loading: true,
            btnLoading:false,
            RefillDialog:false,
            intervalPoint: {},
            intervalUser: {},
            intervalPartner: {},
            intervalAds: {},
            intervalBusiness: {},
            intervalPartUs: {},
            valueU2U: 0,
            balenceU2U:0,
            valueAds: 0,
            valueB2C: 0,
            balenceB2U:0,
            valueP2U: 0,
            balenceP2U:0,
            valueP2B: 0,
            balenceP2B:0,
            valuePoint:0,
            U2U:0,
            B2C:0,
            P2U:0,
            P2B:0,
            value: 0,
            errors: {},
            form:{},
            wazaPoint:'',
            date:'',
            month:'',
            monthNames :["January", "February", "March", "April", "May", "June",
                "July", "August", "September", "October", "November", "December"],
        }
    },
    beforeDestroy () {
        clearInterval(this.interval)
    },
    methods: {
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
        dateFunction(){
            this.date=new Date()
            this.month= this.monthNames[this.date.getMonth()]
        },
        getTransactionsCountMonth() {
            axios.get('/TransactionsCountMonth').then(res => {
                this.loading = false
                this.value = res.data.A2P
                this.U2U = res.data.U2U
                this.B2C = res.data.B2C
                this.P2U = res.data.P2U
                this.P2B = res.data.P2B

            }).catch(err => {
                console.log(err)
                this.loading = false
            })
        },

        getBalenceCountMonth() {
            axios.get('/BalenceCountMonth').then(res => {
                this.loading = false
                this.balenceU2U = res.data.U2U
                this.balenceB2U = res.data.B2C
                this.balenceP2U = res.data.P2U
                this.balenceP2B = res.data.P2B

            }).catch(err => {
                console.log(err)
                this.loading = false
            })
        },


    },
    created() {
        this.getBalence()
        this.dateFunction()
        this.getTransactionsCountMonth()
        this.getBalenceCountMonth()

    },
    mounted () {
        this.intervalPoint = setInterval(() => {
            var value = this.value/100

            if (this.valuePoint === value) {
                return (this.valuePoint = value)
            }
            this.valuePoint += value
        }, 10),

            this.intervalUser = setInterval(() => {
                var value = this.U2U/100
                if (this.valueU2U === value) {
                    return (this.valueU2U = value)
                }
                this.valueU2U += value
            }, 10)
            // this.intervalPartner = setInterval(() => {
            //     var value = this.B2C/100
            //     if (this.valueB2C === value) {
            //         return (this.valueB2C = value)
            //     }
            //     this.valueB2C += value
            // }, 10),
            // this.intervalAds = setInterval(() => {
            //     if (this.valueAds === 0) {
            //         return (this.valueAds = 0)
            //     }
            //     this.valueAds += 0
            // }, 10),
            // this.intervalBusiness = setInterval(() => {
            //     var value = this.P2B/100
            //     if (this.valueP2B === value) {
            //         return (this.valueP2B = value)
            //     }
            //     this.valueP2B += value
            // }, 10),
            // this.intervalPartUs = setInterval(() => {
            //     var value = this.P2U/100
            //     if (this.valueP2U === value) {
            //         return (this.valueP2U = value)
            //     }
            //     this.valueP2U += value
            // }, 10)
    },

}
</script>
<style scoped>
.v-progress-circular {
    margin: 1rem;
    left: 20px;

}
</style>






