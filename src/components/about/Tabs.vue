<template>
  <div>
    <div class="container-fluid" id="tab-background">
      <div class="container">
        <div class="row">
          <button class="tablinks active col-3" @click="currentTab = 0" :class="{highlight:currentTab == 0}" id="defaultOpen">
            <div class="tab-links">
              <img src="../../assets/websites.svg">
              <br>
              <p>WEBSITES</p>
            </div>
          </button>
          <button class="tablinks col-3" @click="currentTab = 1" :class="{highlight:currentTab == 1}">
            <div class="tab-links">
              <img src="../../assets/photo.svg">
              <br>
              <p>PHOTOGRAPHY</p>
            </div>
          </button>
          <button class="tablinks col-3" @click="currentTab = 2" :class="{highlight:currentTab == 2}">
            <div class="tab-links">
              <img src="../../assets/seo.svg">
              <br>
              <p>SEO</p>
            </div>
          </button>
          <button class="tablinks col-3" @click="currentTab = 3" :class="{highlight:currentTab == 3}">
            <div class="tab-links">
              <img src="../../assets/apps.svg">
              <br>
              <p>APPLICATIONS</p>
            </div>
          </button>
        </div>
      </div>
    </div>
    
    <span class="tab-text container">{{ tabText[currentTab] }}</span>
    
  </div>
</template>

<script>
export default {
  name: "Tabs",
  data() {
    return {
      currentTab: 0,
      tabText: [
        "Semper risus in hendrerit gravida. Facilisis magna etiam tempor orci eu lobortis elementum nibh tellus. Maecenas volutpat blandit aliquam etiam erat velit. Augue neque gravida in fermentum et sollicitudin ac orci phasellus. Molestie a iaculis at erat pellentesque. Libero justo laoreet sit amet cursus sit amet dictum. Bibendum est ultricies integer quis auctor elit sed vulputate. Eu lobortis elementum nibh tellus molestie nunc non blandit. Ut faucibus pulvinar elementum integer enim neque. Commodo quis imperdiet massa tincidunt nunc pulvinar. Etiam erat velit scelerisque in dictum non consectetur. Mattis pellentesque id nibh tortor id. Lectus sit amet est placerat in egestas erat imperdiet. Pretium fusce id velit ut tortor pretium. Quisque id diam vel quam elementum pulvinar etiam non quam.",
        "In iaculis nunc sed augue. Elementum nisi quis eleifend quam adipiscing vitae proin. Nunc scelerisque viverra mauris in aliquam sem fringilla ut. Sit amet justo donec enim diam vulputate. Vestibulum morbi blandit cursus risus at. Odio pellentesque diam volutpat commodo sed egestas. Eget magna fermentum iaculis eu non. Elementum curabitur vitae nunc sed velit dignissim. Faucibus in ornare quam viverra. Ut eu sem integer vitae justo eget magna. Quis ipsum suspendisse ultrices gravida dictum fusce ut placerat. Vitae congue mauris rhoncus aenean vel elit. Elit duis tristique sollicitudin nibh sit amet commodo nulla facilisi. Volutpat diam ut venenatis tellus in metus vulputate eu. Sit amet porttitor eget dolor morbi non arcu. Dignissim diam quis enim lobortis scelerisque fermentum. Sit amet porttitor eget dolor morbi. Dignissim convallis aenean et tortor. Est ante in nibh mauris cursus mattis molestie a iaculis. In arcu cursus euismod quis viverra nibh cras pulvinar.",
        "Mattis vulputate enim nulla aliquet porttitor lacus luctus. Augue mauris augue neque gravida in fermentum. Mi proin sed libero enim. Ultricies lacus sed turpis tincidunt id aliquet. Mauris cursus mattis molestie a. Urna duis convallis convallis tellus id interdum. Eu nisl nunc mi ipsum faucibus vitae aliquet nec. Erat pellentesque adipiscing commodo elit at imperdiet dui. Tincidunt dui ut ornare lectus. Habitant morbi tristique senectus et. Vestibulum sed arcu non odio euismod lacinia at quis risus. Ornare suspendisse sed nisi lacus sed viverra tellus in. Sit amet nisl suscipit adipiscing bibendum est ultricies integer quis. Eu tincidunt tortor aliquam nulla facilisi cras fermentum odio eu. Ullamcorper sit amet risus nullam eget felis. Ut tortor pretium viverra suspendisse potenti nullam ac tortor vitae. Accumsan in nisl nisi scelerisque eu ultrices vitae auctor.",
        "Pellentesque elit eget gravida cum sociis natoque penatibus et. Cursus risus at ultrices mi tempus imperdiet nulla. Nunc mattis enim ut tellus. Lectus mauris ultrices eros in cursus turpis massa. Lacus vel facilisis volutpat est velit egestas. Natoque penatibus et magnis dis. Nulla porttitor massa id neque aliquam vestibulum morbi blandit. Curabitur gravida arcu ac tortor dignissim convallis aenean. Vel turpis nunc eget lorem. Morbi tincidunt ornare massa eget egestas. Non consectetur a erat nam at. Risus pretium quam vulputate dignissim suspendisse in est ante in. Risus feugiat in ante metus dictum at. Tempor orci eu lobortis elementum nibh tellus. Vitae tempus quam pellentesque nec nam aliquam. Neque egestas congue quisque egestas diam in arcu cursus. Commodo odio aenean sed adipiscing diam. Eleifend donec pretium vulputate sapien nec. Tempor orci dapibus ultrices in iaculis nunc. Libero id faucibus nisl tincidunt eget nullam non."
      ]
    };
  }
};
</script>

<style scoped>
.tablinks {
  height: 200px;
  border: none;
  background-color: #efefef;
}
.tablinks p {
  padding-top: 2em;
}
.highlight {
  background-color: #ccc;
}
#tab-background {
  background-color: #efefef;
  margin-top: 1em;
}
.tablinks:hover {
  background-color: #dadada;
}
.tablinks:focus {
  outline: none;
}
.tab-text {
  display: block;
  padding-top: 2em;
  height: 300px;
}
</style>
