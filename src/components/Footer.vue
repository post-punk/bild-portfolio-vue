<template>
  <div class="footer">
    <div class="container-fluid d-flex align-items-center callout-btm">
      <div class="container">
        <div class="callout-btm row justify-content-between">
          <h3 id="are-you-ready" class="col-6">ARE YOU READY TO BE BLOWN AWAY?</h3>
          <button type="button" class="action-btn col-" id="click-here">
            <a href="work.html">
              CLICK HERE TO FIND
              OUT
            </a>
          </button>
        </div>
      </div>
    </div>

    <div class="container-fluid">
      <div class="container">
        <div class="row justify-content-between footer-wrapper">
          <div class="col-">
            <p id="footer-copyright">COPYRIGHT 2013 DISPLAY. ALL RIGHTS RESERVED.</p>
          </div>
          <div class="col-">
            <p id="footer-nav">
              <a href="index.html">HOME</a> /
              <a href="about.html">ABOUT</a> /
              <a href="work.html">WORK</a>
              /
              <a href="contact.html">CONTACT</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.footer {
  background-color: #efefef;
  display: block;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;
  height: 203px;
  position: absolute;
  bottom: 0;
  width: 100%;
}
.footer-wrapper {
  height: 63px;
  display: flex;
  align-items: center;
}

#footer-nav a {
  color: inherit;
}
.callout-btm {
  background-color: #322f2f;
  display: flex;
  align-items: center;
  color: white;
  height: 140px;
  bottom: 0;
}
#click-here {
  background-color: #2ecc71;
  border: none;
  margin-bottom: 1em;
  padding: 1em;
}
#click-here a {
  font-family: "Novecento sans wide Light";
  color: white;
}
</style>
