<template>
  <div>
    <div class="green-background container-fluid">
      <img class="bg img-fluid" src="../../assets/banner-background.svg">
      
      <img class="macbook fade-in" alt="macbook" src="../../assets/macbook.svg">
      
      <img class="ipad fade-in" alt="ipad" src="../../assets/ipad.svg">
      
      <img class="iphone fade-in" alt="iphone" src="../../assets/iphone.svg">
      <br>
    </div>

    <div class="banner-paragraph row">
      <p id="banner-text" class="col-12 wrap">
        LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT.
        PELLENTESQUE EU ERATIUY LACUS,
        VEL CONGUE MAURIS. FUSCE
        <br>VELITARIA JUSTO, FAUCIBUS EU.
      </p>
      <div class="portfolio">
        <!-- <form action="work"> -->
          <button href="work" id="banner-button">
            <a href="work">BROWSE PORTFOLIO</a>
          </button>
        <!-- </form> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Banner"
};
</script>

<style scoped>
.green-background {
  position: relative;
  margin: auto;
  padding: 0;
}

/* make keyframes that tell the start state and the end state of our object */
@-webkit-keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@-moz-keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.fade-in {
  opacity: 0; /* make things invisible upon start */
  -webkit-animation: fadeIn ease-in 1; /* call our keyframe named fadeIn, use animattion ease-in and repeat it only 1 time */
  -moz-animation: fadeIn ease-in 1;
  animation: fadeIn ease-in 1;

  -webkit-animation-fill-mode: forwards; /* this makes sure that after animation is done we remain at the last keyframe value (opacity: 1)*/
  -moz-animation-fill-mode: forwards;
  animation-fill-mode: forwards;

  -webkit-animation-duration: 1s;
  -moz-animation-duration: 1s;
  animation-duration: 1s;
}
/* .fade-in.green-background {
-webkit-animation-delay: 0.1s;
-moz-animation-delay: 0.1s;
animation-delay: 0.1s; 
}*/

.fade-in.macbook {
  -webkit-animation-delay: 0.2s;
  -moz-animation-delay: 0.2s;
  animation-delay: 0.2s;
}

.fade-in.ipad {
  -webkit-animation-delay: 0.7s;
  -moz-animation-delay: 0.7s;
  animation-delay: 0.7s;
}

.fade-in.iphone {
  -webkit-animation-delay: 1.1s;
  -moz-animation-delay: 1.1s;
  animation-delay: 1.1s;
}

.macbook {
  width: 35%;
  position: absolute;
  bottom: -10%;
  left: 20%;
  z-index: 1;
  /* min-width: 20%;
max-width: 50%; */
}

.macbook:hover {
  transition: all 0.2s ease-in-out;
  transform: scale(1.1);
  transform-origin: bottom right;
}

.ipad {
  width: 18%;
  position: absolute;
  bottom: -10%;
  left: 50%;
  z-index: 2;
}

.ipad:hover {
  transition: all 0.2s ease-in-out;
  transform: scale(1.1);
  transform-origin: bottom;
}

.iphone {
  width: 7%;
  position: absolute;
  bottom: -10%;
  right: 29%;
  z-index: 3;
}

.iphone:hover {
  transition: all 0.2s ease-in-out;
  transform: scale(1.2);
  transform-origin: bottom right;
}
.banner-paragraph {
  height: 250px;
  position: relative;
  display: flex;
  justify-content: center;
}

.banner-paragraph p {
  text-align: center;
  bottom: 40%;
  width: 100%;
  position: absolute;
  color: #aeadad;
  word-wrap: break-word;
}

.portfolio {
  /* width: 100%; */
  display: flex;
  align-items: center;
  justify-content: center;
}
.portfolio button {
  color: white;
  text-align: center;
  bottom: 15%;
  position: absolute;
  background-color: #2ecc71;
  padding: 1em;
  border: none;
}
h4 {
  color: #dadada;
}
.bg {
  object-fit: cover;
  width: 100%;
  max-height: 525px;
}
</style>
