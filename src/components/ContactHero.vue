<template functional>
    <section class="hero is-primary is-bold contact-hero-section">
        <div class="hero-body">
            <div class="container">
                <div class="columns is-centered">
                    <div class="column is-full is-max-custom-width">
                        <p class="title main-title">
                            Questions, Comments, Inquiries?
                        </p>
                        <p class="subtitle is-2 secondary-title">
                            Get in Touch
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss">
@import "../../node_modules/bulma/sass/utilities/initial-variables.sass";
@import "../../node_modules/bulma/sass/utilities/derived-variables.sass";
@import "../../node_modules/bulma/sass/utilities/mixins.sass";

.contact-hero-section {
    .main-title {
        font-size: 1.2em;
    }

    .secondary-title {
        font-size: 2em;
    }
}
</style>
