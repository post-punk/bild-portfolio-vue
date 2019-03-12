<template>
  <div class="container-fluid" id="get-to-video">
    <div class="container">
      <div class="row">
        <div class="video-thumbnail col-md-5">
          <img
            @click="show()"
            src="../../assets/video-player-placeholder.svg"
            alt="video player image"
          >
          <modal name="hello-world">
            <button
              @click="hide()"
              type="button"
              class="close modal-default-button"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
            <iframe
              src="https://www.youtube.com/embed/tqvh8mz2Q9s?rel=0&modestbranding=1&autohide=1&mute=0&showinfo=0&controls=0&autoplay=1"
              width="500px"
              height="300px"
              frameborder="0"
              allowfullscreen
            ></iframe>
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
  color: #737373;
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

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

img:hover {
  opacity: 0.8;
  cursor: pointer;
}
button {
  float: right;
}

button {
  color: white;
  opacity: 1 !important;
  font-size: 3em;
  padding-right: 1.9em;
}
button:focus {
  outline: none;
}

</style>
