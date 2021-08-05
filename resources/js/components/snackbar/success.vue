<template>
  <div>
    <v-snackbar :value="$success" top right color="teal accent-4"
                :timeout="4000" @input="closeSnackbar">
      Cet élément a été enregistré avec succès...
      <template v-slot:action="{ attrs }">
        <v-btn icon text v-bind="attrs" @click="$success = false">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>
<script>
export default {
  methods: {
    closeSnackbar() {
      this.$success = false
    }
  },
}
</script>
