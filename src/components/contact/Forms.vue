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
          <div class="input" :class="{invalid: $v.name.$error}">
            <input
              type="text"
              class="form-control forme"
              id="name"
              v-model="name"
              placeholder="Name"
              @blur="$v.name.$touch()"
            >
            <p class="warning" v-if="!$v.name.required && $v.name.$dirty">This field is required</p>
          </div>
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
            <p class="warning" v-if="!$v.email.email">Please provide a valid email address.</p>
            <p
              class="warning"
              v-if="!$v.email.required && $v.email.$dirty"
            >This field must not be empty.</p>
          </div>
          <div class="input">
            <input
              type="email"
              name="subject"
              class="form-control forme"
              id="subject"
              placeholder="Subject"
            >
          </div>
          <div class="input" :class="{invalid: $v.textarea.$error}">
            <textarea
              class="form-control"
              id="textarea"
              name="textarea"
              v-model="textarea"
              rows="10"
              placeholder="(for development purposes: more than 2 & less than 10 characters)"
              @input="$v.textarea.$touch()"
            ></textarea>
            <p
              class="warning"
              v-if="$v.textarea.$error"
            >Please limit the message to 500 characters max.</p>
          </div>
          <div class="container">
            <div class="row justify-content-between">
              <button
                type="submit"
                :disabled="$v.$invalid || !recaptchachecked"
                class="action-btn col-md-3 col-sm-4 col-6"
                id="send-button"
                v-on:click="sendMessage()"
              >SEND MESSAGE</button>

              <div class="form-group">
                <!-- <div
                  class="g-recaptcha"
                  data-sitekey="6LfKURIUAAAAAO50vlwWZkyK_G2ywqE52NU7YO0S"
                  data-callback="verify()"
                  data-expired-callback="expiredRecaptchaCallback"
                ></div>-->
                <vue-recaptcha sitekey="6LfKURIUAAAAAO50vlwWZkyK_G2ywqE52NU7YO0S" @verify="verify"></vue-recaptcha>
                <input
                  class="form-control d-none"
                  data-recaptcha="true"
                  required
                  data-error="Please complete the Captcha"
                >
                <div class="help-block with-errors"></div>
              </div>
            </div>
          </div>
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
import {
  required,
  email,
  maxLength,
  minLength
} from "vuelidate/lib/validators";
import VueRecaptcha from "vue-recaptcha";

export default {
  name: "Forms",
  data() {
    return {
      // recaptchaEnabled: process.env.NODE_ENV,
      showForm: true,
      email: "",
      name: "",
      textarea: "",
      recaptchachecked: false
    };
  },
  methods: {
    sendMessage() {
      alert("Thank you for participation!");
      this.showForm = false;
    },
    verify() {
      this.recaptchachecked = true;
      console.log("nesto");
    }
  },

  validations: {
    name: {
      required
    },
    email: {
      required,
      email
    },
    textarea: {
      maxLength: maxLength(10),
      minLength: minLength(3),
      required
    }
  },
  components: {
    VueRecaptcha
  }
};
</script>

<style scoped>
input,
textarea {
  margin-top: 1em;
  margin-bottom: 1em;
}
.forme {
  width: 65%;
}
#send-button {
  margin-bottom: 2.5em;
}
h4 {
  color: #737373;
  margin-top: 2em;
}

.info-group p {
  margin-top: 2em;
  margin-bottom: 1em;
}
.warning {
  margin-top: -1em;
  margin-bottom: 2em;
}
#e-mail {
  color: #2ecc71;
}
button {
  /* margin-top: 1em; */
  margin-bottom: 2.5em;
  font-family: "Novecento sans wide Light";
  background-color: #2ecc71;
  padding: 1em;
  border: none;
  color: white;
  margin-top: 0px;
}
button:disabled {
  background-color: #cccccc !important;
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
