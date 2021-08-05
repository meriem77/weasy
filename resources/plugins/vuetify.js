import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import '@mdi/font/css/materialdesignicons.css'

Vue.use(Vuetify)

const opts = {
    theme: {
        themes: {
            light: {
                primary: '#007CC7',
                // primary: '#26A69A',
                secondary: '#23233c',
            },
            dark: {
                primary: '#007CC7',
            },
        },
    },
}
export default new Vuetify(opts)
