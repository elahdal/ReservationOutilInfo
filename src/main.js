import { createApp } from 'vue'
import App from './App.vue'
import 'bulma/css/bulma.css'
import {db,auth} from './firebase'
import router from './routers'

const app = createApp(App)

//ajouter firebase à vue
app.config.globalProperties.$db = db;
app.config.globalProperties.$auth = auth;

app.use(router);

app.mount('#app')

