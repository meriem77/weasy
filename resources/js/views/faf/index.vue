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
      <v-col lg="12" sm="12">
        <v-card>
          <v-card-text>
            <v-btn to="faf/create" color="primary" fab depressed>
              <v-icon>mdi-plus</v-icon>
            </v-btn>
            <br>
            <div class="text-center">
              <img src="assets/no-account.png" width="30%"/>
            </div>
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
          text: 'FAF',
          disabled: true,
        },
      ]
    }
  }
}
</script>

