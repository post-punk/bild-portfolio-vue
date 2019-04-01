<template>
  <div>
    <div class="header container">
      <div class="logo row justify-content-between">
        <router-link to="/">
          <Logo class="Display-logo col-auto" alt="Display logo"/>
        </router-link>
        <!-- <div v-for="(icon, index) in icons" :key="index" class="icons col-auto">
          <a :href="icon.link" target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              :width="width"
              :height="height"
              :viewBox="viewBox"
            >
              <defs>
                <path :id="icon.id" :d="icon.path"></path>
              </defs>
              <g>
                <g :transform="icon.transform">
                  <use :fill="color" xlink:href="#"></use>
                </g>
              </g>
            </svg>
          </a> -->
          
          <!-- <a v-for="(icon, index) in icons" :href="icon.link" target="_blank" :key="index">
            <svg version="1.1" :id="icon.id" class="social-icon" :width="width" :height="height">
              <defs></defs>
              <g>
                <path
                  fill="rgb(218,218,218)"
                  stroke="none"
                  paint-order="stroke fill markers"
                  fill-rule="evenodd"
                  :d="icon.path"
                ></path>
              </g>
            </svg>
          </a> -->
          <div class="col-auto">
            <a href="http://www.twitter.com" target="_blank"><svg xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink" width="34" height="34" viewBox="0 0 34 34">
                        <defs>
                            <path id="twitter" alt="twitter icon" d="M960.451 62.868c0 9.316-7.489 16.868-16.725 16.868-9.238 0-16.726-7.552-16.726-16.868C927 53.552 934.488 46 943.726 46c9.236 0 16.725 7.552 16.725 16.868zm-4.181 0c0-6.987-5.617-12.65-12.544-12.65-6.928 0-12.545 5.663-12.545 12.65s5.617 12.651 12.545 12.651c6.927 0 12.544-5.664 12.544-12.65zm-7.404-2.222c.005.116.007.233.007.35 0 3.581-2.702 7.71-7.645 7.71a7.56 7.56 0 0 1-4.119-1.217 5.36 5.36 0 0 0 3.978-1.122 2.693 2.693 0 0 1-2.51-1.882 2.678 2.678 0 0 0 1.214-.047 2.706 2.706 0 0 1-2.155-2.657v-.034c.362.203.776.325 1.217.339a2.715 2.715 0 0 1-1.196-2.255c0-.497.133-.962.364-1.363a7.606 7.606 0 0 0 5.538 2.831 2.75 2.75 0 0 1-.069-.617c0-1.496 1.203-2.71 2.687-2.71.773 0 1.471.33 1.961.856a5.343 5.343 0 0 0 1.706-.657 2.715 2.715 0 0 1-1.18 1.499 5.336 5.336 0 0 0 1.542-.427 5.486 5.486 0 0 1-1.34 1.403z" />
                        </defs>
                        <g>
                            <g transform="translate(-927 -46)">
                                <use fill="#dadada" xlink:href="#twitter" />
                            </g>
                        </g>
                    </svg></a>

          <a href="http://www.facebook.com" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                        width="35" height="34" viewBox="0 0 35 34">
                        <defs>
                            <path id="facebook" alt="facebook icon" d="M1002.266 62.868c0 9.316-7.49 16.868-16.726 16.868-9.238 0-16.726-7.552-16.726-16.868 0-9.316 7.488-16.868 16.726-16.868 9.237 0 16.726 7.552 16.726 16.868zm-4.182 0c0-6.987-5.617-12.65-12.544-12.65-6.928 0-12.545 5.663-12.545 12.65s5.617 12.651 12.545 12.651c6.927 0 12.544-5.664 12.544-12.65zm-11.993 6.598l-2.647.008-.008-6.347-1.567-.017v-2.4l1.584-.009.048-1.31c0-1.802.617-2.93 2.722-2.93l1.934.007.009 2.13-1.024.073c-.82 0-1.119.28-1.119.855l-.003 1.192h2.1l-.454 2.392h-1.583z" />
                        </defs>
                        <g>
                            <g transform="translate(-968 -46)">
                                <use fill="#dadada" xlink:href="#facebook" />
                            </g>
                        </g>
          </svg></a>
          <a href="http://feeds.bbci.co.uk/news/rss.xml" target="_blank"><svg xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink" width="34" height="34" viewBox="0 0 34 34">
                        <defs>
                            <path id="rss" alt="rss icon" d="M1043.557 63.132c0 9.315-7.489 16.868-16.725 16.868-9.238 0-16.726-7.553-16.726-16.868 0-9.317 7.488-16.868 16.726-16.868 9.236 0 16.725 7.551 16.725 16.868zm-4.181 0c0-6.988-5.617-12.651-12.544-12.651-6.928 0-12.545 5.663-12.545 12.65s5.617 12.652 12.545 12.652c6.927 0 12.544-5.665 12.544-12.651zm-10.207 4.656h-1.964c0-2.592-2.091-4.7-4.66-4.7v-1.98c3.66 0 6.624 2.992 6.624 6.68zm3.568 0h-1.964c0-4.576-3.69-8.3-8.228-8.3V57.51c5.63 0 10.192 4.604 10.192 10.28zm-7.79-1.212c0 .67-.537 1.212-1.2 1.212a1.206 1.206 0 0 1-1.202-1.212c0-.669.538-1.21 1.201-1.21.664 0 1.202.541 1.202 1.21z" />
                        </defs>
                        <g>
                            <g transform="translate(-1010 -46)">
                                <use fill="#dadada" xlink:href="#rss" />
                            </g>
                        </g>
          </svg></a>
          <a href="https://www.pinterest.com/" target="_blank"><svg xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink" width="34" height="34" viewBox="0 0 34 34">
                        <defs>
                            <path id="pinterest" alt="pinterest icon" d="M1085.372 63.132c0 9.315-7.49 16.868-16.726 16.868-9.238 0-16.726-7.553-16.726-16.868 0-9.317 7.488-16.868 16.726-16.868 9.236 0 16.726 7.551 16.726 16.868zm-4.182 0c0-6.988-5.617-12.651-12.544-12.651-6.928 0-12.545 5.663-12.545 12.65s5.617 12.652 12.545 12.652c6.927 0 12.544-5.665 12.544-12.651zm-7.105-1.99c0 3.194-1.76 5.58-4.355 5.58-.872 0-1.691-.476-1.972-1.015 0 0-.469 1.875-.567 2.237-.35 1.28-1.378 2.56-1.457 2.665-.057.073-.18.05-.193-.047-.022-.163-.284-1.777.025-3.094l1.038-4.436s-.258-.52-.258-1.288c0-1.206.694-2.107 1.557-2.107.734 0 1.089.556 1.089 1.222 0 .745-.47 1.857-.713 2.889-.203.864.43 1.568 1.274 1.568 1.53 0 2.56-1.981 2.56-4.328 0-1.785-1.192-3.12-3.36-3.12-2.447 0-3.974 1.842-3.974 3.899 0 .709.208 1.21.533 1.596.15.178.17.25.116.454-.039.15-.127.51-.165.654-.054.206-.219.28-.404.203-1.127-.464-1.653-1.71-1.653-3.11 0-2.312 1.934-5.085 5.77-5.085 3.081 0 5.11 2.249 5.11 4.663" />
                        </defs>
                        <g>
                            <g transform="translate(-1052 -46)">
                                <use fill="#dadada" xlink:href="#pinterest" />
                            </g>
                        </g>
                    </svg></a>

                <a href="https://plus.google.com/" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                        width="35" height="34" viewBox="0 0 35 34">
                        <defs>
                            <path id="google" alt="google-plus icon" d="M1127.186 63.132c0 9.315-7.49 16.868-16.726 16.868-9.238 0-16.726-7.553-16.726-16.868 0-9.317 7.488-16.868 16.726-16.868 9.237 0 16.726 7.551 16.726 16.868zm-4.182 0c0-6.988-5.616-12.651-12.544-12.651-6.928 0-12.544 5.663-12.544 12.65s5.616 12.652 12.544 12.652c6.928 0 12.544-5.665 12.544-12.651zm-7.315-2.118v2.156l-1.055-.008.014-2.15h-2.132v-1.066h2.102v-2.104l1.09-.014.013 2.17h2.054v1.016zm-5.79-2.565c.784.304 1.2 1.225 1.2 2.17 0 .793-.436 1.476-1.051 1.962-.6.473-.715.671-.715 1.074 0 .344.643.928.98 1.168.985.702 1.303 1.354 1.303 2.442 0 1.357-1.302 2.706-3.66 2.706-2.07 0-3.814-.848-3.814-2.206 0-1.377 1.565-2.732 3.634-2.732.225 0 .458.02.672.02-.283-.278-.472-.567-.472-.986 0-.25.044-.54.155-.753-.113.008-.228.01-.347.01-1.698 0-2.836-1.219-2.836-2.729 0-1.478 1.571-2.754 3.24-2.754h3.726l-.834.608zm-1.703 6.96c-1.43-.016-2.71.878-2.71 1.953 0 1.096 1.032 2.009 2.462 2.009 2.01 0 2.71-.856 2.71-1.953 0-.132-.016-.261-.045-.387-.158-.62-.714-.929-1.49-1.473a3.087 3.087 0 0 0-.927-.15zm1.565-4.716c-.166-1.271-1.078-2.29-2.037-2.32-.96-.029-1.603.944-1.438 2.216.166 1.27 1.078 2.323 2.038 2.352.959.03 1.602-.977 1.437-2.248z" />
                        </defs>
                        <g>
                            <g transform="translate(-1093 -46)">
                                <use fill="#dadada" xlink:href="#google" />
                            </g>
                        </g>
                    </svg></a>

                <a href="https://dribbble.com/" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                        width="34" height="34" viewBox="0 0 34 34">
                        <defs>
                            <path id="dribbble" alt="dribble icon" d="M1169 63.132c0 9.315-7.489 16.868-16.726 16.868-9.237 0-16.725-7.553-16.725-16.868 0-9.317 7.488-16.868 16.725-16.868 9.237 0 16.726 7.551 16.726 16.868zm-4.181 0c0-6.988-5.617-12.651-12.545-12.651s-12.544 5.663-12.544 12.65 5.616 12.652 12.544 12.652c6.928 0 12.545-5.665 12.545-12.651zm-5.348 1.492a7.498 7.498 0 0 1-1.105 2.651c-.264.391-.566.76-.897 1.096a7.353 7.353 0 0 1-2.335 1.587 7.3 7.3 0 0 1-6.969-.684 7.489 7.489 0 0 1-1.086-.903 7.627 7.627 0 0 1-.896-1.096 7.399 7.399 0 0 1-1.254-4.144 7.463 7.463 0 0 1 1.254-4.143 7.517 7.517 0 0 1 1.983-2 7.367 7.367 0 0 1 2.629-1.115 7.332 7.332 0 0 1 4.34.432 7.372 7.372 0 0 1 2.334 1.588c.331.335.633.703.897 1.095.264.397.492.82.677 1.26a7.528 7.528 0 0 1 .577 2.884 7.47 7.47 0 0 1-.15 1.492zm-3.715 3.618a6.192 6.192 0 0 0 2.543-3.861c.018-.094.027-.19.042-.284a5.82 5.82 0 0 0-.235-.064 8.885 8.885 0 0 0-.693-.143h-.004a8.934 8.934 0 0 0-2.852-.026 28.293 28.293 0 0 1 1.199 4.378zm-5.876.604c.372.158.76.28 1.154.361a6.227 6.227 0 0 0 2.479 0 6.08 6.08 0 0 0 1.154-.361l.035-.017a26.902 26.902 0 0 0-1.32-4.675l-.04.013c-.374.131-.717.28-1.042.434-.046.022-.095.043-.14.066-.302.149-.58.306-.84.468l-.143.091c-.251.163-.485.328-.696.495-.034.026-.064.052-.097.079a8.094 8.094 0 0 0-1.064 1.02l-.06.068a7.508 7.508 0 0 0-.645.88 4.858 4.858 0 0 0-.138.235c.118.093.236.187.359.27.33.224.68.417 1.044.573zm-3.745-5.914c-.002.067-.01.133-.01.2a6.175 6.175 0 0 0 1.05 3.467c.151.223.334.421.511.624.042-.067.105-.163.178-.27l.036-.054c.078-.112.172-.24.28-.382l.063-.082c.116-.147.244-.304.391-.472l.068-.075c.16-.178.331-.362.526-.55.19-.185.4-.37.623-.555.035-.028.066-.056.1-.084a9.524 9.524 0 0 1 1.659-1.066l.132-.06c.307-.146.626-.281.967-.393.08-.026.161-.046.242-.069a21.431 21.431 0 0 0-.507-1.083c-2.538.765-4.988.888-5.977.902-.141.002-.255.003-.332.002zm3.541-5.415a6.133 6.133 0 0 0-.84.472c-.325.222-.63.476-.909.757a6.155 6.155 0 0 0-1.663 3.081c.065 0 .155 0 .266-.003h.008c.225-.005.538-.016.92-.041h.002a23.98 23.98 0 0 0 3.888-.583c.191-.045.384-.094.578-.146a38.529 38.529 0 0 0-2.25-3.537zm6.036.472a6.114 6.114 0 0 0-4.678-.934c-.052.011-.103.03-.154.041.3.41 1.317 1.832 2.255 3.569.245-.093.475-.192.689-.292l.012-.006c1.506-.712 2.26-1.566 2.492-1.866-.2-.177-.396-.362-.616-.512zm2.587 3.892a6.259 6.259 0 0 0-.926-2.217c-.102-.153-.233-.284-.35-.427-.251.318-1.08 1.226-2.65 2.024l-.05.024a10.34 10.34 0 0 1-.704.322c.148.305.291.614.423.927.047.111.086.218.13.328.224-.028.446-.048.666-.061l.111-.006c.189-.01.373-.016.556-.018l.093-.001c.209 0 .413.004.61.012l.042.002a15.743 15.743 0 0 1 1.532.145l.091.014c.096.015.182.028.259.042l.064.01c.09.016.166.03.223.042a6.451 6.451 0 0 0-.12-1.162z" />
                        </defs>
                        <g>
                            <g transform="translate(-1135 -46)">
                                <use fill="#dadada" xlink:href="#dribbble" />
                            </g>
                        </g>
          </svg></a>
        </div>
      </div>
      <hr>
      <!-- <div class="container"> -->

