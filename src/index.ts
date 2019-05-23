import Vue from 'vue';
import NameComponent from './components/Name.vue';

const v = new Vue({
    el: '#app',
    components: {
        NameComponent,
    },
    data: { name: 'Michael Darr' },
    template: `
    <div>
        <name-component :name="name"/>
    </div>
    `,
});
