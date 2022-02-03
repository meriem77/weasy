<template>
    <div>
        <v-card flat color="#F4F5FE" class="rounded-xl">
            <v-img src="/images/card.png" height="170">
                <v-app-bar flat color="rgba(0, 0, 0, 0)">
                    <v-icon color="white">mdi-logout</v-icon>
                    <v-toolbar-title @click="logout" class="white--text pl-0"
                                     style="font-size: 15px;cursor: pointer">Log out
                    </v-toolbar-title>
                    <v-spacer></v-spacer>
                    <span class="white--text" style="font-size: 14px">Admin</span>
                </v-app-bar>
                <v-card-title class="white--text " style="margin-top:-15px">
                    <v-avatar size="65">
                        <img alt="user"
                             src="/images/logo.svg">
                    </v-avatar>
                    <p class="ml-3"> {{ name }} <small class="ml-3" style="font-size: 12px">{{ id }}</small></p>
                </v-card-title>
            </v-img>
        </v-card>
        <h4 class="my-4 ml-3"> Recent activities</h4>
        <v-card class="rounded-xl" color="black">
            <v-progress-circular
                :rotate="-90"
                :size="250"
                :width="30"
                :value="value"
                color="#6CFF00"
            >
                {{ value }} %
            </v-progress-circular>
        </v-card>



        <v-row class="mt-4">
            <v-card class="rounded-xl ml-4" width="60"  >
                <v-card-title>
                    <img alt="user" src="/images/home.svg">
                </v-card-title>

            </v-card>

            <v-spacer></v-spacer>
            <v-col cols="4"  class="mr-6 mt-2" >
                <v-row>
                    <h1 style="font-size:14px">
                        acquired balance
                    </h1>
                </v-row>
                <v-row class="mt-4 ">
                    <h5 style="font-size:10px">
                       0 DA
                    </h5>
                </v-row>

            </v-col>


            <v-col cols="4"  class=" mt-2" >
                <v-row>
                    <h1 style="font-size:14px">
                        0 DA
                    </h1>
                </v-row>


            </v-col>


        </v-row>
        <v-row class="mt-4">
            <v-card class="rounded-xl ml-4" height="60" >
                <v-card-title>
                    <img alt="user" src="/images/partners.svg" width="27">
                </v-card-title>

            </v-card>

            <v-spacer></v-spacer>
            <v-col cols="4"  class="mr-6 mt-2" >
                <v-row>
                    <h1 style="font-size:14px">
                        non-acquired balance
                    </h1>
                </v-row>
                <v-row class="mt-4 ">
                    <h5 style="font-size:10px">
                        0 DA
                    </h5>
                </v-row>

            </v-col>


            <v-col cols="4"  class=" mt-2" >
                <v-row>
                    <h1 style="font-size:14px">
                        0 DA
                    </h1>
                </v-row>


            </v-col>


        </v-row>

    </div>
</template>

<script>

export default {
    name: 'right-sidebar',

    data() {
        return {
            name: this.$store.state.user.fullName,
            role: this.$store.state.user.role,
            id: this.$store.state.user.id,
            interval: {},
            valuePoint: 0,
            value: 0,
        }
    },
    beforeDestroy() {
        clearInterval(this.interval)
    },
    mounted() {
        this.interval = setInterval(() => {
            if (this.value ===  this.valuePoint/100) {
                return (this.value =  this.valuePoint/100)
            }
            this.value +=  this.valuePoint/100
        }, 10)
    },

    methods: {
        getTransactionsCountMonth() {
            axios.get('/TransactionsCountMonth').then(res => {
                this.loading = false
                this.valuePoint=res.data.A2P

            }).catch(err => {
                console.log(err)
                this.loading = false
            })
        },
        logout() {
            this.overlay = true
            axios.post('/logout').then(() => {
                this.$store.dispatch('createUserAuth', '')
                this.$store.dispatch('isLoggedIn', false)
                this.overlay = false
                this.$router.push({name: 'login'})
            }).catch(err => {
                this.overlay = false
                console.log(err)
            })
        },

    },
    created(){
        this.getTransactionsCountMonth()
    }
}
</script>

<style scoped>

.v-progress-circular {
    margin: 3rem;

}

</style>
