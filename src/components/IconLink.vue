<template>
    <div class="is-mobile level is-mobile force-left-justify">
        <span class="level-item is-narrow">
            <a
                class="icon-container"
                :href="link"
            >
                <b-icon
                    class="brand-link"
                    :pack="iconPack"
                    :icon="iconName"
                />
            </a>
        </span>
        <span class="level-item force-left-justify is-narrow is-size-6">
            <a :href="link">
                {{ displayLink }}
            </a>
        </span>
    </div>
</template>

<style lang="scss">
@import "../../node_modules/bulma/sass/utilities/initial-variables.sass";
@import "../../node_modules/bulma/sass/utilities/derived-variables.sass";
@import "../../node_modules/bulma/sass/utilities/mixins.sass";

.icon-container {
    display: inline-block;
    font-size: 2rem;
    margin-right: 1rem;
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
    displayLink!: string;

    @Prop()
    iconPack!: string;

    @Prop()
    iconName!: string;
}
</script>
