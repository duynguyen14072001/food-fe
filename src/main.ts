import { createApp } from 'vue'
import { createPinia } from 'pinia'
import i18n from '@/lang'
import App from './App.vue'
import router from './router'
import Antd from 'ant-design-vue'
import './assets/scss/main.scss'
import 'ant-design-vue/dist/reset.css'
import {
    ImageMultiple,
    ImageSingle,
    ModalDelete,
    ModalVue,
    ProductItem,
    TableData,
} from './components/common'
import { VueDraggableNext } from 'vue-draggable-next'

const app = createApp(App)

app.use(i18n)
app.use(Antd)
app.use(createPinia())
app.use(router)

app.component('modal-vue', ModalVue)
app.component('table-data', TableData)
app.component('modal-delete', ModalDelete)
app.component('image-single', ImageSingle)
app.component('image-multiple', ImageMultiple)
app.component('draggable-vue', VueDraggableNext)
app.component('product-item', ProductItem)
app.mount('#app')
