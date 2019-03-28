<template>
    <div>
        <callout-top :calloutTitle="calloutTitle"></callout-top>
        <div class="container" v-for="(article, index) in blog" :key="index">
            <h2>{{ article.header }}</h2>
            <h5>{{ article.date }}</h5>
            <img :src="article.image" alt="">
            <p v-html="article.text"></p>
        </div>
    </div>
</template>

<script>
import CalloutTop from './CalloutTop.vue';
import db from '@/firebase/init';

export default {
data() {
    return {
      calloutTitle: "BLOG"
    };
  },
  created() {
      this.$store.dispatch('displayBlog');
    },
  computed: {
    blog: function() {
        return this.$store.getters.blog;
    },
  },
  components: {
    CalloutTop,
    }
}
</script>

<style scoped>
p {
    margin-top: 2em;
    padding-bottom: 1em;
}
h2, h5 {
    padding-top: 1em;
}
h5 {
    padding-bottom: 0.5em;
}
</style>
