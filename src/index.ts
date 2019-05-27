import Vue from 'vue';
import VueRouter from 'vue-router';
import './mystyles.scss';
import Buefy from 'buefy';
import HeaderComponent from './components/Header.vue';
import FooterComponent from './components/Footer.vue';
import FooterInvisComponent from './components/FooterInvis.vue';
import BlogPostComponent from './components/BlogPost.vue';
import NavTabMenuComponent from './components/NavTabMenu.vue';
import NavTabComponent from './components/NavTab.vue';
import ContactHeroComponent from './components/ContactHero.vue';
import ContactInfoComponent from './components/ContactInfo.vue';
import IconLinkComponent from './components/IconLink.vue';

const BlogPage = () => import('./routes/BlogPage.vue');
const AboutPage = () => import('./routes/AboutPage.vue');
const ContactPage = () => import('./routes/ContactPage.vue');

Vue.use(Buefy);
Vue.use(VueRouter);

const routes = [
    { path: '/', component: BlogPage },
    { path: '/about', component: AboutPage },
    { path: '/contact', component: ContactPage },
];

const router = new VueRouter({
    routes,
});

new Vue({
    el: '#app',
    components: {
        HeaderComponent,
        FooterComponent,
        FooterInvisComponent,
        BlogPostComponent,
        NavTabMenuComponent,
        NavTabComponent,
        ContactHeroComponent,
        ContactInfoComponent,
        IconLinkComponent,
    },
    router,
});
