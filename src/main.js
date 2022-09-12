import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import i18n from '@/plugins/i18n';

import './assets/main.css'
import { Quasar } from 'quasar'
import quasarUserOptions from './quasar-user-options'
import "quasar/dist/quasar.sass"

const app = createApp(App).use(Quasar, quasarUserOptions)

app.use(createPinia())
app.use(router)
app.use(i18n)

app.mount('#app')
