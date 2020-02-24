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
            component: About,
            meta: {title: 'Michael Darr - About'},
            name: 'about',
            path: '/',
        },
        {
            component: Contact,
            meta: {title: 'Michael Darr - Contact'},
            name: 'contact',
            path: '/contact',
        },
    ],
});

router.beforeEach((to, _, next) => {
    document.title = to.meta.title;
    next();
});

new Vue({
    el: '#app',
    router,
    render: (h): VNode => h(App),
});
