<template>
    <h1 class="name-header">
        {{ name }}
    </h1>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class HelloComponent extends Vue {
    @Prop()
    name!: string;
}
</script>

<style>
.name-header {
    color: blue;
}
</style>
