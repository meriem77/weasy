import Vue from 'vue'
import Vuetify from 'vuetify'
import fr from 'vuetify/es5/locale/fr';

Vue.use(Vuetify)

const opts = {
    theme: {
        themes: {
            light: {
                primary: '#1565C0',
                secondary: '#23233c',
            },
            dark: {
                primary: '#1565C0',
            },
        },
    },
    lang: {
        locales: {fr},
        current: 'fr',
    },
}
export default new Vuetify(opts)
