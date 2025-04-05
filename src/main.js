import './assets/main.css'

import { createApp } from 'vue'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

import i18n from './plugin/vueI18n'
import { localeStorageFunc } from "@/storage/localeStorage.js"; // Импортируйте функцию локализации
import Elru from 'element-plus/es/locale/lang/ru';
import Elen from 'element-plus/es/locale/lang/en';
import 'dayjs/locale/ru.js'
import 'dayjs/locale/en.js'

const { getLang } = localeStorageFunc();

import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

let lang = getLang();
const elementLocale = lang === 'en' ? Elen : Elru;
app.use(i18n)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.use(ElementPlus, { locale: elementLocale });


app.use(createPinia())
app.use(router)

app.mount('#app')
