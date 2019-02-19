<template>
  <div class="container forms">
    <div class="row justify-content-between">
      <div class="col-sm-7 col-12 form-group">
        <h4>CONTACT FORM</h4>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis quis obcaecati voluptatum harum
          nam
          sequi enim ludantium quas dignissimos consequuntur.
        </p>
        <input
          type="email"
          class="form-control forme"
          id="exampleFormControlInput1"
          placeholder="Name"
        >
        <input
          type="email"
          class="form-control forme"
          id="exampleFormControlInput1"
          placeholder="Email Address"
        >
        <input
          type="email"
          class="form-control forme"
          id="exampleFormControlInput1"
          placeholder="Subject"
        >
        <textarea class="form-control" id="exampleFormControlTextarea1" rows="10" maxlength="500"></textarea>
        <button
          type="button"
          class="action-btn col-auto"
          id="send-button"
          v-on:click="sendMessage()"
        >SEND MESSAGE</button>
      </div>
      <div class="col-sm-4 col-12">
        <h4>CONTACT INFO</h4>
        <p>Lorem ipsum dolor sit amet, consectetur
          <br>adipiscing elit velit justo.
        </p>
        <p>
          <strong>email:</strong>
          <a href="mailto:info@display.com" target="_blank" id="e-mail">info@display.com</a>
          <br>
          <strong>phone:</strong> 1.306.222.4545
        </p>
        <p>222 2nd Ave South
          <br>Saskabush, SK S7M 1T6
        </p>
        <h4 id="hours">STORE HOURS</h4>
        <div class="row">
          <p class="col-6">Monday - Thursday
            <br>Friday
            <br>Saturday
            <br>Sunday & Holidays
          </p>
          <p class="col-6">8 am - 5 pm
            <br>8 am - 6 pm
            <br>9 am - 5 pm
            <br>Closed
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    sendMessage() {
      alert("Thank you for participation!");
      document.getElementById("exampleFormControlTextarea1").style.display =
        "none";
      document.getElementById("send-button").style.display = "none";
    }
  }
};
</script>

<style>
input,
textarea {
  margin-top: 1em;
}
.forme {
  width: 65%;
}
#send-button {
  margin-top: 1em;
  margin-bottom: 2.5em;
}
h4 {
  color: #737373;
  margin-top: 2em;
}
p {
  margin-top: 2em;
  margin-bottom: 1em;
}
#e-mail {
  color: #2ecc71 !important;
}
#send-button {
  margin-top: 1em;
  margin-bottom: 2.5em;
  font-family: "Novecento sans wide Light";
  background-color: #2ecc71;
  padding: 1em;
  border: none;
  color: white;
}
</style>
