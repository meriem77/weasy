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
                                            {{wazaPoint.value}}
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
                                            :width="15"
                                            :value="valuePoint"
                                            color="red"
                                        >
                                            {{ valuePoint }}
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
                                    :value="valueUser"
                                    color="pink"
                                >
                                    {{ valueUser }}
                                </v-progress-circular>
                                <v-card-actions>
                                    <v-avatar size="20" class="mr-2" color="pink">
                                    </v-avatar>
                                    110 000 WAP
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
                                    :value="valuePartner"
                                    color="purple"
                                >
                                    {{ valuePartner }}
                                </v-progress-circular>

                                <v-card-actions>
                                    <v-avatar size="20" class="mr-2" color="purple">
                                    </v-avatar>
                                    110 000 WAP
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
                                    {{ valueAds }}
                                </v-progress-circular>

                                <v-card-actions>
                                    <v-avatar size="20" class="mr-2" color="teal">
                                    </v-avatar>
                                    110 000 WAP
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
                                    :value="valueBusiness"
                                    color="blue"
                                >
                                    {{ valueBusiness }}
                                </v-progress-circular>

                                <v-card-actions>
                                    <v-avatar size="20" class="mr-2" color="blue">
                                    </v-avatar>
                                    0 WAP
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
                                    :value="valuePartUs"
                                    color="orange"
                                >
                                    {{ valuePartUs }}
                                </v-progress-circular>

                                <v-card-actions>
                                    <v-avatar size="20" class="mr-2" color="orange">
                                    </v-avatar>
                                    110 000 WAP
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
                <form @submit.prevent="createWazaPoint">
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

import PieChart from "./chart/PieChart";
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
            valueUser: 0,
            valueAds: 0,
            valueBusiness: 0,
            valuePartUs: 0,
            valuePartner: 0,
            valuePoint:0,
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
        getWazaPoint() {
            axios.get('/wazaPoint').then(res => {
                this.loading = false
                this.wazaPoint = res.data.data
            }).catch(err => {
                console.log(err)
                this.loading = false
            })
        },
        createWazaPoint() {
            this.btnLoading = true
            axios.post('/wazaPoint', this.form).then(() => {
                this.$error = false
                this.$success = true
                this.$router.push('/partners')
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
            console.log(this.month)
        }
    },
    created() {
        this.getWazaPoint()
        this.dateFunction()
    },
    mounted () {
        this.intervalPoint = setInterval(() => {
            if (this.valuePoint === 60) {
                return (this.valuePoint = 60)
            }
            this.valuePoint += 1
        }, 10),
            this.intervalUser = setInterval(() => {
                if (this.valueUser === 10) {
                    return (this.valueUser = 10)
                }
                this.valueUser += 1
            }, 10),
            this.intervalPartner = setInterval(() => {
                if (this.valuePartner === 40) {
                    return (this.valuePartner = 40)
                }
                this.valuePartner += 1
            }, 10),
            this.intervalAds = setInterval(() => {
                if (this.valueAds === 35) {
                    return (this.valueAds = 35)
                }
                this.valueAds += 1
            }, 10),
            this.intervalBusiness = setInterval(() => {
                if (this.valueBusiness === 0) {
                    return (this.valueBusiness = 0)
                }
                this.valueBusiness += 1
            }, 10),
            this.intervalPartUs = setInterval(() => {
                if (this.valuePartUs === 10) {
                    return (this.valuePartUs = 10)
                }
                this.valuePartUs += 1
            }, 10)
    },

}
</script>

<style scoped>

.v-progress-circular {
    margin: 1rem;
    left: 20px;

}

</>
