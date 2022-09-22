import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/main.css'
import './assets/app.25891a0f.css'
import './assets/brand-icons.css'
import './assets/chunk-0b31394b.9b79de5f.css'
import './assets/chunk-0bac896a.3525542e.css'
import './assets/chunk-0f9ec216.ccbad34f.css'
import './assets/chunk-0f70e37e.9d477c47.css'
import './assets/chunk-2f41d06b.2038a789.css'
import './assets/chunk-21cd804c.ac4a1e1e.css'
import './assets/chunk-7824f1fa.7e4a2f42.css'
import './assets/chunk-e989e16e.9504be83.css'
import './assets/chunk-vendors.d0eb6444.css'
import './assets/flag-icon.min.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import LoadScript from 'vue-plugin-load-script';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faTwitter, faYoutube, faInstagram, faFacebook, faTwitch, faTiktok, faLinkedin, faWhatsapp, faFacebookMessenger} from '@fortawesome/free-brands-svg-icons'
import { faUserSecret, faEnvelope, faMobile, faCartShopping, faArrowUpFromBracket, faCopy, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'

library.add(faTwitter, faYoutube, faInstagram, faFacebook, faTwitch, faTiktok, faUserSecret, faEnvelope, faMobile, faCartShopping, faArrowUpFromBracket, faLinkedin, faWhatsapp, faFacebookMessenger, faCopy, faArrowUpRightFromSquare)



const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(router, LoadScript)

app.mount('#app')
