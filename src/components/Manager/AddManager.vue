<template>
  <div class="addManager">
    <h1>Create new manager:</h1>
    <form @submit.prevent="addManager">
      <div id="felt">
        <label name="firstname"> Fist Name: </label>
        <input
          type="text"
          for="firstname"
          v-model="manager.firstName"
          required
        />
      </div>

      <div id="felt">
        <label name="lastname"> Last Name: </label>
        <input type="text" for="lastname" v-model="manager.lastName" required />
      </div>

      <div id="felt">
        <label name="email"> Email: </label>
        <input type="email" for="email" v-model="manager.email" required />
      </div>

      <div id="felt">
        <label name="password"> Password: </label>
        <input
          type="password"
          for="password"
          v-model="manager.password"
          required
        />
      </div>

      <div id="button">
        <button type="submit" value="Register" >Add new manager</button>
      </div>
    </form>
  </div>
</template>

<script>
import { postManager } from "../../Services/UserService.js";

export default {
  data() {
    return {
      manager: {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
      },
    };
  },
  methods: {
    async addManager() {
      //alert(JSON.stringify(this.manager));
      await postManager(this.manager);
    },
  },
};
</script>

<style scoped>
</style>