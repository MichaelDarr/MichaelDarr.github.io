<template>
    <li
        class="is-size-6 nav-tab"
        :class="{ 'is-active': isActive() }"
    >
        <router-link :to="link">
            {{ display }}
        </router-link>
    </li>
</template>

<style lang="scss">
@import "../../node_modules/bulma/sass/utilities/initial-variables.sass";
@import "../../node_modules/bulma/sass/utilities/derived-variables.sass";
@import "../../node_modules/bulma/sass/utilities/mixins.sass";

.nav-tab {
    @include from($desktop) {
        font-size: 1.2em !important;
    }
}
</style>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';

@Component
export default class NavTab extends Vue {
    @Prop()
    link!: string;

    @Prop()
    display!: string;

    isActive(): boolean {
        return this.$route.path === this.link;
    }
}
</script>
