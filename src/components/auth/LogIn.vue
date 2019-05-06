<template>
    <div>
        <callout-top :calloutTitle="calloutTitle"></callout-top>
        <div class="container">
            <div class="col-6">
            <form v-on:submit.prevent>
                <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="text" name="email" @blur="$v.email.$touch()" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" v-model="email" :class="{invalid: $v.email.$error}" >
                    <!-- <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> -->
                    <div class="warning-box">
                        <p class="warning" v-if="!$v.email.email && $v.email.$dirty">Please provide a valid email address.</p>
                        <p class="warning" v-if="!$v.email.required && $v.email.$dirty">This field is required.</p>
                    </div>
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" v-model="password">
                </div>
                <!-- <div class="form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1">
                    <label class="form-check-label" for="exampleCheck1">Check me out</label>
                </div> -->
                <button type="submit" class="btn btn-primary" @click="logIn">Log In</button>
                <span class="warning" v-if="feedback">{{ feedback }} </span>
            </form>
            </div>
        </div>
    </div>
</template>

<script>
import CalloutTop from '../CalloutTop.vue';
import db from '@/firebase/init';
import firebase from 'firebase/app';
import 'firebase/auth';
import {
  required,
  email,
  maxLength,
  minLength
} from "vuelidate/lib/validators";
import { helpers } from 'vuelidate/lib/validators'

const tooFew = (value, vm) => (value.length < vm.passMinLength);
const tooMuch = (value, vm) => (value.length > vm.passMaxLength);
const alphaNum = helpers.regex('alphaNum', /^[a-zA-Z0-9]*$/);

export default {
data() {
    return {
      calloutTitle: "Log in",
      email: "divac@gmail.com",
      password: '123456',
      passMinLength: 8,
      passMaxLength: 50,
      
};
  },
  components: {
    CalloutTop,
    },
    methods: {
        logIn() {
            this.$store.dispatch('logIn', {
                email: this.email,
                password: this.password
            })
            this.$store.dispatch('isNewUser', false )
            // this.$router.push({ path: '/' });
        }
    },
    computed: {
        feedback() {
            return this.$store.getters.feedback;
        }
    },
    beforeDestroy() {
        this.$store.dispatch('resetFeedback')
    },
    validations: {
    email: {
        required,
        email
    },
    password: {
        
    }
  },
}
</script>

<style scoped>
form {
    margin-top: 5em;
    padding: 20px;
    background: white;
    box-shadow: 0px 3px 15px rgba(0,0,0,0.2);
    height: 300px;
}
.col-6 {
    margin: auto;
}
.btn-primary  {
    background-color: #2ecc71;
    border-color: #2ecc71;
    margin-top: 1em;
    margin-bottom: 2em;
}
.btnaa {
    outline: none !important;
}
/* warnings */
.form-control.invalid {
    color: LIGHTCORAL;
}
.input.invalid .form-control {
  border: 3px solid LIGHTCORAL;
  /* background-color: rgb(238, 238, 238); */
}
.warning {
    margin-top: 5px;
    margin-bottom: 2em;
    color: indianred;
    position: absolute;
    /* padding-left: 1em; */
}
span.warning {
    border: 1px solid rgba(255, 63, 63, 0.534);
    border-radius: 5px;
    background-color: rgb(250, 229, 229);
    width: 65%;
    padding: 0.5em;
    margin-left: 0.5em;
}
.warning-box {
    position: relative;
    height: 20px;
}
.form-control:focus,
.form-control:active,
.form-control {
  box-shadow: none;
  border: 2px solid #737373;
  border-radius: 0;
}
 .form-control.invalid {
  border: 3px solid LIGHTCORAL;
  /* background-color: rgb(238, 238, 238); */
}
</style>
