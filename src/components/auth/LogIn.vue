<template>
    <div>
        <callout-top :calloutTitle="calloutTitle"></callout-top>
        <div class="container">
            <div class="col-6">
            <form>
                <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" v-model="email">
                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" v-model="password">
                </div>
                <div class="form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1">
                    <label class="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" class="btn btn-primary" @click="logIn()">Log In</button>
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


export default {
data() {
    return {
      calloutTitle: "Log in",
      email: "vladimir.popovic@bild-studio.net",
      password: '123456'
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
            });
            this.$router.push({ path: '/' });

        }
    }
}
</script>

<style scoped>
form {
    margin-top: 2em;
    padding: 20px;
    background: white;
    box-shadow: 0px 3px 15px rgba(0,0,0,0.2);
}
.col-6 {
    margin: auto;
}
.btn-primary  {
    background-color: #2ecc71;
    border-color: #2ecc71;
    margin-top: 1em;
}
/* warnings */
.form-control.invalid label {
  color: LIGHTCORAL;
}
.warning {
  margin-top: -1em;
  margin-bottom: 2em;
  color: indianred;
}
</style>
