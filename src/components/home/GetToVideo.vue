<template>
  <div class="container-fluid" id="get-to-video">
    <div class="container">
      <div class="row">
        <div class="video-thumbnail col-md-5">
          <!-- <a class="popup-youtube" href="https://www.youtube.com/watch?v=H8Hh64jqk_I"> -->
          <img
            @click="show()"
            src="../../assets/video-player-placeholder.svg"
            alt="video player image"
          >
          <modal name="hello-world">
            <div class="modal-mask">
              <div class="modal-wrapper">
                <div class="modal-container">
                  <button class="modal-default-button" @click="hide()">X</button>
                  
                  <iframe
                    src="https://www.youtube.com/embed/2MpUj-Aua48?rel=0&modestbranding=1&autohide=1&mute=1&showinfo=0&controls=0&autoplay=1"
                    width="560"
                    height="315"
                    frameborder="0"
                    allowfullscreen
                  ></iframe>
                  
                </div>
              </div>
            </div>
          </modal>

          <!-- </a> -->
        </div>
        <div class="video-text col-7">
          <h2 @click="show()">GET TO KNOW US A LITTLE BETTER!</h2>
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
    show() {
      this.$modal.show("hello-world");
    },
    hide() {
      this.$modal.hide("hello-world");
    }
  }
};
</script>

<style scoped>
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
img:hover {
  opacity: 0.8;
  cursor: pointer;
}
 
.modal-wrapper {
  /* display: table-cell; */
  /* vertical-align: middle; */
}
.modal-container {
  width: 590px;
  height: 390px;
  /* margin: 0px auto; */
  padding: 20px;
  background-color: #fff;
  border-radius: 2px;
  /* box-shadow: 0 2px 8px rgba(0, 0, 0, .33); */
  transition: all .3s ease;
  font-family: Helvetica, Arial, sans-serif;
  /* position: relative; */
  
}
iframe {
  position: absolute;
}
button {
  float: right;
}
</style>
