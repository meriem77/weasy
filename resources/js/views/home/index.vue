<template>
    <div>
        <v-main>
            <v-container fluid>
                <v-row>
                    <v-col cols="12" md="3" lg="3">
                        <v-card to="/leagues">
                            <v-card-title>
                                <span class="text--secondary">Ligues</span>
                                <v-spacer></v-spacer>
                                <v-avatar color="primary" width="66" height="66">
                                    <v-icon color="white" large>mdi-soccer</v-icon>
                                </v-avatar>
                            </v-card-title>
                            <v-card-subtitle>
                                1
                            </v-card-subtitle>
                        </v-card>
                    </v-col>
                    <v-col cols="12" md="3" lg="3">
                        <v-card to="/leagues">
                            <v-card-title>
                                <span class="text--secondary">Ligues</span>
                                <v-spacer></v-spacer>
                                <v-avatar color="primary" width="66" height="66">
                                    <v-icon color="white" large>mdi-soccer</v-icon>
                                </v-avatar>
                            </v-card-title>
                            <v-card-subtitle>
                                1
                            </v-card-subtitle>
                        </v-card>
                    </v-col>
                    <v-col cols="12" md="3" lg="3">
                        <v-card to="/leagues">
                            <v-card-title>
                                <span class="text--secondary">Clubs</span>
                                <v-spacer></v-spacer>
                                <v-avatar color="primary" width="66" height="66">
                                    <v-icon color="white" large>mdi-message-text-outline</v-icon>
                                </v-avatar>
                            </v-card-title>
                            <v-card-subtitle>
                                +223
                            </v-card-subtitle>
                        </v-card>
                    </v-col>
                    <v-col cols="12" md="3" lg="3">
                        <v-card to="/leagues">
                            <v-card-title>
                                <span class="text--secondary">Clubs</span>
                                <v-spacer></v-spacer>
                                <v-avatar color="primary" width="66" height="66">
                                    <v-icon color="white" large>mdi-message-text-outline</v-icon>
                                </v-avatar>
                            </v-card-title>
                            <v-card-subtitle>
                                +223
                            </v-card-subtitle>
                        </v-card>
                    </v-col>
                </v-row>
                <v-row class="mt-6">
                    <v-col lg="12" cols="12" md="12">
                        <div class="text-center">
                            <v-avatar tile size="350">
                                <v-img src="assets/images/dashboard.png" aspect-ratio="1">
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
                        </div>
                    </v-col>
                </v-row>
            </v-container>
        </v-main>
    </div>
</template>

<script>
export default {
    data() {
        return {}
    }
}
</script>

<style scoped>

</style>
