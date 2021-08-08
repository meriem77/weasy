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
                    <v-col lg="8" sm="12">
                        <v-card>
                            <v-card-text>
                                <v-row>
                                    <v-col lg="6" sm="12" cols="12">
                                        <v-text-field outlined dense clearable label="Email *"></v-text-field>
                                        <v-text-field outlined dense clearable
                                                      label="Ancien mot de passe *"></v-text-field>
                                        <v-text-field outlined dense clearable
                                                      label="Nouveau mot de passe *"></v-text-field>
                                        <v-text-field outlined dense clearable
                                                      label="Confirmer le mot de passe *"></v-text-field>
                                        <v-btn color="primary">
                                            <v-icon left>mdi-content-save</v-icon>
                                            Enrigistrer
                                        </v-btn>
                                    </v-col>
                                    <v-col lg="6" sm="12" cols="12" class="text-right">
                                        <v-avatar tile size="300" style="margin-top: -30px">
                                            <v-img src="assets/images/profile.png"
                                                   aspect-ratio="1">
                                                <template v-slot:placeholder>
                                                    <v-row class="fill-height ma-0" align="center"
                                                           justify="center">
                                                        <v-progress-circular
                                                            indeterminate
                                                            color="primary"
                                                        ></v-progress-circular>
                                                    </v-row>
                                                </template>
                                            </v-img>
                                        </v-avatar>
                                    </v-col>
                                </v-row>
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
            breadcrumbs: [
                {
                    text: 'Accueil',
                    disabled: false,
                    to: '/home'
                },
                {
                    text: 'Mon compte',
                    disabled: true,
                },
            ]
        }
    }
}
</script>
