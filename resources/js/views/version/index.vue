<template>
  <div>
    <v-card class="mb-3">
      <v-breadcrumbs :items="breadcrumbs" large>
        <template v-slot:divider>
          <v-icon>mdi-chevron-right</v-icon>
        </template>
      </v-breadcrumbs>
    </v-card>
    <v-row v-if="dataLoading">
      <v-col lg="8" sm="12" md="8">
        <v-sheet color="lighten-4">
          <v-skeleton-loader type="card"></v-skeleton-loader>
        </v-sheet>
      </v-col>
    </v-row>
    <v-row v-else>
      <v-col lg="8" sm="12">
        <v-card>
          <v-card-title>
            <v-btn color="primary" fab depressed @click="dialog = true">
              <v-icon>mdi-pencil-outline</v-icon>
            </v-btn>
            <v-spacer></v-spacer>
            <h4 style="color:#26A69A">V {{ version.version }}</h4>
          </v-card-title>
          <v-card-text>
            <div class="text-center">
              <img src="assets/version.png" width="40%"/>
            </div>
            <v-icon small>mdi-calendar-clock</v-icon>
            {{ version.updatedAt.date }} , {{ version.updatedAt.time }}
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <!--Modal-->
    <v-dialog v-model="dialog" width="500">
      <form @submit.prevent="updateVersion">
        <v-card>
          <v-card-title class="text--secondary">
            Changer !
          </v-card-title>
          <v-divider></v-divider>
          <v-card-text>
            <div class="mt-8">
              <v-text-field outlined dense label="Version *" v-model="form.version"></v-text-field>
            </div>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-actions class="pa-4">
            <v-btn color="secondary" @click="dialog = false">
              <v-icon left>mdi-cancel</v-icon>
              Fermer
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn color="primary" type="submit" :loading="btnLoading">
              <v-icon left>mdi-content-save</v-icon>
              Enrigistrer
            </v-btn>
          </v-card-actions>
        </v-card>
      </form>
    </v-dialog>
    <!--Modal-->
  </div>
</template>

<script>
export default {
  data() {
    return {
      dataLoading: false,
      btnLoading: false,
      dialog: false,
      version: '',
      breadcrumbs: [
        {
          text: 'Accueil',
          disabled: false,
          to: '/home'
        },
        {
          text: 'Version',
          disabled: true,
        },
      ],
      form: {}
    }
  },
  methods: {
    getVersion() {
      this.dataLoading = true
      this.$axios.get('/version').then(response => {
        this.dataLoading = false
        this.version = response.data.data
        this.form.version = response.data.data.version
      }).catch(error => {
        this.dataLoading = false
        console.log(error)
      })
    },
    updateVersion() {
      this.btnLoading = true
      this.$axios.post('/version/update', {
        id: this.version._id,
        version: this.form.version,
      }).then(() => {
        this.dialog = false
        this.btnLoading = false
        this.$error = false
        this.$success = true
        this.getVersion()
      }).catch(error => {
        this.btnLoading = false
        this.$success = false
        this.$error = true
        console.log(error)
      })
    }
  },
  created() {
    this.getVersion()
  }
}
</script>

