<template>
    <div>
        <ContactHero />
        <ContactInfo />
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ContactHero from '../components/ContactHero.vue';
import ContactInfo from '../components/ContactInfo.vue';

@Component({
    components: {
        ContactHero,
        ContactInfo,
    },
})
export default class Contact extends Vue {}
</script>
