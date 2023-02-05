import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
import axios from 'axios'
import { createPinia } from "pinia"

const pinia = createPinia()

axios.defaults.baseURL = process.env.VUE_APP_API_URL


createApp(App).use(router).use(pinia).mount("#app")
