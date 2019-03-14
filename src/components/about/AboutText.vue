<template>
  <div class="container">
    <div class="row">
      <div class="col- col-md-5">
        <img class="img-fluid float-left" id="dude" :src="aboutText[0].image">
      </div>
      <div class="col- col-md-7 " v-for="(item, index) in aboutText" :key="index">
        <p>
          {{ aboutText[0].paragraphs[0] }}
        </p>
        <br>
        <p>
           {{ aboutText[0].paragraphs[1] }}
        </p>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-6 col-" v-for="(item, index) in aboutText" :key="index">
        <h3>{{ aboutText[0].headers[0] }}</h3>
        <p>
          {{ aboutText[0].paragraphs[2] }}
        </p>
      </div>
      <div class="col-sm-6 col-">
        <h3>{{ aboutText[0].headers[1] }}</h3>
        <p>
          {{ aboutText[0].paragraphs[3] }}
        </p>
      </div>
      <div class="col-12">
        <h3>{{ aboutText[0].headers[2] }}</h3>
      </div>
    </div>
  </div>
</template>

<script>
// import { mapActions } from "vuex";
import { mapGetters } from "vuex";

export default {
  name: "AboutText",
  computed: {
    aboutText() {
      return this.$store.getters.aboutText
    }
  }
};

</script>

<style scoped>
.col-md-7 {
  padding-top: 1em;
}
.col-md-7 p {
  margin-top: 2em;
  margin-bottom: 1em;
}
</style>
