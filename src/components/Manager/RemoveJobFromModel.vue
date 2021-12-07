<template>
  <label>Model:</label>
  <form @submit.prevent="RemoveModelFromJob">
    <select v-model="model">
      <option
        v-for="model in models"
        :key="model.efModelId"
        v-bind:value="model"
        v-on:change="changedModel()"
      >
        {{ model.firstName }} {{ model.lastName }}
      </option>
    </select>
    <br />
    <br />

    <label>Job:</label>
    <select v-model="jobId">
      <option v-for="job in jobs" :key="job.efJobId" v-bind:value="job.efJobId">
        {{ job.customer }} - {{ job.location }}
      </option>
    </select>
    <br />
    <br />

    <button type="submit">Remove Model to Job</button> <br />
  </form>
</template>

<script>
import { getModels, getModel } from "../../Services/UserService.js";

export default {
  async created() {
    this.models = await getModels();
    if (this.models !== []) {
      this.model = await getModel(this.models[0].efModelId);
      //alert(JSON.stringify(this.model));
      this.jobs = this.model.jobModels;
      //alert(JSON.stringify(this.jobs));
    }
  },
  data() {
    return {
      models: [],
      jobs: [],
      model: {},
      jobId: 0,
    };
  },
  methods: {
    async changedModel() {
      this.jobs = await getModel(this.model.efModelId);
      alert(JSON.stringify(this.jobs));
    },
    async RemoveModelFromJob() {
        alert(this.model.efModelId + " " + this.jobId);
    }
  },
};
</script>

<style>
</style>