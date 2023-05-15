import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'


import { library } from '@fortawesome/fontawesome-svg-core'

import { fas } from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


library.add(fas);


createApp(App).component('font-awesome-icon', FontAwesomeIcon).use(router).use(store).mount('#app')




