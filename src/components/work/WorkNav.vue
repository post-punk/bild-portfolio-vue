<template>
  <div class="container">
    <div class="row work-nav justify-content-between">
      <div class="work-nav-text col-sm-7 col-12">
        <h6 id="all" onclick="removeItems('all')">ALL</h6>
        <h6 id="slash">/</h6>
        <h6 id="print" onclick="removeItems('print')">PRINT</h6>
        <h6 id="slash">/</h6>
        <h6 id="photography" onclick="removeItems('photo')">PHOTOGRAPHY</h6>
        <h6 id="slash">/</h6>
        <h6 id="web" onclick="removeItems('web')">WEB</h6>
        <h6 id="slash">/</h6>
        <h6 id="apps" onclick="removeItems('app')">APPLICATIONS</h6>
      </div>
      <div class="col-sm-1 col-12">
        <div class="work-nav-icons">
          <svg v-on:click="activeClass = 'grid'" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15">
  <path id="grid-view" data-name="grid view" class="cls-1" d="M1129,329h6.03v5.929H1129V329Zm8.95,0H1144v6.012h-6.05V329Zm-8.95,8.9h6.01V344H1129v-6.1Zm8.97,0H1144V344h-6.03v-6.1Z" transform="translate(-1129 -329)"/>
</svg>
          <svg v-on:click="activeClass = 'list'" id="list-view" data-name="list view" xmlns="http://www.w3.org/2000/svg" width="15" height="15.031" viewBox="0 0 15 15.031">
  
  <rect id="_1" data-name="1" class="cls-1" y="12.031" width="15" height="3"/>
  <rect id="_2" data-name="2" class="cls-1" y="6" width="15" height="3.031"/>
  <rect id="_3" data-name="3" class="cls-1" width="15" height="3.031"/>
</svg>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'WorkNav',

// stara skripta za grid/list
// var element = document.getElementsByClassName("portfolio-grid")[0];

// function toggleList(){

//       element.className = "portfolio-list"
// }
// function toggleGrid(){
//   element.className = "portfolio-grid"
// }






};
</script>

<style>

.work-nav-icons svg:hover {
    cursor: pointer;
}
#grid-view {
    fill: #737373;
    pointer-events: fill;
}
#grid-view:hover  {
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
</style>
