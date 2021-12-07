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
        <input type="submit" value="Register" />
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
.addManager {
  margin: 60px;
  padding: 90px;
  background: royalblue;

  -webkit-box-shadow: 5px 5px 15px 5px #000000;
  box-shadow: 5px 5px 15px 5px #000000;
}
#felt {
  margin-top: 15px;
  text-align: left;
}

#button {
  margin-top: 15px;
  align-content: center;
}
</style>