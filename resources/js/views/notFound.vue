<template>
    <div>
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
                        <img src="assets/404.png" width="40%">
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
