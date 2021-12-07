<template>
  <div class="addModel">
    <h1>Here you can add new model.</h1>
    <form @submit.prevent="addModel">
      <label>First name:</label> <br />
      <input type="text" v-model="model.firstName" required />
      <br />
      <label>Last name:</label> <br />
      <input type="text" v-model="model.lastName" />
      <br />
      <label>Email:</label> <br />
      <input type="email" v-model="model.email" required />
      <br />
      <label>Phone number:</label> <br />
      <input type="tel" v-model="model.phoneNo" required />
      <br />
      <label>Address line:</label> <br />
      <input type="text" v-model="model.addresLine1" required />
      <br />
      <label>Zip code:</label> <br />
      <input type="text" v-model="model.zip" />
      <br />
      <label>City:</label> <br />
      <input type="text" v-model="model.city" />
      <br />
      <label>Country:</label> <br />
      <input type="text" v-model="model.country" />
      <br />
      <label>Country:</label> <br />
      <input type="date" v-model="model.birthDate" />
      <br />
      <label>Nationality:</label> <br />
      <input type="text" v-model="model.nationality" required />
      <br />
      <label>Height:</label> <br />
      <input type="number" v-model="model.height" />
      <br />
      <label>Show size:</label> <br />
      <input type="number" v-model="model.shoeSize" />
      <br />
      <label>Hair color:</label> <br />
      <input type="text" v-model="model.hairColor" />
      <br />
      <label>Eye color:</label> <br />
      <input type="text" v-model="model.eyeColor" />
      <br />
      <label>Comments:</label> <br />
      <input type="text" v-model="model.comments" />
      <br />
      <label>Password:</label> <br />
      <input type="password" v-model="model.password" required />
      <br />
      <button type="submit">Add Model to Database</button> <br />
    </form>
  </div>
  <p>{{ response }}</p>
</template>

<script>
import { postModel } from "../../Services/UserService.js";

export default {
  data() {
    return {
      model: {
        firstName: "",
        lastName: "",
        email: "",
        phoneNo: "",
        addresLine1: "",
        addresLine2: "",
        zip: "",
        city: "",
        country: "",
        birthDate: "",
        nationality: "",
        height: 0,
        shoeSize: 0,
        hairColor: "",
        eyeColor: "",
        comments: "",
        password: "",
      },
      response: "",
    };
  },
  methods: {
    async addModel() {
      const postSucceded = await postModel(this.model);
      if (postSucceded) {
        this.response = "Succesfully added model to database.";
        this.model = {
          firstName: "",
          lastName: "",
          email: "",
          phoneNo: "",
          addresLine1: "",
          addresLine2: "",
          zip: "",
          city: "",
          country: "",
          birthDate: "2021-12-06T11:28:49.006Z",
          nationality: "",
          height: 0,
          shoeSize: 0,
          hairColor: "",
          eyeColor: "",
          comments: "",
          password: "",
        };
      } else this.response = "Something went wrong";
    },
  },
};
</script>

<style>
</style>