import Vue from 'vue'
import App from './app.vue'

const shadowRoot = document.body
const el = document.createElement('div')
document.body.appendChild(el)

new Vue({
  el,
  shadowRoot,
  components: {App},
  render: createElement => createElement('app')
})