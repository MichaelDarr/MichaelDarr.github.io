import Vue, { VNode } from 'vue';
import Router from 'vue-router';
import './mystyles.scss';
import Buefy from 'buefy';
import App from './App.vue';
import About from './views/About.vue';
import Contact from './views/Contact.vue';

Vue.use(Buefy);
Vue.use(Router);

const router = new Router({
    routes: [
        {
            path: '/',
            name: 'about',
            component: About,
        },
        {
            path: '/contact',
            name: 'contact',
            component: Contact,
        },
    ],
});

new Vue({
    el: '#app',
    router,
    render: (h): VNode => h(App),
});
