<template>
    <div>
      <div class="spinner-container">
        <div class="half-circle-spinner">
            <div class="circle circle-1"></div>
            <div class="circle circle-2"></div>
        </div>
      </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
.half-circle-spinner, .half-circle-spinner * {
      box-sizing: border-box;
      
    }

    .half-circle-spinner {
      width: 60px;
      height: 60px;
      border-radius: 100%;
      position: relative;
      margin: auto;
    }

    .half-circle-spinner .circle {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: 100%;
      border: calc(60px / 10) solid transparent;
      
    }

    .half-circle-spinner .circle.circle-1 {
      border-top-color: #2ecc71;
      animation: half-circle-spinner-animation 1s infinite;
    }

    .half-circle-spinner .circle.circle-2 {
      border-bottom-color: #2ecc71;
      animation: half-circle-spinner-animation 1s infinite alternate;
    }

    @keyframes half-circle-spinner-animation {
      0% {
        transform: rotate(0deg);

      }
      100%{
        transform: rotate(360deg);
      }
    }
    .spinner-container {
      background-color: rgba(255,255,255,0.5);
      border-radius: 10px;
      height: 100%;
      left: 50%;
      position: fixed ;
      top: 50%;
      transform: translate(-50%,-50%);
      z-index: 99;
      width: 100%;
      display: flex;
      Overflow: Auto
    }
</style>
