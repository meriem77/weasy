<template>
    <div>
        <v-card class="mb-3">
            <v-breadcrumbs :items="breadcrumbs" large>
                <template v-slot:divider>
                    <v-icon>mdi-chevron-right</v-icon>
                </template>
            </v-breadcrumbs>
        </v-card>
        <div class="mb-14">
            <v-row>
                <v-col md="4" cols="6" lg="4" style="margin-bottom: -38px">
                    <v-btn color="primary" to="/clubs/create">
                        <v-icon left>mdi-plus</v-icon>
                        Ajouter
                    </v-btn>
                </v-col>
            </v-row>
        </div>

        <v-row v-if="dataLoading">
            <v-col v-for="i in 12" :key="i" md="4" cols="6" lg="2">
                <v-sheet color="lighten-4">
                    <v-skeleton-loader type="card"></v-skeleton-loader>
                </v-sheet>
            </v-col>
        </v-row>
        <v-row>

            <v-col>&nbsp;</v-col>
            <v-col md="3" lg="3" cols="12" style="margin-bottom: -38px">
                <v-select dense solo placeholder="Ligue..."
                          :loading="loadingLeague"
                          :items="leagues"
                          v-model='leagueId'
                          item-value="_id"
                          @change="getClubs"
                          item-text="name">
                </v-select>
            </v-col>
            <v-col cols="12" lg="4" md="4" style="margin-bottom: -38px">
                <v-text-field dense solo prepend-inner-icon="mdi-magnify" v-model="query" placeholder="Recherche..."
                              clearable></v-text-field>
            </v-col>
        </v-row>
        <v-row v-if="!searchClubs">
            <v-col v-for="club in searchClubs" :key="club._id" md="4" cols="6" lg="2">
                <v-card ripple class="text-center">
                    <v-img :src="club.logo"></v-img>
                    <v-card-text>
                        <h3 class="text--primary">{{ club.name }}</h3>
                        <h4><strong style="font-size: 30px;color: #26A69A">.</strong> {{ leagueName }} </h4>
                    </v-card-text>
                    <v-card-actions>
                        <v-btn icon large>
                            <v-icon>mdi-circle-edit-outline</v-icon>
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
        <v-row v-else>
            <v-col cols="12">
                <v-card class="text-center">
                    <v-card-text>
                        <img src="assets/images/no-data.png" width="30%"/>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </div>
</template>

<script>
export default {
    data() {
        return {
            query: '',
            leagueId: '',
            leagueName: '',
            dataLoading: false,
            loadingLeague: false,
            DegradeModal: false,
            clubs: [],
            leagues: [],
            breadcrumbs: [
                {
                    text: 'Accueil',
                    disabled: false,
                    to: '/home'
                },
                {
                    text: 'Clubs',
                    disabled: true,
                },
            ]
        }
    },
    methods: {
        getLeagues() {
            this.loadingLeague = true
            this.dataLoading = true
            axios.get('/leagues').then(response => {
                this.loadingLeague = false
                this.leagues = response.data
                this.dataLoading = false
                this.getClubs()
            }).catch(error => {
                console.log(error)
                this.loadingLeague = true
                this.dataLoading = false
            })
        },
        getClubs() {
            this.dataLoading = true
            axios.post('/clubs', {
                leagueId: this.leagueId
            }).then(response => {
                this.clubs = response.data.data
                this.dataLoading = false
            }).catch(error => {
                console.log(error)
                this.dataLoading = false
            })
        },
    },
    created() {
        this.getLeagues()
    },
    computed: {
        searchClubs() {
            return this.clubs.filter(club => {
                return this.query ? club.name.toLowerCase().includes(this.query.toLowerCase()) : this.clubs;
            })
        }
    },
}
</script>

