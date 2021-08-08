import Vue from 'vue'
import Vuetify from 'vuetify'

Vue.use(Vuetify)

const opts = {
    theme: {
        themes: {
            light: {
                primary: '#007CC7',
                secondary: '#23233c',
            },
            dark: {
                primary: '#007CC7',
            },
        },
    },
}
export default new Vuetify(opts)
