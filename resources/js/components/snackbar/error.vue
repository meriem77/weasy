<template>
  <div>
    <v-snackbar :value="$error" top left color="red accent-3"
                :timeout="4000" @input="closeSnackbar">
      Il y a des erreurs qui doivent être corrigées, puis réessayez...
      <template v-slot:action="{ attrs }">
        <v-btn icon text v-bind="attrs" @click="$error = false">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>
<script>
export default  {
  methods: {
    closeSnackbar() {
      this.$error = false
    }
  },

}
</script>