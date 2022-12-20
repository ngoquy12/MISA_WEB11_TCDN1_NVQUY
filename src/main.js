import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import MSCombobox from 'ms-combobox'
// import { createRouter, createWebHashHistory } from 'vue-router'


const app = createApp(App)
app.use(VueAxios, {$request : axios})
app.component('ms-combobox',MSCombobox)
// App.component("ms-combobox", MSCombobox)
app.mount('#app')


