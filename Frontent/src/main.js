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
import VChart from 'vue-echarts'

import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import IconField from 'primevue/iconfield';
import InputIcon from 'primevue/inputicon';
import InputText from 'primevue/inputtext';
import Avatar from 'primevue/avatar';
import Dialog from 'primevue/dialog';
import Select from 'primevue/select';



const app = createApp(App)
app.use(PrimeVue, {
    theme: {
        preset: Aura
    }
});
app.use(router) 
app.component('v-chart', VChart)


app.component('Button', Button);
app.component('DataTable', DataTable);
app.component('Column', Column);
app.component('IconField', IconField);
app.component('InputIcon', InputIcon);
app.component('InputText', InputText);
app.component('Avatar', Avatar);
app.component('Dialog', Dialog);
app.component('Select', Select);



// component
app.component('SideBar', SideBar);

app.mount('#app')
