import Vue from 'vue'
import VueI18n from 'vue-i18n'
import elementEnLocale from 'element-ui/lib/locale/lang/en'      
import elementZhLocale from 'element-ui/lib/locale/lang/zh-CN'
import enLocale from './en'
import zhLocale from './zh'
import rwLocale from './rw'
import hwLocale from './hw'

Vue.use(VueI18n)

const messages = {
    en: {
        ...enLocale
    },
    zh: {
        ...zhLocale
    },
    rw: {
        ...rwLocale
    },
    hw: {
        ...hwLocale
    },
}
const i18n = new VueI18n({
    locale: localStorage.getItem('locale') || 'en',
    messages
})

export default i18n