<!--Navbar-->
<nav class="navbar navbar-light light-blue lighten-4">

  <!-- Navbar brand -->
  <a class="navbar-brand" href="#"></a>

  <!-- Collapse button -->
  <button class="navbar-toggler toggler-example" type="button" data-toggle="collapse" id="hamburger" data-target="#navbarSupportedContent1"
    aria-controls="navbarSupportedContent1" aria-expanded="false" aria-label="Toggle navigation"><span class="dark-blue-text">
      <svg 
        data-name="burger menu"
        xmlns="http://www.w3.org/2000/svg"
        width="15"
        height="15"
        viewBox="0 0 15 15">
        <rect id="_1" data-name="1" class="cls-1" y="12" width="15" height="3.031"></rect>
        <rect id="_2" data-name="2" class="cls-1" y="6" width="15" height="3.031"></rect>
        <rect id="_3" data-name="3" class="cls-1" width="15" height="3.031"></rect>
    </svg></span></button>

  <!-- Collapsible content, DODAJ KLASU COLLAPSE -->
  <div class="collapse navbar-collapse nav row justify-content-between" id="navbarSupportedContent1">
      <div>
        <nav
          v-for="(navText, index) in navMain"
          :key="index"
          class="navMain">
          <router-link :to="navText.path">{{navText.name}}</router-link>
        </nav>
      </div>
      <div class="auth">
        <nav><router-link :to="{ name: '/signup' }">SIGN UP</router-link></nav>
        <nav><router-link :to="{ name: '/login' }">LOG IN</router-link></nav>
        <nav @click="logOut()"><router-link :to="{ path: '/' }">SIGN OUT</router-link></nav>
      </div>


  </div>
  
  <!-- Collapsible content -->

