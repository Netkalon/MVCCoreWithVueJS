import Vue from 'vue'
import PrivacyApp from './PrivacyApp.vue'

Vue.config.productionTip = false

new Vue({
    render: h => h(PrivacyApp),
}).$mount('#privacyapp')
