<template>
  <div class="container-fluid" id="get-to-video">
    <div class="container">
      <div class="row">
        <div class="video-thumbnail col-md-5">
          <a class="popup-youtube" href="https://www.youtube.com/watch?v=H8Hh64jqk_I">
            <img src="../../assets/video-player-placeholder.svg" alt="video player image">
          </a>
        </div>
        <div class="video-text col-7">
          <h2>GET TO KNOW US A LITTLE BETTER!</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu erat lacus, vel congue
            mauris. Fusce velit justo, faucibus eu sagittis ac, gravida quis tortor. Suspendisse non urna
            mi,
            quis tincidunt eros. Nullam tellus turpis, fringilla sit amet congue ut, luctus a nulla. Donec
            sit
            amet sapien neque, id ullamcorper diam. Nulla facilisi. Pellentesque pellentesque arcu a elit
            congue lacinia.
          </p>
          <p>
            Nullam tellus turpis, fringilla sit amet congue ut, luctus a nulla. Donec sit amet sapien neque,
            id
            ullamcorper diam. Nulla facilisi. Pellentesque pellentesque arcu a elit congue lacinia.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GetToVideo",
  methods: {
    
  }
};
</script>

<style>
#get-to-video {
  background-color: #efefef;
  padding: 2em;
}
.video-text h2 {
  font-family: "Novecento sans wide Light";
}
.video-text {
  text-align: justify;
}
.video-thumbnail img {
  max-width: 100%;
}
</style>
