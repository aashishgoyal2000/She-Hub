import { defineStore } from 'pinia'

export const useLocaleStore = defineStore({
  id: 'locale',
  state: () => ({
    currentLocale: null,
    localeList: null
  }),
  getters: {
    getCurrentLanguage: (state) => {
      if(state.currentLocale !== null){
        const localeToLangMap = { 'en': 'english', 'hi': 'hindi' }
        return localeToLangMap[state.currentLocale]
      }else{
        return null
      }
      
    }
  },
  actions: {
    setLocale(locale) {
      this.currentLocale = locale
    },
    setLocaleList(localeList) {
      this.localeList = localeList
    }
  }
})
