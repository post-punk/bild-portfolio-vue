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
        <form action v-if="showForm">
          <input type="text" class="form-control forme" id="name" v-model="name" placeholder="Name">
          <div class="input" :class="{invalid: $v.email.$error}">
            <input
              type="email"
              name="email"
              class="form-control forme"
              id="email"
              @blur="$v.email.$touch()"
              placeholder="Email Address"
              v-model="email"
            >
            <p v-if="!$v.email.email">Please provide a valid email address.</p>
            <!-- <p v-if="!$v.email.required && $dirty">This field must not be empty.</p> -->
          </div>
          <!-- <div>{{ $v }}</div> -->
          <input
            type="email"
            class="form-control forme"
            id="subject"
            v-model="subject"
            placeholder="Subject"
          >
          <div class="input" :class="{invalid: $v.textarea.$error}">
            <textarea
              class="form-control"
              id="textarea"
              name="textarea"
              v-model="textarea"
              rows="10"
              maxlength="50"
              @blur="$v.textarea.$touch()"
            >
            
            
            
            </textarea>
            <p v-if="$v.textarea.$error">Please limit the message to 500 characters max.</p>
          </div>
          <button
            type="submit"
            class="action-btn col-auto"
            id="send-button"
            v-on:click="sendMessage()"
          >SEND MESSAGE</button>
        </form>
      </div>
      <div class="info-group col-sm-4 col-12">
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
import { required, email, maxLength } from "vuelidate/lib/validators";
export default {
  name: "Forms",
  data() {
    return {
      showForm: true,
      email: "",
      name: "",
      subject: "",
      textarea: ""
    };
  },
  methods: {
    sendMessage() {
      alert("Thank you for participation!");
      this.showForm = false;
    }
  },
  validations: {
    email: {
      required,
      email
    },
    textarea: {
      maxLength: maxLength(15)
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
.form-group p,
.info-group p {
  margin-top: 2em;
  margin-bottom: 1em;
}
#e-mail {
  color: #2ecc71;
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

.form-control:focus,
.form-control:active,
.form-control {
  box-shadow: none;
  border: 2px solid #737373;
  border-radius: 0;
}
.input.invalid .form-control {
  border: 3px solid LIGHTCORAL;
  /* background-color: rgb(238, 238, 238); */
}

.form-control.invalid label {
  color: LIGHTCORAL;
}
form p {
  /* color: indianred; */
}
</style>
