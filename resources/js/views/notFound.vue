<template>
    <div>
        <v-container fluid>
            <v-card class="mb-3">
                <v-breadcrumbs :items="breadcrumbs" large>
                    <template v-slot:divider>
                        <v-icon>mdi-chevron-right</v-icon>
                    </template>
                </v-breadcrumbs>
            </v-card>
            <v-row>
                <v-col lg="12" cols="12" md="12">
                    <v-card class="text-center">
                        <v-card-text>
                            <v-avatar tile size="400">
                                <v-img src="assets/images/404.png" width="60%" aspect-ratio="1">
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
    </div>
</template>

<script>
export default {
    data() {
        return {
            errMessages: '',
            successMessage: '',
            btnLoading: false,
            breadcrumbs: [
                {
                    text: 'Accueil',
                    disabled: false,
                    to: '/home'
                },
                {
                    text: 'Page non trouvée',
                    disabled: true,
                },
            ],
        }
    },

}
</script>