</nav>
<!--/.Navbar-->

      
      <!-- </div> -->
    </div>
  </div>
</template>

<script>
import Logo from "./Logo.vue";
import db from '@/firebase/init';
import firebase from 'firebase';
import 'firebase/auth';

export default {
  name: "Header",
  data() {
    return {
      //   menu : this.$store.state.navMain
      width: 35,
      height: 35,
      viewBox: "0 0 35 35",
      color: "#dadada"
    };
  },
  computed: {
    navMain() {
      return this.$store.getters.navMain;
    },
    icons() {
      return this.$store.getters.icons;
    }
  },
  components: {
    Logo
  },
  methods: {
    logOut() {
            this.$store.dispatch('userSignOut');
             this.$router.push({ path: '/' });
        }
  }
};
</script>

<style>
.navMain {
  display: inline;
}
 .auth { 
display: flex;
  /* font-size: 14px; */
  /* color: #737373 */
}
.auth nav {
  margin: 0.5em;
  cursor: pointer;
}
.auth nav:nth-child(2) {
cursor: default !important;
} 
rect {
  fill: #8a8888;
}
nav {
  color: #737373
}
.logo {
  display: flex;
  align-items: center;
  height: 110px;
  justify-content: space-between;
}
.display {
  display: flex;
  justify-content: flex-start;
}
.icons {
  width: auto;
  display: flex;
  justify-content: flex-end;
  align-self: center;
  padding-top: 1em;
  padding-left: 1em;
}
.icons svg {
  padding: 0.2em;
  align-self: center;
  display: flex;
  width: 40px;
  height: 40px;
}
.nav {
  /* width: 940px; */
  /* height: 71px; */
  display: flex;
  align-items: center;
}

