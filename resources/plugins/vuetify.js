import Vue from 'vue'
import Vuetify from 'vuetify'
import fr from 'vuetify/es5/locale/fr';
import 'vuetify/dist/vuetify.min.css'
// import Vuetify from 'vuetify/lib'

Vue.use(Vuetify)
const opts = {
    theme: {
        themes: {
            light: {
                primary: '#000000',
                secondary: '#38383a',
            },
            dark: {
                primary: '#151515',
            },
        },
    },
    lang: {
        locales: {fr},
        current: 'fr',
    },
}
export default new Vuetify(opts)
