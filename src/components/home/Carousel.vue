<template>
  <div>
    <Slick class="slick-images" id="slick1" ref="slick" :options="slickOptions">
      <!-- <img :src="item.url"> -->
      <img :src="carousel[0].url">
      <img :src="carousel[1].url">
      <img :src="carousel[2].url">
      <img :src="carousel[3].url">
      <img :src="carousel[4].url">
    </Slick>
    <div class="carousel-btm-wrapper d-flex justify-content-center">
      <svg
        @click="prev()"
        class="arrow slick-arrow slick-prev col-1 align-middle"
        xmlns="http://www.w3.org/2000/svg"
        width="21"
        height="31"
        viewBox="0 0 21 31"
      >
        <path
          id="_"
          data-name="&lt;"
          class="cls-1"
          d="M392.294,1746L377,1761.5l15.293,15.5,5.705-5.7-9.667-9.8,9.667-9.8Z"
          transform="translate(-377 -1746)"
        ></path>
      </svg>

      <slick id="slick2" ref="slick2" class="slick-paragraph col-md-4 col-" :options="slickOptions2">
        
        <div class="carousel-text">
          <h4>DARK UI FREEBIE</h4>
          <p>
            But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born
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
      <svg
        @click="next()"
        class="arrow col-1 slick-next slick-arrow align-middle"
        xmlns="http://www.w3.org/2000/svg"
        width="21"
        height="31"
        viewBox="0 0 21 31"
      >
        <path
          id="_"
          data-name="&gt;"
          class="cls-1"
          d="M1005.71,1777l15.29-15.5-15.29-15.5-5.71,5.7,9.67,9.8-9.67,9.8Z"
          transform="translate(-1000 -1746)"
        ></path>
      </svg>
    </div>
  </div>
</template>

<script>
import Slick from "vue-slick";
import "@/css/slick.css";

export default {
  components: { Slick },
  data() {
    return {
      slickOptions: {
        //options can be used from the plugin documentation
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        centerMode: true,
        focusOnSelect: true,
        arrows: false,
        variableWidth: true,
        autoplay: false,
        autoplaySpeed: 2000,
        asNavFor: ".slick-paragraph",
        // initialSlide: 1
      },
      slickOptions2: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        autoplay: false,
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
  },
  computed: {
    carousel() {
      return this.$store.getters.carousel;
    }
  }
};
</script>

<style scoped>
svg {
  align-self: center;
}
.arrow {
  fill: #737373;
  vertical-align: middle;
}
.carousel-btm-wrapper .arrow:hover {
  fill: #2ecc71 !important;
  cursor: pointer;
}
.slider-img {
  margin: 0px auto 22px auto;
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
@media only screen and (max-width: 767px) {
   .slick-arrow {
  display: none;
   }
}
</style>
