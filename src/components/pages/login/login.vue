<template>
    <div class="page">
        <div class="mdl-cell--12-col mdl-cell mdl-center">
            <span class="md-display-2">Login</span>
        </div>
        <form >
            <div class="mdl-grid">
                <div class="mdl-cell--3-col mdl-cell mdl-cell--0-col-phone" >&nbsp;</div>
                <div class="mdl-cell--6-col mdl-cell mdl-cell--12-col-phone">
                    <div class="mdl-cell--12-col mdl-cell">
                        <md-input-container>
                            <label>Email</label>
                            <md-input v-model="email" required></md-input>
                        </md-input-container>
                    </div>
										<!--TODO: submit on enter-->
                    <div class="mdl-cell--12-col mdl-cell" v-if="!reset">
                        <md-input-container md-has-password>
                            <label>Password</label>
                            <md-input v-model="password" required type="password"></md-input>
                        </md-input-container>
                    </div>
                     <div class="mdl-cell--12-col mdl-cell mdl-right">
										 		<md-checkbox v-model="rememberMe">Remember Me</md-checkbox>
                        <md-button v-on:click="reset=!reset" :class="reset ? 'md-raised' : ''">{{reset ? "Login" : "Forgot Password"}}</md-button>
                        <md-button v-if="reset" v-on:click="send()" class="md-raised md-primary">Send Email</md-button>
                        <md-button v-if="!reset" v-on:click="login()" class="md-raised md-primary">Login</md-button>
                        <router-link to="/" v-if="!reset" ><md-button class="md-raised md-warn">Cancel</md-button></router-link>
                    </div>
                </div>
            </div>

        </form>
    </div>
</template>
<script>
import { createCookie, getCookie } from "../../../helpers/cookie";
import { resetPassword, login, getCurrentUser } from "../../../api/api";
import { eventBus } from "../../../components/events/bus";
import store from "../../../store";

const jwt = require("jwt-simple");
const secret = "db9f15f3-8c1b-4d3e-b4f1-d705c210220c";
export default {
  data() {
    return {
      email: "",
      password: "",
			reset: false,
			rememberMe: false
    };
  },
  created() {
    return {};
  },
  methods: {
		send() {
			resetPassword({email: this.email}).then(r => {
				if(r.success){
         	eventBus.$emit("notification", "email sent!");
					this.email = "";
					this.password = "";
					this.reset = false;
				} else {
					eventBus.$emit("apiError", r.error);
				}
			});
		},
    login() {
      eventBus.$emit("blockUI");
			if(this.rememberMe) {
				createCookie("email", this.email);
				createCookie("password", jwt.encode(this.password, secret));
			} else {
				createCookie("email", "");
				createCookie("password", "");
			}
      var email = this.email,
        password = this.password;
      var user = { email, password };

      login(user).then(res => {
        if (res && res.success) {
          createCookie("foobartoken", res.payload);
          getCurrentUser().then(u => {
            eventBus.$emit("userUpdated", u);
            eventBus.$emit("unblockUI");
          });

          this.$router.push("/");
        }
      });
    }
  },
	mounted() {
		const email = getCookie("email");
		var pw = "";
		if(getCookie("password"))
			pw = jwt.decode(getCookie("password"), secret);
		this.email = email;
		this.password = pw;

		if(email && pw) this.rememberMe = true;
	}
};
</script>
