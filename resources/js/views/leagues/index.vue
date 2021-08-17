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
                    <v-col>
                        <v-btn color="primary" to="/leagues/create">
                            <v-icon left>mdi-plus</v-icon>
                            Ajouter
                        </v-btn>
                    </v-col>
                </v-row>
                <v-row v-if="dataLoading">
                    <v-col v-for="i in 4" :key="i" md="3" cols="6" lg="3">
                        <v-sheet color="lighten-4">
                            <v-skeleton-loader type="card"></v-skeleton-loader>
                        </v-sheet>
                    </v-col>
                </v-row>
                <v-row v-if="!dataLoading && leagues.length>0">
                    <v-col v-for="league in leagues" :key="league.id" md="3" cols="6" lg="2">
                        <v-card ripple class="text-center" height="100%">
                            <v-img :src="league.logo" size="100" class="my-3" aspect-ratio="1">
                                <template v-slot:placeholder>
                                    <v-row class="fill-height ma-0" align="center" justify="center">
                                        <v-progress-circular
                                            indeterminate
                                            color="primary"
                                        ></v-progress-circular>
                                    </v-row>
                                </template>
                            </v-img>
                            <v-card-text>
                                <h4 class="text--primary mt-3">{{ league.name }}</h4>
                            </v-card-text>
                            <v-card-actions>
                                <v-btn icon large :to="'/leagues/'+league.id+'/edit'">
                                    <v-icon>mdi-circle-edit-outline</v-icon>
                                </v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-col>
                </v-row>
                <v-row v-if="!dataLoading && leagues.length===0">
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
            dataLoading: false,
            leagues: [],
            breadcrumbs: [
                {
                    text: 'Accueil',
                    disabled: false,
                    to: '/home'
                },
                {
                    text: 'Ligues',
                    disabled: true,
                },
            ]
        }
    },
    methods: {
        getLanguages() {
            this.dataLoading = true
            axios.get('/leagues').then(response => {
                this.leagues = response.data
                this.dataLoading = false
            }).catch(error => {
                console.log(error)
                this.dataLoading = false
            })
        }
    },
    created() {
        this.getLanguages()
    }
}
</script>

