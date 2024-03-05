import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css'

import './assets/base.scss'

import { createApp } from 'vue'
import VueGtag from 'vue-gtag-next'
import BootstrapVueNext from 'bootstrap-vue-next'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(VueGtag, {
    property: { id: 'G-TQ4VDNCPH3' }
})
app.use(BootstrapVueNext)
app.use(router)
app.mount('#app')
