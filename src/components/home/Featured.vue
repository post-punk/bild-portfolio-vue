<template>
    <div class="container">
        <div class="col-xs-1" align="center">
            <div id="featured-text">
                <h2>{{ featuredProject.header }}</h2>
                <p v-html="featuredProject.paragraph">
                </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Featured',
    computed: {
        featuredProject() {
          return this.$store.getters.featuredProject;
        }
    }
}

</script>

<style>

#featured-text {
    padding-top: 2em;
    padding-bottom: 2em;
    text-align: center;
}
#featured-text h2 {
    color: #737373;
}
h2 {
    /* margin-bottom: 1em */
}
</style>
