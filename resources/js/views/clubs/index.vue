<template>
    <div>
        <v-main>
            <v-container fluid>
                <v-card class="mb-3">
                    <v-breadcrumbs :items="breadcrumbs" large>
                        <template v-slot:divider>
                            <v-icon>mdi-chevron-right</v-icon>
                        </template>
                    </v-breadcrumbs>
                </v-card>
                <v-row>
                    <v-col lg="2" md="2" cols="12">
                        <v-btn color="primary" to="/clubs/create">
                            <v-icon left>mdi-plus</v-icon>
                            Ajouter
                        </v-btn>
                    </v-col>
                    <v-col lg="4" md="4" cols="12" class="d-lg-block d-md-block d-none">&nbsp;</v-col>
                    <v-col lg="2" md="2" cols="4">
                        <v-select dense solo placeholder="Ligue..."
                                  :loading="loadingLeague"
                                  :items="leagues"
                                  v-model='league_id'
                                  item-value="id"
                                  @change="getClubs"
                                  style="margin-bottom: -30px"
                                  item-text="name">
                        </v-select>
                    </v-col>
                    <v-col lg="4" md="4" cols="8">
                        <v-text-field dense solo prepend-inner-icon="mdi-magnify" v-model="query"
                                      style="margin-bottom: -30px"
                                      placeholder="Recherche..."
                                      clearable></v-text-field>
                    </v-col>
                </v-row>
                <v-row v-if="dataLoading">
                    <v-col v-for="i in 6" :key="i" md="3" cols="6" lg="2">
                        <v-sheet color="lighten-4">
                            <v-skeleton-loader type="card"></v-skeleton-loader>
                        </v-sheet>
                    </v-col>
                </v-row>
                <v-row v-if="!dataLoading && searchClubs.length>0">
                    <v-col v-for="club in searchClubs" :key="club.id" md="3" cols="6" lg="2">
                        <v-card ripple class="text-center" height="100%">
                            <v-avatar tile size="100" class="my-3">
                                <v-img :src="club.logo">
                                    <template v-slot:placeholder>
                                        <v-row class="fill-height ma-0" align="center" justify="center">
                                            <v-progress-circular
                                                indeterminate
                                                color="primary"
                                            ></v-progress-circular>
                                        </v-row>
                                    </template>
                                </v-img>
                            </v-avatar>
                            <v-card-text>
                                <h4 class="text--primary d-inline-block text-truncate"
                                    style="max-width: 150px;">{{ club.name }}</h4>
                                <h3 class="my-2" style="color: #3e96e3">{{ club.slogan }}</h3>
                                <h4> {{ club.league.name }}</h4>
                            </v-card-text>
                            <v-card-actions>
                                <v-btn icon large :to="'/clubs/'+club.id+'/edit'">
                                    <v-icon>mdi-circle-edit-outline</v-icon>
                                </v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-col>
                </v-row>
                <v-row v-if="!dataLoading && searchClubs.length===0">
                    <v-col cols="12">
                        <v-card class="text-center">
                            <v-card-text>
                                <v-avatar tile size="400">
                                    <v-img src="assets/images/no-data.png" aspect-ratio="1">
                                        <template v-slot:placeholder>
                                            <v-row class="fill-height ma-0" align="center" justify="center">
                                                <v-progress-circular
                                                    indeterminate
                                                    color="primary"
                                                ></v-progress-circular>
                                            </v-row>
                                        </template>
                                    </v-img>
                                </v-avatar>
                            </v-card-text>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </v-main>
    </div>
</template>

<script>
export default {
    data() {
        return {
            query: '',
            league_id: 3,
            dataLoading: false,
            loadingLeague: false,
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
            axios.get('/clubs', {
                params: {
                    league_id: this.league_id
                }
            }).then(response => {
                this.clubs = response.data
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
                return this.query ? club.name.toLowerCase().trim().includes(this.query.toLowerCase().trim()) : this.clubs;
            })
        }
    },
}
</script>

