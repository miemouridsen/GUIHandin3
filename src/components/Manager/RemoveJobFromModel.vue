<template>
  <form @submit.prevent="RemoveModelFromJob">
    <label>Model:</label>
    <select v-model="model">
      <option
        v-for="model in models"
        :key="model.efModelId"
        v-bind:value="model"
      >
        {{ model.firstName }} {{ model.lastName }}
      </option>
    </select>
    <br />
    <br />

    <label>Job:</label>
    <select v-model="job">
      <option v-for="job in jobs" :key="job.jobId" v-bind:value="job">
        {{ job.customer }} - {{ job.location }}
      </option>
    </select>
    <br />
    <br />

    <button type="submit">Remove Model to Job</button> <br />
  </form>
  <p>{{message}}</p>
</template>

<script>
import { getJobsForModel, removeModelToJob } from "../../Services/JobService.js";
import { getModels } from "../../Services/UserService.js";

export default {
  async created() {
    this.models = await getModels();
    if (this.models !== []) {
      this.model = this.models[0];
    }
  },
  data() {
    return {
      models: [],
      jobs: [],
      model: {},
      job: {},
      message: ""
    };
  },
  watch: {
    model: async function () {
      if (this.model !== {}) {
        let modelJobs = await getJobsForModel(this.model.efModelId);
        this.jobs = modelJobs.jobs;
        if (this.jobs !== []) {
          this.job = this.jobs[0];
        }
      }
    },
  },
  methods: {
    async RemoveModelFromJob() {
      let succeded = await removeModelToJob(
        this.job.jobId,
        this.model.efModelId
      );
      if (succeded) {
        this.message = "Model succesfully removed from job."
        let modelJobs = await getJobsForModel(this.model.efModelId);
        this.jobs = modelJobs.jobs;
        if (this.jobs !== []) {
          this.job = this.jobs[0];
        }
      } else this.message = "Something went wrong."
    },
  },
};
</script>

<style>
</style>