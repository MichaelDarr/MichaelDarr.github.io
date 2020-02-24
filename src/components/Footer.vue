<template functional>
    <footer class="footer footer-section real-footer">
        <div class="columns is-centered">
            <div class="column is-full is-max-custom-width">
                <div class="columns is-mobile">
                    <div class="column">
                        <p class="is-size-2 mail-link">
                            <a href="mailto:michael.e.darr@gmail.com">
                                michael.e.darr@gmail.com
                            </a>
                        </p>
                        <p class="is-size-3 location-text">
                            Hacking in Palo Alto, CA
                        </p>
                    </div>
                    <div class="column is-narrow has-text-right is-narrow brand-link-holder">
                        <a
                            class="brand-link"
                            href="https://www.linkedin.com/in/michael-darr-605782a3/"
                        >
                            <b-icon
                                pack="fab"
                                icon="linkedin"
                            />
                        </a>
                        <div class="spacer" />
                        <a
                            class="brand-link"
                            href="https://github.com/MichaelDarr"
                        >
                            <b-icon
                                pack="fab"
                                icon="github"
                            />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<style lang="scss">
@import "../../node_modules/bulma/sass/utilities/initial-variables.sass";
@import "../../node_modules/bulma/sass/utilities/derived-variables.sass";
@import "../../node_modules/bulma/sass/utilities/mixins.sass";

.footer-section {
    bottom: 0;
    width: 100%;
    margin-top: 0;
}

.real-footer {
    position: absolute;
}

.brand-link-holder {
    padding-top: 1rem;
    padding-bottom: 0.8rem;
    @include from($desktop) {
        padding-top: 1.2rem;
    }

    .brand-link {
        font-size: 1.6rem;
        @include from($desktop) {
            font-size: 1.7rem;
        }
    }
}

.mail-link {
    font-size: 0.9em !important;
}

.location-text {
    font-size: 0.8em !important;
}

.spacer {
    display: inline-block;
    width: 1.5rem;
    @include from($desktop) {
        width: 5rem;
    }
}
</style>
