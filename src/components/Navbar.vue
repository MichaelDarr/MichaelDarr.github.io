<template>
    <v-toolbar dark>
        <v-toolbar-title>
            Michael Darr
        </v-toolbar-title>
        <v-spacer />
        <v-toolbar-items>
            <v-btn flat>
                About
            </v-btn>
            <v-btn flat>
                Blog
            </v-btn>
            <v-btn flat>
                Contact
            </v-btn>
        </v-toolbar-items>
    </v-toolbar>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class Navbar extends Vue {
}

</script>
