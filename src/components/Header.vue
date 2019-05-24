<template>
    <section class="section">
        <div class="container">
            <div class="columns is-centered">
                <div class="column is-full is-narrow">
                    <h1 class="title">
                        Michael Darr
                    </h1>
                    <h2 class="subtitle">
                        Programming Fanatic, Linux Evangelist, Music Buff
                    </h2>
                    <div class="tabs is-left">
                        <ul>
                            <li class="is-active">
                                <a>Blog</a>
                            </li>
                            <li><a>Projects</a></li>
                            <li><a>About</a></li>
                            <li><a>Contact</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class Navbar extends Vue {
}

</script>
