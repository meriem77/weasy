import axios from "axios";
import store from "./store";

export default function () {
    axios.get('/api/version').then(respponse => {
        store.dispatch("version", respponse.data.version).then(() => {
            console.log('App version', respponse.data.version)
        });
    }).catch(error => {
        console.log(error)
    })
}
