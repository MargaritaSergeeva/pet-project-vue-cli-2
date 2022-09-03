import { createApp, defineAsyncComponent } from 'vue'
import App from './App.vue'
import './theme.css'

const app = createApp(App)

app.mount('#app')

app.component('app-async-component', defineAsyncComponent(() => {
  return import('./AppAsyncComponent')
}))
