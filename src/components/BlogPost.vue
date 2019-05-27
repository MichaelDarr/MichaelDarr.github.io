<template functional>
    <section class="section blog-section">
        <div class="columns is-centered">
            <div class="column is-max-custom-width">
                <h1 class="title is-1">
                    How to Get Your Toddler a Job at&nbsp;
                    <a href="https://pitchfork.com/">
                        pitchfork.com
                    </a>
                </h1>
                <h3 class="subtitle is-3">
                    or, An Introduction to Supervised Machine Learning
                </h3>
                <p class="is-size-5 credit-line">
                    By <strong>Michael Darr</strong>
                    <br>
                    <small>May 7, 2019</small>
                </p>
                <div class="is-family-secondary is-size-2 blog-text">
                    <p>
                        Scattered on a desk in front of you are nearly twenty thousand manila folders: one for each album reviewed by Pitchfork in its 23-year history. Each folder contains just two sheets of paper. On the first is an exhaustive list of information related to a specific album - release date, sales figures, genre details, song lengths, chart placements, and so on. The second slip of paper is emblazoned with a single number - Pitchfork's own zero-to-ten album rating.
                    </p>
                    <p>
                        Across the table slouches your very own drooling toddler. He's never listened to a song in his life, and you're pretty sure he doesn't even know what music <i>is</i>. You pick up a folder from the table at random, Massive Attack's <i>Mezzanine</i>. You procure the information sheet from the file and hand it to the toddler. The other sheet, with the official Pitchfork album rating, stays with you. Patiently, you ask the toddler, "From zero to ten, what score did this receive on Pitchfork.com?" He stares at the paper, drooling with vigor. After some time, his head snaps up, eyes gleaming with pride.
                    </p>
                    <p>
                        <em>"One Point Five!"</em>
                    </p>
                    <p>
                        You take the second sheet from the folder, and see the correct answer - nine point three. You slide it across the desk to the child, telling him just how wrong he was while pointing to the giant <b>9.3</b>. He glances at the <b>9.3</b>, then back at the information sheet, then back at the <b>9.3</b>, and so on for several minutes. He thinks about how wrong he was. He wants to do better next time. He thinks, <i>"Next time I see an album that looks kinda like this one, I'll know to guess higher."</i> You can almost hear the gears turning in his head. The toddler hands both sheets back, which you place in the folder before tossing it to the ground. You pick up another folder from the table, nab the information sheet, and hand it over. "From zero to ten, what score did this receive on Pitchfork.com?"
                    </p>
                    <p>
                        You two sit in the room for five years, playing this game thousands of times. When every folder has been tossed to the floor, you put them all back on the table and repeat the exercise. As the years pass, the toddler grows both physically and mentally. He develops an uncanny intuition, able to guess each score with astonishing accuracy after seeing just its data sheet.
                    </p>
                    <p>
                        But how do you know that your child prodigy didn't simply memorize every one of the nearly twenty thousand answers? It's time for the big test. A man enters the room, removes every folder, and delivers several thousand new ones. Each folder in the new stack is laid out just like the previous ones, with the two sheets of paper. These are the albums that Pitchfork reviewed during the five years you've spent locked in this room with your child prodigy.
                    </p>
                    <p>
                        You start your excercise again with the new folders. Only this time, there will be no training. Your child will have no second chances, no time to learn - the answers are final. And guess what? The no-longer-just-a-toddler is nailing it. He's never seen these album stats before, but is still able to guess Pitchfork's new review scores with astonishing accuracy. You come to the conclusion that, going forward, this child will be able to approximate Pitchfork's upcoming album review scores before they are even published.
                    </p>
                    <p>
                        And just like that, you've trained your first neural network.
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss">
@import "../../node_modules/bulma/sass/utilities/initial-variables.sass";
@import "../../node_modules/bulma/sass/utilities/derived-variables.sass";
@import "../../node_modules/bulma/sass/utilities/mixins.sass";

.credit-line {
    margin-bottom: 2em;
}

.blog-section {
    .title {
        margin-top: 0em;
        font-size: 2.5em;
        @include from($desktop) {
            margin-top: 1em;
            font-size: 2.1em;
        }
    }

    .subtitle {
        margin-bottom: 1em;
        font-size: 1.2em;
        @include from($desktop) {
            font-size: 1.5em;
        }
    }

    .credit-line {
        padding-left: 1em;
        margin-bottom: 1em;
        @include from($desktop) {
            padding-left: 2em;
            font-size: 1.2em !important;
        }
    }

    .blog-text {
        color: #111;
        font-size: 1em !important;
        @include from($desktop) {
            font-size: 1.3em !important;
            max-width: 720px;
        }

        p {
            margin-bottom: 2em;
            @include from($desktop) {
                margin-bottom: 1em;
            }
        }
    }
}
</style>
