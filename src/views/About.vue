<template>
    <section class="section">
        <div class="columns is-centered">
            <div class="column is-max-custom-width">
                <h2 class="projects-header">
                    Open Source
                </h2>
                <h3>
                    Ahab
                </h3>
                <p class="sub-heading">
                    Dockerize your Project, Git Style
                </p>
                <ul>
                    <li>
                        <a href="https://github.com/MichaelDarr/ahab">
                            Source Code &amp; Documentation
                        </a>
                    </li>
                    <li>
                        <a href="https://aur.archlinux.org/packages/ahab/">
                            Arch Linux Package (AUR)
                        </a>
                    </li>
                    <li>
                        <a href="https://launchpad.net/~michaeldarr/+archive/ubuntu/ppa">
                            Ubuntu Package (PPA)
                        </a>
                    </li>
                </ul>
                <h3>
                    google/glog
                </h3>
                <p class="sub-heading">
                    The Google logging module (<a href="https://github.com/google/glog/blob/master/CONTRIBUTORS">contributor</a>)
                </p>
                <h3>
                    μCritic
                </h3>
                <p class="sub-heading">
                    Learning Music Taste With Deep Neural Nets
                </p>
                <ul>
                    <li>
                        <a href="https://michaeldarr.github.io/MuCritic_App/">
                            Live Demo
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/MichaelDarr/MuCritic/">
                            Source Code
                        </a>
                        <span class="sub-heading">
                            Modeling &amp; Data Aquisition
                        </span>
                    </li>
                    <li>
                        <a href="https://michaeldarr.github.io/MuCritic/">
                            Technical Documentation
                        </a>
                        <span class="sub-heading">
                            TSDocs
                        </span>
                    </li>
                    <li>
                        <a href="https://github.com/MichaelDarr/MuCritic_App/">
                            Source Code
                        </a>
                        <span class="sub-heading">
                            Demo Site
                        </span>
                    </li>
                </ul>
                <h3>
                    Visualify
                </h3>
                <p class="sub-heading">
                    Spotify-Based Music Visualization
                </p>
                <ul>
                    <li>
                        <a href="https://michaeldarr.github.io/Visualify">
                            Live Site
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/MichaelDarr/Visualify">
                            Source Code
                        </a>
                    </li>
                </ul>
                <h2>Education</h2>
                <p>College of William &amp; Mary, Class of 2019</p>
                <ul>
                    <li>
                        <span class="degree">
                            Major
                        </span>
                        : Computer Science
                    </li>
                    <li>
                        <span class="degree">
                            Minor
                        </span>
                        : Economics
                    </li>
                </ul>
                <span class="about-spacer" />
                <h2>Favorite Tech</h2>
                <ul>
                    <li>Arch Linux</li>
                    <li>CMake</li>
                    <li>Docker</li>
                    <li>Go</li>
                    <li>Node.js/TypeScript</li>
                    <li>PyTorch</li>
                    <li>Vue/Vuex</li>
                    <li>Yocto</li>
                </ul>
            </div>
        </div>
    </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Blog extends Vue {}
</script>

<style lang="scss" scoped>
@import "../../node_modules/bulma/sass/utilities/initial-variables.sass";
@import "../../node_modules/bulma/sass/utilities/derived-variables.sass";
@import "../../node_modules/bulma/sass/utilities/mixins.sass";

h2 {
    font-size: 1.3em;
    margin-top: 1em;
    text-decoration: underline;
}

h3 {
    margin-top: 0.5em;
    font-weight: 500;
    font-size: 1.1em;
}

.sub-heading {
    color: #444;
    font-size: 0.9em;
}

ul {
    list-style: inside;
}

.projects-header {
    margin-top: 0;
}

.about-spacer {
    display: block;
    height: 1em;
}

.degree {
    font-weight: 500;
}
</style>
