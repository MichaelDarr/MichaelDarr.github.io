<template>
    <section class="section contact-info-section">
        <div class="container">
            <div class="columns is-centered">
                <div class="column is-max-custom-width">
                    <div class="columns is-mobile">
                        <div class="column is-narrow contact-link-holder">
                            <IconLink
                                link="mailto:michael.e.darr@gmail.com"
                                display-link="michael.e.darr@gmail.com"
                                icon-pack="fa"
                                icon-name="envelope"
                            />
                            <IconLink
                                link="https://github.com/MichaelDarr"
                                display-link="github.com/MichaelDarr"
                                icon-pack="fab"
                                icon-name="github"
                            />
                            <IconLink
                                link="https://www.linkedin.com/in/michael-darr/"
                                display-link="linkedin.com/in/michael-darr"
                                icon-pack="fab"
                                icon-name="linkedin"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import IconLink from './IconLink.vue';

@Component({
    components: {
        IconLink,
    },
})
export default class ContactInfo extends Vue {}
</script>


<style lang="scss">
@import "../../node_modules/bulma/sass/utilities/initial-variables.sass";
@import "../../node_modules/bulma/sass/utilities/derived-variables.sass";
@import "../../node_modules/bulma/sass/utilities/mixins.sass";

.contact-info-section {
    .contact-link-holder {
        margin-left: 0.75rem;
    }
}
</style>
