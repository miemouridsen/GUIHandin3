<template>
  <label>Model:</label>
  <form @submit.prevent="RemoveModelFromJob">
    <select v-model="modelId">
      <option
        v-for="model in models"
        :key="model.efModelId"
        v-bind:value="model.efModelId"
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
import { getModels } from "../../Services/UserService.js";
import { getJob } from "../../Services/JobService.js";

export default {
  async created() {
    this.models = await getModels();
    if (this.models !== []) {
      this.modelId = this.models[0].efModelId;
      this.model = this.models[0];
      alert(JSON.stringify(this.model));
      this.jobs = this.model.jobModels;
      alert(JSON.stringify(this.jobs));
    }
  },
  data() {
    return {
      models: [],
      jobs: [],
      model: {},
      modelId: 0,
      jobId: 0,
    };
  },
  methods: {
    async changedModel() {
      this.jobs = await getJob(this.modelId);
    },
    async RemoveModelFromJob() {
        alert(this.modelId + " " + this.jobId);
    }
  },
};
</script>

<style>
</style>