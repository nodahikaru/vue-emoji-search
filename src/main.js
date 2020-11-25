import Vue from 'vue'
import App from './App.vue'
import VueGitHubButtons from 'vue-github-buttons';
import 'vue-github-buttons/dist/vue-github-buttons.css';
import Clipboard from 'v-clipboard';
import UUID from 'vue-uuid';

Vue.config.productionTip = false
Vue.use(VueGitHubButtons);
Vue.use(Clipboard);
Vue.use(UUID);

new Vue({
  render: h => h(App),
}).$mount('#app')
