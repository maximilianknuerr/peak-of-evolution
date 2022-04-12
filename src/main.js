import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import router from './router'
import { createStore } from 'vuex'

loadFonts()
const store = createStore({
  state () {
    return {
      language: false
    }
  },
  mutations: {
    updateLanguage (state, value) {
      state.language = value
    }
  }
})

createApp(App).use(router)
  .use(store)
  .use(vuetify)
  .mount('#app')
