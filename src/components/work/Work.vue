<template>
  <div>
    <callout-top :calloutTitle="calloutTitle"></callout-top>
    <work-nav></work-nav>
    <work-items/>
  </div>
</template>

<script>
import WorkNav from "./WorkNav.vue";
import WorkItems from "./WorkItems";
import CalloutTop from "../CalloutTop.vue";

export default {
  name: "Work",
  data() {
    return {
      calloutTitle: "CHECK OUT WHAT I CAN DO"
    };
  },
  components: {
    CalloutTop,
    WorkNav,
    WorkItems
  }
};
</script>

<style>
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

.grid-img img {
  width: 100%;
  height: 220px;
  object-fit: cover;
  padding-top: 1em;
  padding-bottom: 1em;
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
.portfolio-list {
  display: block;
}
#list-view {
  margin-left: 1em;
}
.portfolio-grid {
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
  margin-bottom: 2em;
}
#all,
#print,
#photography,
#web,
#apps {
  cursor: pointer;
}

.grid-img img {
  -webkit-transition: all 0.3s ease; /* Safari and Chrome */
  -moz-transition: all 0.3s ease; /* Firefox */
  -o-transition: all 0.3s ease; /* IE 9 */
  -ms-transition: all 0.3s ease; /* Opera */
  transition: all 0.3s ease;
  position: relative;
}
.grid-img img:hover {
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  -webkit-transform: translateZ(0) scale(1.05); /* Safari and Chrome */
  -moz-transform: scale(1.05); /* Firefox */
  -ms-transform: scale(1.05); /* IE 9 */
  -o-transform: translatZ(0) scale(1.05); /* Opera */
  transform: translatZ(0) scale(1.05);
}
#slash {
  margin-left: 1em;
  margin-right: 1em;
  color: inherit !important;
}
</style>
