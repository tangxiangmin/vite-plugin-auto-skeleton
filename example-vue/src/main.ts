import { createApp } from 'vue'

// eslint-disable-next-line antfu/no-import-dist
import '../../dist/skeleton.css'
// eslint-disable-next-line antfu/no-import-dist
import { initInject } from '../../dist/client'

import App from './App.vue'
import router from './router/index'

import 'uno.css'

createApp(App).use(router).mount('#app')

if (import.meta.env.DEV) {
  setTimeout(initInject)
}
