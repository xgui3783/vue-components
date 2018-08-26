import Vue from 'vue'
// import App from './App'
import Modal from './components/modal.vue'
import Pill from './components/pill.vue'
import AutoComplete from './components/autocomplete.vue'
import CopyField from './components/copyfield.vue'
import Readmore from './components/readmore.vue'
import CheckBox from './components/checkbox.vue'

Vue.config.productionTip = false

/* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   render: h => h(App)
// })
Vue.component('vue-modal', Modal)
Vue.component('vue-pill', Pill)
Vue.component('vue-autocomplete', AutoComplete)
Vue.component('vue-copyfield', CopyField)
Vue.component('vue-readmore', Readmore)
Vue.component('vue-checkbox', CheckBox)
