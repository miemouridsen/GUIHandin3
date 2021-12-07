<template>
  <div class="login">
    <h1>Welcome to Big Bad Wolf Modelling Agency!</h1>
    <form @submit.prevent="userLogin">
      <label>Email:</label> <br />
      <input type="email" v-model="login.email" required />
      <br />
      <label>Password:</label> <br />
      <input type="password" v-model="login.password" required />
      <br />
      <button type="submit">Login</button> <br />
    </form>
  </div>
</template>

<script>
import { login, getUser } from "../Services/LoginService.js";

export default {
  setup() {},
  data() {
    return {
      login: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    async userLogin() {
      const loggedIn = await login(this.login);
      if (loggedIn) {
        // her skal der implementeres routing til enten model eller manager siderne
        const user = getUser();
        if (user.role === "Manager") {
          this.$router.push("manager");
        } else if (user.role === "Model") {
          this.$router.push("model");
        }
      }
      return;
    },
  },
};
</script>

<style>
/* Navbar navigation styling from https://www.w3schools.com/howto/howto_css_responsive_form.asp */

/* Style inputs, select elements and textareas */
input,
select,
textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  resize: vertical;
}

input:invalid {
  border-bottom-color: red;
}

/* Style the label to display next to the inputs */
label {
  padding: 12px 12px 12px 0;
  display: inline-block;
}

/* Style the submit button */
button[type="submit"] {
  background-color: #04aa6d;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin: 1rem;
}

button:disabled {
  opacity: 30%;
}

/* Style the container */
.login {
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
}
</style>
