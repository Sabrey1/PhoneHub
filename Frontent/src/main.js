import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import Aura from '@primeuix/themes/aura';
import router from './routers/routes.js'

import '/node_modules/primeflex/primeflex.css'


import 'primeicons/primeicons.css'

// import from primevue
import Button from "primevue/button"


import SideBar from "@/Layouts/SideBar.vue"


const app = createApp(App)
app.use(PrimeVue, {
    theme: {
        preset: Aura
    }
});
app.use(router) 

app.component('Button', Button);



// component
app.component('SideBar', SideBar);

app.mount('#app')
