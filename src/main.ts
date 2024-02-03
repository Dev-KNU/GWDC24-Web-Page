import './assets/base.scss'

import { createApp } from 'vue'
import App from './App.vue'
import VueGtag from 'vue-gtag-next';
import BootstrapVueNext from 'bootstrap-vue-next'

const app = createApp(App)

app.use(VueGtag, {
    property: { id: "G-TQ4VDNCPH3" }
});
app.use(BootstrapVueNext)
app.mount('#app')
