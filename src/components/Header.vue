<template functional>
    <section class="section header-section">
        <div class="columns is-centered">
            <div class="column is-full is-max-custom-width">
                <h1 class="title is-size-1">
                    Michael Darr
                </h1>
                <h3 class="subtitle is-size-3">
                    Programming Fanatic, Linux Evangelist, Music Buff
                </h3>
                <nav-tab-menu-component />
            </div>
        </div>
    </section>
</template>

<style lang="scss">
@import "../../node_modules/bulma/sass/utilities/initial-variables.sass";
@import "../../node_modules/bulma/sass/utilities/derived-variables.sass";
@import "../../node_modules/bulma/sass/utilities/mixins.sass";

.header-section {
    padding-bottom: 0 !important;
    .title {
        font-size: 2em !important;
    }
    .subtitle {
        font-size: 1.1em !important;
        @include from($desktop) {
            font-size: 1.5em !important;
        }
    }
}
</style>
