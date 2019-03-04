<template>
  <div>
    <callout-top :calloutTitle="calloutTitle"></callout-top>
    <div class="container">
      <div class="row work-nav justify-content-between">
        <div class="work-nav-text col-sm-7 col-12">
          <h6 id="all">ALL</h6>
          <h6 id="slash">/</h6>
          <h6 id="print">PRINT</h6>
          <h6 id="slash">/</h6>
          <h6 id="photography">PHOTOGRAPHY</h6>
          <h6 id="slash">/</h6>
          <h6 id="web">WEB</h6>
          <h6 id="slash">/</h6>
          <h6 id="apps">APPLICATIONS</h6>
        </div>
        <div class="col-sm-1 col-12">
          <div class="work-nav-icons">
            <svg
              v-on:click="gridView1()"
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 15 15"
            >
              <path
                id="grid-view"
                data-name="grid view"
                class="cls-1"
                d="M1129,329h6.03v5.929H1129V329Zm8.95,0H1144v6.012h-6.05V329Zm-8.95,8.9h6.01V344H1129v-6.1Zm8.97,0H1144V344h-6.03v-6.1Z"
                transform="translate(-1129 -329)"
              ></path>
            </svg>
            <svg
              v-on:click="listView1()"
              id="list-view"
              data-name="list view"
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15.031"
              viewBox="0 0 15 15.031"
            >
              <rect id="_1" data-name="1" class="cls-1" y="12.031" width="15" height="3"></rect>
              <rect id="_2" data-name="2" class="cls-1" y="6" width="15" height="3.031"></rect>
              <rect id="_3" data-name="3" class="cls-1" width="15" height="3.031"></rect>
            </svg>
          </div>
        </div>
      </div>
      <div class="container grid-container">
        <div class="row">
          <div  class="grid-img web col-12 col-sm-6 col-lg-4 col-xl-4" v-for="(image, index) in images" :key="index">
            <img :src="image.url">
          </div>
        </div>
      </div>
    </div>

    <!-- <div class="container">
      <div v-show="gridView" class="row">
        <div class="cell grid-img web col-12 col-sm-6 col-lg-4 col-xl-4">
          <img class="img-fluid" src="../../assets/work-grid-images/grid-img1.png">
        </div>

        <div class="cell grid-img web col-12 col-sm-6 col-lg-4 col-xl-4">
          <img class="img-fluid" src="../../assets/work-grid-images/grid-img2.png">
        </div>

        <div class="cell grid-img photo col-12 col-sm-6 col-lg-4 col-xl-4">
          <img class="img-fluid" src="../../assets/work-grid-images/grid-img3.png">
        </div>

        <div class="cell grid-img print col-12 col-sm-6 col-lg-4 col-xl-4">
          <img class="img-fluid" src="../../assets/work-grid-images/grid-img4.png">
        </div>

        <div class="cell grid-img web col-12 col-sm-6 col-lg-4 col-xl-4">
          <img class="img-fluid" src="../../assets/work-grid-images/grid-img5.png">
        </div>

        <div class="cell grid-img app col-12 col-sm-6 col-lg-4 col-xl-4">
          <img class="img-fluid" src="../../assets/work-grid-images/grid-img6.png">
        </div>

        <div class="cell grid-img photo col-12 col-sm-6 col-lg-4 col-xl-4">
          <img class="img-fluid" src="../../assets/work-grid-images/grid-img7.png">
        </div>

        <div class="cell grid-img print col-12 col-sm-6 col-lg-4 col-xl-4">
          <img class="img-fluid" src="../../assets/work-grid-images/grid-img8.png">
        </div>

        <div class="cell grid-img web col-12 col-sm-6 col-lg-4 col-xl-4">
          <img class="img-fluid" src="../../assets/work-grid-images/grid-img9.png">
        </div>
      </div>
      <div v-show="listView" class="portfolioList">
        <div class="cell grid-img web list-images ">
          <img class="img-fluid" src="../../assets/work-grid-images/grid-img1.png">
        </div>

        <div class="list-paragraph">
          <p>Sed eu blandit est. Duis tincidunt eleifend eleifend. Integer hendrerit tempor risus eget vestibulum. Etiam placerat ex in ligula hendrerit ornare. Vestibulum scelerisque neque eget posuere volutpat. Nam dictum, dui at imperdiet mattis, enim arcu mattis dui, ac suscipit nisi sapien in sem. Cras hendrerit quis odio eget fringilla. Sed vitae nibh eu dolor efficitur pulvinar at ac dui. Nam fermentum orci ut condimentum dapibus. Nam pulvinar nisi in nulla imperdiet, ac molestie eros fermentum. Aenean vel ultricies nibh, sollicitudin mollis urna. Vivamus ultricies risus lorem, nec faucibus nisi facilisis et. Sed imperdiet aliquet sapien sed luctus. Morbi imperdiet porttitor libero, et ornare turpis. Curabitur eu porta arcu, iaculis dignissim arcu.</p>
        </div>

        <div class="cell grid-img web list-images">
          <img class="img-fluid" src="../../assets/work-grid-images/grid-img2.png">
        </div>

        <div class="list-paragraph">
          <p>Donec ornare risus sapien. Sed dui quam, molestie nec vehicula et, cursus a tellus. Suspendisse pulvinar sem enim, ac pretium arcu scelerisque ac. Quisque nunc purus, pulvinar nec est eget, scelerisque imperdiet purus. Pellentesque ullamcorper nibh ipsum, finibus blandit augue semper vitae. Donec et nulla lacus. Vivamus maximus condimentum justo suscipit feugiat. In pellentesque finibus est sit amet tempor. Nullam et nulla id erat faucibus hendrerit.</p>
        </div>

        <div class="cell grid-img photo list-images">
          <img class="img-fluid" src="../../assets/work-grid-images/grid-img3.png">
        </div>

        <div class="list-paragraph">
          <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris vitae maximus dui. Nam nisl elit, ullamcorper quis nisl ullamcorper, aliquam sodales arcu. Donec sollicitudin enim orci, a ullamcorper felis mollis non. In pretium tempus nisl ut lobortis. Vivamus non sapien in odio porta varius. Nam ornare ligula lacus. Vestibulum augue quam, blandit eu sapien vulputate, gravida pretium tellus. Aliquam erat volutpat. Aenean et mauris vitae ipsum dignissim ornare a et ligula. Mauris eu mi nibh. Praesent sodales rutrum condimentum. Cras bibendum erat sed lectus fermentum, eu interdum ligula lacinia.</p>
        </div>

        <div class="cell grid-img print list-images">
          <img class="img-fluid" src="../../assets/work-grid-images/grid-img4.png">
        </div>

        <div class="list-paragraph">
          <p>Etiam posuere, lacus vel dignissim sollicitudin, augue purus fringilla ante, et suscipit erat velit sit amet tortor. Vestibulum felis nisl, congue sit amet nibh vel, euismod ornare eros. Pellentesque dolor odio, aliquet nec odio quis, lobortis ultrices tellus. Nunc varius lacinia diam id commodo. Mauris nulla lorem, faucibus sed elit at, commodo dapibus lorem. Nam molestie ut est vel feugiat. Maecenas faucibus et dui ut pretium. Nam quis nisl lacinia, dignissim mi vitae, sagittis erat. Nulla non auctor elit. Ut semper justo sit amet nibh aliquet, id lobortis eros tincidunt. Sed pulvinar semper dui nec tempus. Curabitur nisi ante, imperdiet in dolor id, tristique vestibulum orci.</p>
        </div>

        <div class="cell grid-img web list-images">
          <img class="img-fluid" src="../../assets/work-grid-images/grid-img5.png">
        </div>

        <div class="list-paragraph">
          <p>Donec placerat ac quam id malesuada. Nullam vitae erat ac diam faucibus elementum non eu purus. Nulla gravida, mauris vulputate rhoncus vestibulum, enim quam vulputate mauris, ac molestie nulla ante in quam. Nunc eu nisl quis eros convallis feugiat. Duis ac mattis felis. Ut nec magna eu nisl volutpat congue sit amet ut massa. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent commodo vestibulum mi bibendum dictum.</p>
        </div>

        <div class="cell grid-img app list-images">
          <img class="img-fluid" src="../../assets/work-grid-images/grid-img6.png">
        </div>

        <div class="list-paragraph">
          <p>Nunc tempus leo eget velit imperdiet, non cursus leo porta. Nam nec neque vel dui volutpat rhoncus. Vestibulum turpis erat, condimentum quis blandit id, dignissim vel odio. Suspendisse imperdiet pellentesque dignissim. Nullam ex ex, pulvinar a enim in, faucibus venenatis ligula. Vestibulum odio ligula, suscipit vitae aliquet at, sagittis ac sem. Pellentesque scelerisque aliquam posuere. Ut in posuere magna, sed lacinia ex. Duis auctor feugiat metus vel eleifend. Aliquam id libero vel metus vestibulum scelerisque. Nullam et hendrerit eros, aliquam vehicula felis.</p>
        </div>

        <div class="cell grid-img photo list-images">
          <img class="img-fluid" src="../../assets/work-grid-images/grid-img7.png">
        </div>

        <div class="list-paragraph">
          <p>Etiam condimentum volutpat metus et placerat. Duis bibendum augue nec dapibus feugiat. Phasellus id mauris leo. Pellentesque pharetra leo vel lacus viverra, id cursus leo sagittis. Vestibulum tempor id nunc in hendrerit. Mauris eget lobortis justo. Nullam tempor cursus eros id mattis. Donec orci libero, mollis vel blandit vel, malesuada blandit urna. Nunc sodales molestie massa vel convallis. Donec varius suscipit maximus. Pellentesque id scelerisque massa, nec pulvinar erat. Sed sed lectus ac tortor pretium eleifend sed eget ligula.</p>
        </div>

        <div class="cell grid-img print list-images">
          <img class="img-fluid" src="../../assets/work-grid-images/grid-img8.png">
        </div>

        <div class="list-paragraph">
          <p>Morbi ac magna vel dolor vehicula tempor. Duis mattis volutpat lectus. Nullam convallis, dui quis rhoncus faucibus, turpis arcu elementum erat, a vulputate libero metus ut mauris. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam non luctus ligula, dapibus dapibus erat. Pellentesque efficitur nulla nec iaculis feugiat. Maecenas et iaculis ligula.</p>
        </div>

        <div class="cell grid-img web list-images">
          <img class="img-fluid" src="../../assets/work-grid-images/grid-img9.png">
        </div>
        <div class="list-paragraph">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut hendrerit elit tellus, at aliquam leo dignissim ut. Quisque tincidunt dolor sapien, non laoreet ipsum tincidunt at. Curabitur scelerisque, ligula nec volutpat tincidunt, purus nulla molestie quam, vel maximus erat quam eget massa. Phasellus sed placerat massa, vitae euismod orci. Nam posuere ligula non nunc mollis, eu luctus tortor sollicitudin. Integer volutpat leo lorem, non vulputate ante tempus tempor. Sed bibendum neque ut porta faucibus. Praesent eget venenatis sem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In sodales eros eros. Sed congue magna id augue placerat, at feugiat purus tristique. Proin vitae justo sagittis, suscipit neque sit amet, commodo est.</p>
        </div>
      </div>
    </div>-->
  </div>
