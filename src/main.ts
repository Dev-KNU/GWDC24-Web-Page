import './assets/base.scss'

import { createApp } from 'vue'
import App from './App.vue'
import BootstrapVueNext from 'bootstrap-vue-next'

const app = createApp(App)

app.use(BootstrapVueNext)
app.mount('#app')
