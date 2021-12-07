<template>
  <div class="addNewJob">
    <h1>Add a new job to Big Bad Wolf Modelling Agency!</h1>
    <form @submit.prevent="addNewJob">
      <label>Customer:</label> <br />
      <input type="text" v-model="newJob.customer" required />
      <br />
      <label>Start Date:</label> <br />
      <input type="date" v-model="newJob.startDate" required />
      <br />
      <label>Length:</label> <br />
      <input type="number" v-model="newJob.days" required />
      <br />
      <label>Location:</label> <br />
      <input type="text" v-model="newJob.location" required />
      <br />
      <label>Comment:</label> <br />
      <input type="text" v-model="newJob.comments" />
      <br />
      <button type="submit">Add new job to database</button> <br />
    </form>
  </div>
</template>

<script>
import { postJob } from '../../Services/JobService';

export default {
  data() {
    return {
      newJob: {
        customer: "",
        startDate: "",
        days: 0,
        location: "",
        comments: "",
        models: [],
      },
    };
  }, methods: {
      async addNewJob() {
          await postJob(this.newJob);
      }
  }
};
</script>

<style>
</style>