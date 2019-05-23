import Vue from 'vue';
import Vuetify from 'vuetify';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import NavbarComponent from './components/Navbar.vue';
import BodyComponent from './components/Body.vue';
import FooterComponent from './components/Footer.vue';
import 'vuetify/dist/vuetify.min.css';


Vue.component('font-awesome-icon', FontAwesomeIcon);
library.add(fas);

Vue.use(Vuetify, {
    iconfont: 'faSvg',
});

new Vue({
    el: '#app',
    components: {
        NavbarComponent,
        BodyComponent,
        FooterComponent,
    },
    template: `
    <v-app>
        <v-container>
            <navbar-component />
            <body-component />
        </v-container>
        <footer-component />
    </v-app>
    `,
});