</template>

<script>
import CalloutTop from "../CalloutTop.vue";

export default {
  name: "Work",
  data() {
    return {
      calloutTitle: "CHECK OUT WHAT I CAN DO",
      //activeClass: "portfolioGrid"

      // gridView: true,
      // listView: false,

      images: [
        {
          name: "img1",
          category: "web",
          url: "https://i.imgur.com/QJMYERw.png",
          text:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut hendrerit elit tellus, at aliquam leo dignissim ut. Quisque tincidunt dolor sapien, non laoreet ipsum tincidunt at. Curabitur scelerisque, ligula nec volutpat tincidunt, purus nulla molestie quam, vel maximus erat quam eget massa. Phasellus sed placerat massa, vitae euismod orci. Nam posuere ligula non nunc mollis, eu luctus tortor sollicitudin. Integer volutpat leo lorem, non vulputate ante tempus tempor. Sed bibendum neque ut porta faucibus. Praesent eget venenatis sem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In sodales eros eros. Sed congue magna id augue placerat, at feugiat purus tristique. Proin vitae justo sagittis, suscipit neque sit amet, commodo est."
        },
        {
          name: "img2",
          category: "web",
          url: "https://i.imgur.com/zENEKl0.png",
          text:
            "Morbi ac magna vel dolor vehicula tempor. Duis mattis volutpat lectus. Nullam convallis, dui quis rhoncus faucibus, turpis arcu elementum erat, a vulputate libero metus ut mauris. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam non luctus ligula, dapibus dapibus erat. Pellentesque efficitur nulla nec iaculis feugiat. Maecenas et iaculis ligula."
        },
        {
          name: "img3",
          category: "photo",
          url: "https://i.imgur.com/8SPAekX.png",
          text:
            "Etiam condimentum volutpat metus et placerat. Duis bibendum augue nec dapibus feugiat. Phasellus id mauris leo. Pellentesque pharetra leo vel lacus viverra, id cursus leo sagittis. Vestibulum tempor id nunc in hendrerit. Mauris eget lobortis justo. Nullam tempor cursus eros id mattis. Donec orci libero, mollis vel blandit vel, malesuada blandit urna. Nunc sodales molestie massa vel convallis. Donec varius suscipit maximus. Pellentesque id scelerisque massa, nec pulvinar erat. Sed sed lectus ac tortor pretium eleifend sed eget ligula."
        },
        {
          name: "img4",
          category: "print",
          url: "https://i.imgur.com/WFs2EpX.png",
          text:
            "Nunc tempus leo eget velit imperdiet, non cursus leo porta. Nam nec neque vel dui volutpat rhoncus. Vestibulum turpis erat, condimentum quis blandit id, dignissim vel odio. Suspendisse imperdiet pellentesque dignissim. Nullam ex ex, pulvinar a enim in, faucibus venenatis ligula. Vestibulum odio ligula, suscipit vitae aliquet at, sagittis ac sem. Pellentesque scelerisque aliquam posuere. Ut in posuere magna, sed lacinia ex. Duis auctor feugiat metus vel eleifend. Aliquam id libero vel metus vestibulum scelerisque. Nullam et hendrerit eros, aliquam vehicula felis."
        },
        {
          name: "img5",
          category: "web",
          url: "https://i.imgur.com/Ai437o4.png",
          text:
            "Donec placerat ac quam id malesuada. Nullam vitae erat ac diam faucibus elementum non eu purus. Nulla gravida, mauris vulputate rhoncus vestibulum, enim quam vulputate mauris, ac molestie nulla ante in quam. Nunc eu nisl quis eros convallis feugiat. Duis ac mattis felis. Ut nec magna eu nisl volutpat congue sit amet ut massa. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent commodo vestibulum mi bibendum dictum."
        },
        {
          name: "img6",
          category: "app",
          url: "https://i.imgur.com/NobXWbq.png",
          text:
            "Etiam posuere, lacus vel dignissim sollicitudin, augue purus fringilla ante, et suscipit erat velit sit amet tortor. Vestibulum felis nisl, congue sit amet nibh vel, euismod ornare eros. Pellentesque dolor odio, aliquet nec odio quis, lobortis ultrices tellus. Nunc varius lacinia diam id commodo. Mauris nulla lorem, faucibus sed elit at, commodo dapibus lorem. Nam molestie ut est vel feugiat. Maecenas faucibus et dui ut pretium. Nam quis nisl lacinia, dignissim mi vitae, sagittis erat. Nulla non auctor elit. Ut semper justo sit amet nibh aliquet, id lobortis eros tincidunt. Sed pulvinar semper dui nec tempus. Curabitur nisi ante, imperdiet in dolor id, tristique vestibulum orci."
        },
        {
          name: "img7",
          category: "photo",
          url: "https://i.imgur.com/TQgkicD.png",
          text:
            "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris vitae maximus dui. Nam nisl elit, ullamcorper quis nisl ullamcorper, aliquam sodales arcu. Donec sollicitudin enim orci, a ullamcorper felis mollis non. In pretium tempus nisl ut lobortis. Vivamus non sapien in odio porta varius. Nam ornare ligula lacus. Vestibulum augue quam, blandit eu sapien vulputate, gravida pretium tellus. Aliquam erat volutpat. Aenean et mauris vitae ipsum dignissim ornare a et ligula. Mauris eu mi nibh. Praesent sodales rutrum condimentum. Cras bibendum erat sed lectus fermentum, eu interdum ligula lacinia."
        },
        {
          name: "img8",
          category: "print",
          url: "https://i.imgur.com/cFfimNq.png",
          text:
            "Donec ornare risus sapien. Sed dui quam, molestie nec vehicula et, cursus a tellus. Suspendisse pulvinar sem enim, ac pretium arcu scelerisque ac. Quisque nunc purus, pulvinar nec est eget, scelerisque imperdiet purus. Pellentesque ullamcorper nibh ipsum, finibus blandit augue semper vitae. Donec et nulla lacus. Vivamus maximus condimentum justo suscipit feugiat. In pellentesque finibus est sit amet tempor. Nullam et nulla id erat faucibus hendrerit."
        },
        {
          name: "img9",
          category: "web",
          url: "https://i.imgur.com/apUA4Hw.png",
          text:
            "Sed eu blandit est. Duis tincidunt eleifend eleifend. Integer hendrerit tempor risus eget vestibulum. Etiam placerat ex in ligula hendrerit ornare. Vestibulum scelerisque neque eget posuere volutpat. Nam dictum, dui at imperdiet mattis, enim arcu mattis dui, ac suscipit nisi sapien in sem. Cras hendrerit quis odio eget fringilla. Sed vitae nibh eu dolor efficitur pulvinar at ac dui. Nam fermentum orci ut condimentum dapibus. Nam pulvinar nisi in nulla imperdiet, ac molestie eros fermentum. Aenean vel ultricies nibh, sollicitudin mollis urna. Vivamus ultricies risus lorem, nec faucibus nisi facilisis et. Sed imperdiet aliquet sapien sed luctus. Morbi imperdiet porttitor libero, et ornare turpis. Curabitur eu porta arcu, iaculis dignissim arcu."
        }
      ]
    };
  },

  components: {
    CalloutTop
  },
  methods: {
    listView1() {
      this.gridView = false;
      this.listView = true;
    },
    gridView1() {
      this.listView = false;
      this.gridView = true;
    }
  }
};
</script>

