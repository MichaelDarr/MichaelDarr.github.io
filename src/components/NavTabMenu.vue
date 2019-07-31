<template>
    <div class="tabs is-right">
        <ul>
            <NavTab
                link="/"
                display="About"
            />
            <NavTab
                link="/contact"
                display="Contact"
            />
        </ul>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import NavTab from './NavTab.vue';

@Component({
    components: {
        NavTab,
    },
})
export default class NavTabMenu extends Vue {}
</script>
