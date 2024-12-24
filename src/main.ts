import { createApp } from 'vue'
import { createPinia } from 'pinia'
import i18n from '@/lang'
import App from './App.vue'
import router from './router'
import Antd from 'ant-design-vue'
import './assets/scss/main.scss'
import 'ant-design-vue/dist/reset.css'
import ModalVue from './components/common/Modal/ModalVue.vue'
import TableData from './components/common/TableData/TableData.vue'
// import { ImageSingleVue, ModalVue, ModalDelete, TableDataVue } from './components/common'

const app = createApp(App)

app.use(i18n)
app.use(Antd)
app.use(createPinia())
app.use(router)

app.component('modal-vue', ModalVue)
app.component('table-data', TableData)
app.mount('#app')
