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

</style>
