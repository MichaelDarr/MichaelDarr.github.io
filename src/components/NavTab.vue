<template>
    <li :class="{ 'is-active': isActive() }">
        <router-link :to="link">
            {{ display }}
        </router-link>
    </li>
</template>

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
