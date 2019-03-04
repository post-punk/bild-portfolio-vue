<template>
  <div>
    <slick class="slick-images" id="slick1" ref="slick" :options="slickOptions">
      <!-- <img src="http://kenwheeler.github.io/slick/img/lazyfonz1.png"> -->
      <!-- <img src="http://kenwheeler.github.io/slick/img/lazyfonz2.png"> -->
      <!-- <img src="http://kenwheeler.github.io/slick/img/lazyfonz3.png"> -->
      <!-- <img src="http://kenwheeler.github.io/slick/img/lazyfonz4.png"> -->
      <!-- <img src="http://kenwheeler.github.io/slick/img/lazyfonz5.png"> -->
      <img src="../../assets/carousel/project-boy-and-girl.jpg">
      <img src="../../assets/carousel/project-buttons.jpg">
      <img src="../../assets/carousel/project-jes.jpg">
      <img src="../../assets/carousel/project-jezik.jpg">
      <img src="../../assets/carousel/project-social-media.jpg">
    </slick>
    <slick id="slick2" ref="slick2" class="slick-paragraph" :options="slickOptions2">
      <div class="carousel-text">
        <h4>DARK UI FREEBIE</h4>
        <p>
          But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was
          born
        </p>
      </div>
      <div class="carousel-text">
        <h4>DEFENESTRATION</h4>
        <p>
          Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is
          pain
        </p>
      </div>
      <div class="carousel-text">
        <h4>FANGED NOUMENA</h4>
        <p>
          At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum
          deleniti
          atque
        </p>
      </div>

      <div class="carousel-text">
        <h4>SCHOPENHAUER</h4>
        <p>
          Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est
          eligendi
          optio cumque nihil
        </p>
      </div>

      <div class="carousel-text">
        <h4>ENCHIRIDION</h4>
        <p>
          On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and
          demoralized
        </p>
      </div>
    </slick>
  </div>
</template>

<script>
import Slick from "vue-slick";
import "../../../src/css/slick.css";

export default {
  components: { Slick },
  data() {
    return {
      slickOptions: {
        //options can be used from the plugin documentation
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        focusOnSelect: true,
        arrows: false,
        variableWidth: true,
        autoplay: true,
        autoplaySpeed: 2000,
        asNavFor: ".slick-paragraph"
      },
      slickOptions2: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        autoplay: true,
        autoplaySpeed: 2000,
        asNavFor: ".slick-images"
      }
    };
  },
  // All slick methods can be used too, example here
  methods: {
    next() {
      this.$refs.slick.next();
    },
    prev() {
      this.$refs.slick.prev();
    },
    reInit() {
      // Helpful if you have to deal with v-for to update dynamic lists
      this.$refs.slick.reSlick();
    }
  }
};
</script>

<style>
.slider-img {
  margin: 0px auto 44px auto;
}

.slider-img {
  margin: 0px auto 44px auto;
}

.slider-img .slick-slide {
  transition: all ease-in-out 0.3s;
  opacity: 0.2;
  margin: 0px 10px;
}

.slider-img .slick-current {
  opacity: 1;
}
.slick-paragraph p {
  max-width: 600px;
  padding: 0px 50px;
  margin: auto;
  text-align: center;
}

.slick-paragraph h4 {
  color: inherit;
  margin: auto auto;
  text-align: center;
  max-width: 600px;
  margin-bottom: 1em;
  color: #737373;
}
.carousel-text {
  margin-bottom: 3em;
}
</style>
