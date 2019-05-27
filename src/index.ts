import Vue from 'vue';
import VueRouter from 'vue-router';
import './mystyles.scss';
import Buefy from 'buefy';
import BlogPage from './routes/BlogPage.vue';
import AboutPage from './routes/AboutPage.vue';
import ContactPage from './routes/ContactPage.vue';
import HeaderComponent from './components/Header.vue';
import FooterComponent from './components/Footer.vue';
import BlogPostComponent from './components/BlogPost.vue';
import NavTabMenuComponent from './components/NavTabMenu.vue';
import NavTabComponent from './components/NavTab.vue';
import ContactHeroComponent from './components/ContactHero.vue';
import ContactInfoComponent from './components/ContactInfo.vue';
import IconLinkComponent from './components/IconLink.vue';

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
        BlogPostComponent,
        NavTabMenuComponent,
        NavTabComponent,
        ContactHeroComponent,
        ContactInfoComponent,
        IconLinkComponent,
    },
    router,
});
