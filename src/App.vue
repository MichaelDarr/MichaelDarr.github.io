<template>
    <div id="app">
        <div class="whole-page">
            <Header />
            <router-view />
            <FooterInvis />
            <Footer />
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import Footer from './components/Footer.vue';
import FooterInvis from './components/FooterInvis.vue';
import Header from './components/Header.vue';

@Component({
    components: {
        Footer,
        FooterInvis,
        Header,
    },
})
export default class App extends Vue {}
</script>
