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
      <v-col lg="8" sm="12">
        <v-card>
          <v-card-title class="text--secondary">
            Ajouter un club
          </v-card-title>
          <v-divider></v-divider>
          <v-card-text>
            <v-row>
              <v-col cols="12" lg="6" sm="12">
                <v-text-field outlined dense label="Nom *"></v-text-field>
              </v-col>
              <v-col cols="12" lg="6" sm="12">
                <v-text-field outlined dense label="Prénom *"></v-text-field>
              </v-col>
              <v-col cols="12" lg="6" sm="12">
                <v-text-field outlined dense label="Email *"></v-text-field>
              </v-col>
              <v-col cols="12" lg="6" sm="12">
                <v-text-field outlined dense label="Mot de passe *"></v-text-field>
              </v-col>
            </v-row>
            <v-btn color="primary">
              <v-icon>mdi-content-save</v-icon> Enregistrer
            </v-btn>
            <v-btn color="secondary ml-2" to="/clubs">
              <v-icon>mdi-cancel</v-icon> Annuler
            </v-btn>
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
      breadcrumbs: [
        {
          text: 'Accueil',
          disabled: false,
          to: '/home'
        },
        {
          text: 'Clubs',
          disabled: false,
          to: '/clubs',
          exact: true
        },
        {
          text: 'Ajouter un club',
          disabled: true,
        },
      ]
    }
  }
}
</script>

