<template>
  <div class="container forms">
    <div class="row justify-content-between">
      <div class="col-sm-7 col-12 form-group">
        <h4>{{ contactInfo.headers[0] }}</h4>
        <p>{{ contactInfo.paragraphs[0] }}</p>
        <form action v-if="showForm">
          <div class="input" :class="{invalid: $v.name.$error}">
            <input
              type="text"
              class="form-control forme"
              id="name"
              v-model="name"
              placeholder="Name"
              @blur="$v.name.$touch()">
            <p
              class="warning"
              v-if="!this.$v.name.required && this.$v.name.$dirty">This field is required.</p>
          </div>
          <div class="input" :class="{invalid: $v.email.$error}">
            <input
              type="email"
              name="email"
              class="form-control forme"
              id="email"
              @blur="$v.email.$touch()"
              placeholder="Email Address"
              v-model="email">
            <p class="warning" v-if="!$v.email.email">Please provide a valid email address.</p>
            <p
              class="warning"
              v-if="!$v.email.required && $v.email.$dirty">This field is required.</p>
          </div>
          <div class="input" :class="{invalid: $v.subject.$error}">
            <input
              type="email"
              name="subject"
              class="form-control forme"
              id="subject"
              @blur="$v.subject.$touch()"
              placeholder="Subject"
              v-model="subject">
            <p
              class="warning"
              v-if="!$v.subject.required && $v.subject.$dirty">This field is required.</p>
          </div>
          <div class="input" :class="{invalid: $v.textarea.$error}">
            <textarea
              class="form-control"
              id="textarea"
              name="textarea"
              v-model="textarea"
              rows="10"
              placeholder="(for development purposes: more than 2 & less than 10 characters)"
              @input="$v.textarea.$touch()"></textarea>
            <p
              class="warning"
              v-if="$v.textarea.$error">Please limit the message to 500 characters max.</p>
          </div>
          <div class="container">
            <div class="row justify-content-between">
              

              <div class="form-group col-">
                <vue-recaptcha sitekey="6LfKURIUAAAAAO50vlwWZkyK_G2ywqE52NU7YO0S" @verify="verify"></vue-recaptcha>
                <input
                  class="form-control d-none"
                  data-recaptcha="true"
                  required
                  data-error="Please complete the Captcha">
                <div class="help-block with-errors"></div>
              </div>
              <div id="send-button-container">
                <button
                  type="submit"
                  :disabled="$v.$invalid || !recaptchachecked"
                  class="action-btn"
                  id="send-button"
                  v-on:click="sendMessage()">SEND MESSAGE</button>
            </div>
            </div>
          </div>
        </form>
      </div>
      <div class="info-group col-sm-4 col-12">
        <h4>{{contactInfo.headers[1]}}</h4>
        <p v-html="contactInfo.paragraphs[1]"></p>

        <h4 id="hours">{{contactInfo.headers[2]}}</h4>
        <div class="row" v-html="contactInfo.paragraphs[2]"></div>
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
import db from "@/firebase/init";
import VueRecaptcha from "vue-recaptcha";

export default {
  name: "Forms",
  data() {
    return {
      // recaptchaEnabled: process.env.NODE_ENV,
      showForm: true,
      email: "",
      name: "",
      subject: "",
      textarea: "",
      recaptchachecked: false,
      feedback: null
    };
  },
  // created() {
  //   // fetching
  //   db.collection('contact-info').get().then(snapshot => {
  //     var contactInfo = [];
  //     snapshot.forEach(doc => {
  //         contactInfo.push(doc.data()) 
  //     });
  //     this.$store.commit('setContactInfo', contactInfo)
  //   })
  // },
  methods: {
    sendMessage() {
      alert("Thank you for participation!");
      this.showForm = false;
    },
    verify() {
      this.recaptchachecked = true;
    },
  },

  validations: {
    name: {
      required
    },
    email: {
      required,
      email
    },
    subject: {
      required
    },
    textarea: {
      maxLength: maxLength(10),
      minLength: minLength(3),
      required
    }
  },
  components: {
    VueRecaptcha
  },
  computed: {
    contactInfo() {
      return this.$store.getters.contactInfo;
    }
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
  padding: 1em;
  display: block;
  position: relative;
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
  color: indianred;
}
#e-mail {
  color: #2ecc71;
}
button {
  /* margin-top: 1em; */
  margin-bottom: 2.5em;
  font-family: "Novecento sans wide Light";
  background-color: #2eec7d;
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
.col-6 {
  margin-top: 2em;
}
p {
  margin-top: 2em;
}
#send-button-container {
  width: 100%
}
</style>
