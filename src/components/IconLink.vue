<template>
    <p class="is-mobile level force-left-justify">
        <span class="level-item is-narrow">
            <a :href="link">
                <b-icon
                    class="brand-link"
                    :pack="iconPack"
                    :icon="iconName"
                    size="is-medium"
                />
            </a>
        </span>
        <span class="level-item force-left-justify is-narrow">
            <a :href="link">
                {{ displayLink }}
            </a>
        </span>
    </p>
</template>

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
