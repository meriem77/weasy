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
          <v-card-text>
            <v-row>
              <v-col lg="6" sm="12" cols="12">
                <v-text-field outlined dense clearable label="Email *"></v-text-field>
                <v-text-field outlined dense clearable label="Ancien mot de passe *"></v-text-field>
                <v-text-field outlined dense clearable label="Nouveau mot de passe *"></v-text-field>
                <v-text-field outlined dense clearable label="Confirmer le mot de passe *"></v-text-field>
                <v-btn color="primary">
                  <v-icon left>mdi-content-save</v-icon>
                  Enrigistrer
                </v-btn>
              </v-col>
              <v-col lg="6" sm="12" cols="12">
                <img src="assets/auth/password-amico.png" width="70%">
              </v-col>
            </v-row>
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
          text: 'Mon compte',
          disabled: true,
        },
      ]
    }
  }
}
</script>