<style scoped>

.work-nav-icons svg:hover {
  cursor: pointer;
}
#grid-view {
  fill: #737373;
  pointer-events: fill;
}
#grid-view:hover {
  fill: #2ecc71;
  pointer-events: fill;
}
#list-view {
  fill: #737373;
}
#list-view:hover {
  fill: #2ecc71;
}
.work-nav-text {
  color: #737373;
}
.work-nav-text {
  display: flex;
  padding-bottom: 2em;
  padding-top: 3em;
}
.work-nav-text h6:hover {
  color: #2ecc71;
}

.work-nav-text h6:active {
  color: #2ecc71;
}

.grid-img {
  width: 100%;
  height: 220px;
  margin-top: 1em;
  margin-bottom: 1em;

  height: 220px;
}
.work-nav-icons {
  display: flex;
  justify-content: flex-end;
  align-content: center;
}
.work-nav-icons img:hover {
  cursor: pointer;
}
.work-nav {
  align-items: center;
}
.grid-container {
    max-width: 990px;
}
.portfolioList {
  display: grid;
  grid-template-areas: "a b";
  /* grid-template-columns: 1fr 1fr; */
  margin-right: -15px;
  margin-left: -15px;
  margin-bottom: 2em;
  padding-bottom: 2em;
}
.portfolioList img {
  overflow: hidden;
  width: 100%;
  height: 220px;
  margin-top: 1em;
  margin-bottom: 1em;
  object-fit: unset;
}
.portfolioList p {
  text-align: left;
  padding-left: 3em;
  padding-right: 3em;
}
#list-view {
  margin-left: 1em;
}
.portfolioGrid {
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
  margin-bottom: 2em;
  padding-bottom: 2em;
}
#all,
#print,
#photography,
#web,
#apps {
  cursor: pointer;
}
.list-images {
  grid-area: "a";
}
.list-paragraph {
  grid-area: "b";
}

.grid-img img {
  -webkit-transition: all 0.3s ease; /* Safari and Chrome */
  -moz-transition: all 0.3s ease; /* Firefox */
  -o-transition: all 0.3s ease; /* IE 9 */
  -ms-transition: all 0.3s ease; /* Opera */
  transition: all 0.3s ease;
  position: relative;
  /* width: 100%; */
  /* height: 220px; */
  object-fit: none;
  height: 220px;
  width: 300px;
  /* padding-top: 1em;
  padding-bottom: 1em; */
 
}
.grid-img img:hover {
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  -webkit-transform: translateZ(0) scale(1.02); /* Safari and Chrome */
  -moz-transform: scale(1.02); /* Firefox */
  -ms-transform: scale(1.02); /* IE 9 */
  -o-transform: translatZ(0) scale(1.02); /* Opera */
  transform: translatZ(0) scale(1.02);
  opacity: 0.8;
}
#slash {
  margin-left: 1em;
  margin-right: 1em;
  color: inherit !important;
}
</style>
