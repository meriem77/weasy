<template>
    <div>
        <v-footer app inset :color="$vuetify.theme.dark ? '' :'white'">
            <span> © {{ new Date().getFullYear() }} <a href="https://kaiztech.co/" target="_blank"> kaiztech.co </a> Tous droits réservés.</span>
            <v-spacer/>
        </v-footer>
    </div>
</template>

<script>
export default {}
</script>
