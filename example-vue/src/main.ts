import {createApp} from 'vue'
import App from './App.vue'
import router from './router/index'

import '../../src/style/skeleton.scss'
import {initInject} from '../../src/inject'


createApp(App).use(router).mount('#app')

if (import.meta.env.DEV) {
  setTimeout(initInject)
}
