import './assets/scss/main.scss'

import { createApp } from 'vue'
import { autoAnimatePlugin } from '@formkit/auto-animate/vue'
import App from './App.vue'
import router from './router'

import PrimeVue from 'primevue/config'
import Galleria from 'primevue/galleria'

const app = createApp(App)

app.use(router)
app.use(PrimeVue)
app.component('Galleria', Galleria)
app.use(autoAnimatePlugin)
app.mount('#app')
