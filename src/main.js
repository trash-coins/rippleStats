import Vue from 'vue';
import App from './App.vue';
import 'materialize-css/dist/css/materialize.css';
import VueRouter from 'vue-router';
import router from './router';



Vue.config.productionTip = false;
Vue.use(VueRouter);

new Vue({
    router,
    render: h => h(App),
}).$mount('#app');
