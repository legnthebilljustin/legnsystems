import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
import axios from "axios"
import { createPinia } from "pinia"

const pinia = createPinia()

axios.defaults.baseURL = process.env.VUE_APP_API_URL
axios.defaults.headers.common.Authorization = 'Bearer 18|CMTxFWSJ1kQ1OrV0jEYyvqZCnkQrEt91KPAKy9Sw'
axios.defaults.headers.common['Access-Control-Allow-Origin'] = "*"

createApp(App).use(router).use(pinia).mount("#app")
