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
      <v-col lg="8" cols="12" md="8">
        <form @submit.prevent="createClub" enctype="multipart/form-data">
          <v-card>
            <v-card-title class="text--secondary">
              Ajouter un club
            </v-card-title>
            <v-divider></v-divider>
            <v-card-text>
              <v-row>
                <v-col cols="12" lg="12" md="12">
                  <v-select :loading="loadingLeague"
                            :error-messages="validateErrMessages.league_id"
                            v-model="form.league_id"
                            :items="leagues"
                            item-value="_id"
                            item-text="name"
                            outlined dense label="Ligue *"></v-select>
                </v-col>
                <v-col cols="12" lg="6" md="6">
                  <v-text-field :error-messages="validateErrMessages.name"
                                v-model="form.name"
                                outlined dense label="Nom *"></v-text-field>
                </v-col>
                <v-col cols="12" lg="6" md="6">
                  <v-text-field :error-messages="validateErrMessages.slogan"
                                v-model="form.slogan"
                                outlined dense label="Slogan *"></v-text-field>
                </v-col>
                <v-col cols="12" lg="12" md="12">
                  <v-file-input ref="logo" append-icon="mdi-image" counter
                                :error-messages="validateErrMessages.logo"
                                outlined dense
                                show-size
                                label="Logo *" @change="uploadFile"></v-file-input>
                </v-col>
              </v-row>
              <div class="my-2">
                <v-btn color="primary" type="submit" :loading="btnLoading">
                  <v-icon left>mdi-content-save</v-icon>
                  Enregistrer
                </v-btn>
                <v-btn color="secondary ml-2" to="/clubs">
                  <v-icon left>mdi-cancel</v-icon>
                  Annuler
                </v-btn>
              </div>
            </v-card-text>
          </v-card>
        </form>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      validateErrMessages: '',
      btnLoading: false,
      loadingLeague: false,
      leagues: [],
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
      ],
      form: {
        league_id: '',
        name: '',
        slogan: '',
        logo: '',
      }
    }
  },
  methods: {
    uploadFile(file) {
      this.form.logo = file
    },
    createClub() {
      this.validateErrMessages = ''
      this.btnLoading = true
      let formData = new FormData();
      formData.append('league_id', this.form.league_id)
      formData.append('name', this.form.name)
      formData.append('logo', this.form.logo)
      formData.append('slogan', this.form.slogan)
      axios.post('/clubs', formData).then(() => {
        this.clearForm()
        this.$error = false
        this.btnLoading = false
        this.$success = true
      }).catch(error => {
        this.$error = true
        this.$success = false
        this.validateErrMessages = error.response.data.errors
        this.btnLoading = false
        console.log(error)
      })
    },
    getLeagues() {
      this.loadingLeague = true
      axios.get('/leagues').then(response => {
        this.loadingLeague = false
        this.leagues = response.data
      }).catch(error => {
        console.log(error)
        this.loadingLeague = true
      })
    },
    clearForm() {
      this.form.league_id = ''
      this.form.name = ''
      this.form.slogan = ''
      this.form.logo = ''
      this.$refs.logo.reset()
    },
  },
  created() {
    this.getLeagues()
  }
}
</script>

<style>
.v-input__prepend-outer {
  display: none;
}
</style>