.nav a {
  color: inherit;
  text-decoration: none;
  margin-top: 2em;
  font-size: 18px;
  padding: 0;
}
.nav h6 {
  color: #737373;
  font-family: "novecento sans wide light";
  padding-top: 0.5em;
}
a svg:hover #twitter {
  fill: #38a1f3;
  transition: all ease 0.3s;
}
a svg:hover #facebook {
  fill: #3c5a99;
  transition: all ease 0.3s;
}
a svg:hover #rss {
  fill: #f26522;
  transition: all ease 0.3s;
}
a svg:hover #pinterest {
  fill: #bd081c;
  transition: all ease 0.3s;
}
a svg:hover #google {
  fill: #dd4b39;
  transition: all ease 0.3s;
}
a svg:hover #dribbble {
  fill: #ea4c89;
  transition: all ease 0.3s;
}
hr {
  margin: 0;
}
.fa-1x {
font-size: 1.5rem;
}
.navbar-toggler.toggler-example {
cursor: pointer;
}
.dark-blue-text {
color: #0A38F5;
}
.dark-pink-text {
color: #AC003A;
}
.dark-amber-text {
color: #ff6f00;
}
.dark-teal-text {
color: #004d40;
}
button svg {
  vertical-align: baseline;
}
.navbar {
  padding: 1.1rem 1rem 1.2rem 0rem;
}
#navbarSupportedContent1 nav {
padding: 0;
}


@media only screen and (min-width: 767px) {
.navbar-toggler, svg .slick-arrow {
  display: none
}
#navbarSupportedContent1 {
  display: flex;
}

}
</style>
