import Vue from 'vue';
import './mystyles.scss';
import Buefy from 'buefy';
import HeaderComponent from './components/Header.vue';
import BodyComponent from './components/Body.vue';
import FooterComponent from './components/Footer.vue';

Vue.use(Buefy);

new Vue({
    el: '#app',
    components: {
        HeaderComponent,
        BodyComponent,
        FooterComponent,
    },
    template: `
    <div class="whole-page">
        <header-component />
        <footer-component />
    </div>
    `,
});
