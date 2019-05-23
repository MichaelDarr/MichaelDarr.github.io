import Vue from 'vue';
import Vuetify from 'vuetify';
import NavbarComponent from './components/Navbar.vue';
import FooterComponent from './components/Footer.vue';
import 'vuetify/dist/vuetify.min.css';

Vue.use(Vuetify);

new Vue({
    el: '#app',
    components: {
        NavbarComponent,
        FooterComponent,
    },
    template: `
    <v-app>
        <v-container grid-list-md text-xs-center>
            <navbar-component />
        </v-container>
        <footer-component />
    </v-app>
    `,
});
