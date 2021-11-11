import { createApp } from 'vue'
import App from '~/App.vue'
import router from '~/routes'
import store from '~/store'
import "~/routes/guards"
import Loader from "~/components/Loader"

const app = createApp(App)
app.use(router)
app.use(store)
//로딩애니메이션을 전역 컴포넌트로 등록
app.component("Loader", Loader) 
app.mount('#app')


