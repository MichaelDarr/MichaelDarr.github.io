import Vue from 'vue';
import VueRouter from 'vue-router';
import './mystyles.scss';
import Buefy from 'buefy';
import BlogPage from './routes/BlogPage.vue';
import ProjectsPage from './routes/ProjectsPage.vue';
import AboutPage from './routes/AboutPage.vue';
import ContactPage from './routes/ContactPage.vue';
import HeaderComponent from './components/Header.vue';
import BodyComponent from './components/Body.vue';
import FooterComponent from './components/Footer.vue';
import NavTabsComponent from './components/NavTabs.vue';

Vue.use(Buefy);
Vue.use(VueRouter);

const routes = [
    { path: '/', component: BlogPage },
    { path: '/about', component: AboutPage },
    { path: '/projects', component: ProjectsPage },
    { path: '/contact', component: ContactPage },
];

const router = new VueRouter({
    routes,
});

new Vue({
    el: '#app',
    components: {
        HeaderComponent,
        BodyComponent,
        FooterComponent,
        NavTabsComponent,
    },
    router,
});
