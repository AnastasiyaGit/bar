import { createI18n } from 'vue-i18n'
import {localeStorageFunc} from "@/storage/localeStorage.js";
//import ruCn from 'element-plus/dist/locale/ru.mjs'
//import Elru from 'element-plus/es/locale/lang/ru'
import Elru from 'element-plus/es/locale/lang/ru'
import Elen from 'element-plus/es/locale/lang/en'
import enLocale from './en'
import ruLocale from './ru'
import ElDaysRu from 'dayjs/locale/ru'
import ElDaysEn from 'dayjs/locale/en'
import {ref} from "vue";

const{getLang}=localeStorageFunc()
let lang = getLang()
//console.log(lang)

let messages = {
  ru: {
    ...ruLocale,
    ...Elru,
    ...ElDaysRu,
  },
  en: {
    ...enLocale,
    ...ElDaysEn,
    ...Elen,
  }
}


const i18n = createI18n({
  locale: lang,
  fallbackLocale: 'en',
  messages,
  legacy: false,
})
export default i18n
