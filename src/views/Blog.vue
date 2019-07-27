<template>
    <BlogPost />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import BlogPost from '../components/BlogPost.vue';

@Component({
    components: {
        BlogPost,
    },
})
export default class Blog extends Vue {}
</script>
