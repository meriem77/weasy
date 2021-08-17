<template>
    <div>
        <v-footer app inset :color="$vuetify.theme.dark ? '' :'white'">
            <span>&copy; {{ new Date().getFullYear() }} - V {{ $store.state.version }}</span>
            <v-spacer/>
            <a href="https://kaiztech.co/" target="_blank">
                <img src="https://kaiztech.co/images/logo.png" width="80">
            </a>
        </v-footer>
    </div>
</template>

<script>
export default {}
</script>
