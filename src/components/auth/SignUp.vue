<template>
    <div>
        <callout-top :calloutTitle="calloutTitle"></callout-top>
        <div class="container">
            <div class="col-6">
            <form v-on:submit.prevent>
                <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="text" name="email" @blur="$v.email.$touch()" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" v-model="email" :class="{invalid: $v.email.$error}">

                    <input type="text" name="" class="form-control" placeholder="Enter first name" v-model="firstName" >
                    <input type="text" name="" class="form-control" placeholder="Enter last name" v-model="lastName">

                    <div class="warning-box">
                        <p class="warning" v-if="!$v.email.email && $v.email.$dirty">Please provide a valid email address.</p>
                        <p class="warning" v-if="!$v.email.required && $v.email.$dirty">This field is required.</p>
                    </div>
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" v-model="password"
                    @blur="$v.password.$touch()">
                </div>
                <div class="warning-box">
                        <p class="warning" v-if="$v.password.tooFewChars && $v.password.$dirty">Password should be at least {{ passMinLength }} long</p>
                        <p class="warning" v-if="$v.password.tooManyChars && $v.password.$dirty">Password should be a maximum of {{ passMaxLength }} characters long</p>
                        <p class="warning2" v-if="!$v.password.alphaNum">Password should contain alphanumeric characters only</p>
                    </div>
                <button type="submit" class="btn btn-primary" @click="signUp()" :disabled="$v.password.tooFewChars || $v.password.tooManyChars || !$v.password.alphaNum || $v.email.$invalid">Sign Up</button>
                <span class="warning" v-if="feedback">{{ feedback }}</span>
            </form>
            </div>
        </div>
    </div>
</template>

<script>
import CalloutTop from '../CalloutTop.vue';
import db from '@/firebase/init';
import firebase from 'firebase';
import 'firebase/auth';
import {
  required,
  email,
  maxLength,
  minLength
} from "vuelidate/lib/validators";
import { helpers } from 'vuelidate/lib/validators'

const tooFewChars = (value, vm) => (value.length < vm.passMinLength);
const tooManyChars = (value, vm) => (value.length > vm.passMaxLength);
const alphaNum = helpers.regex('alphaNum', /^[a-zA-Z0-9]*$/);

export default {
data() {
    return {
        calloutTitle: "Sign up here",
        email: null,
        firstName: null,
        lastName: null,
        password: '',
        //da sprijeci firebase registraciju, prebaci kasnije u 8
        passMinLength: 4,
        //50
        passMaxLength: 6,
    };
  },
  components: {
    CalloutTop,
    },
    methods: {
        signUp() {
            this.$store.dispatch('createUser', {
                email: this.email,
                password: this.password,
                firstName: this.firstName,
                lastName: this.lastName
            }
            );
            this.$store.dispatch('isNewUser', true);
        }
    },
    computed: {
        feedback() {
            return this.$store.getters.feedback;
        },
        user() {
            return this.$store.getters.user;
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
            tooManyChars,
            tooFewChars,
            alphaNum
        }
  },
}
</script>

<style scoped>
input {
    margin-top: 1em;
}
form {
    margin-top: 1em;
    margin-bottom: 5em;
    padding: 20px;
    background: white;
    box-shadow: 0px 3px 15px rgba(0,0,0,0.2);
    height: 450px;
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
}
.warning {
    margin-top: 10px;
    margin-bottom: 2em;
    color: indianred;
    position: absolute;
}
.warning2 {
    margin-top: -12px;
    color: indianred;
    position: absolute;
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
}
button:disabled {
  background-color: #cccccc !important;
  border: none;
}
</style>
