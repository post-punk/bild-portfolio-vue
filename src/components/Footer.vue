<template>
  <div class="footer">
    <div class="container-fluid d-flex align-items-center callout-btm">
      <div class="container">
        <div class="callout-btm row justify-content-between">
          <h4 id="are-you-ready" class="col-6">{{ footerText.callout }}</h4>
          <button type="button" class="action-btn col-" id="click-here">
            <a href=""><router-link to="/work">
            {{ footerText.footerButton }}
            </router-link>
            </a>
          </button>
        </div>
      </div>
    </div>
    <div class="container-fluid">
      <div class="container">
        <div class="row justify-content-between footer-wrapper">
          <div class="col-12 col-sm-6">
            <p id="footer-copyright">{{ footerText.copyright }}</p>
          </div>
          <div class="col-12 col-sm-6 text-right">
            <p id="footer-nav">
              <a v-for="(navText, index) in navMain" :key="index" href=""><router-link :to="navText.path">{{navText.name}}</router-link></a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {

    };
  },
  computed: {
      navMain: function() {
          return this.$store.getters.navMain;
      },
      footerText: function() {
        return this.$store.getters.footerText
      },
      icons() {
      return this.$store.getters.icons;
    }
  }
};
</script>

<style scoped>
.footer {
  background-color: #efefef;
  display: block;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;
  height: 203px;
  position: absolute;
  bottom: 0;
  width: 100%;

}
.footer-wrapper {
  height: 63px;
  display: flex;
  align-items: center;
}

.callout-btm {
  background-color: #322f2f;
  display: flex;
  align-items: center;
  color: white;
  height: 140px;
  bottom: 0;
}
#click-here {
  background-color: #2ecc71;
  border: none;
  margin-top: 0;
  margin-bottom: 0;
  padding: 1em;
}
#click-here a {
  font-family: "Novecento sans wide Light";
  color: white;
}
p {
  margin-top: 0;
  margin-bottom: 0;
}
h4 {
  color: white;
  margin-top: 0;
  margin-bottom: 0;
}
#footer-nav {
  color: #aeadad;
}
#footer-copyright {
  color: #aeadad;
}
#footer-nav a:after {
  content: '/ '
}
#footer-nav a:last-child:after {
  content: ' '
}
</style>
