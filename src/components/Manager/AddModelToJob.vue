<template>
<h1>Here you can add model to a job.</h1>
  <form @submit.prevent="ModelToJob">
    <label>Model:</label>
    <select v-model="model">
      <option
        v-for="model in models"
        :key="model.efModelId"
        v-bind:value="model"
        :on-change="IsModelAlreadyInJob()"
      >
        {{ model.firstName }} {{ model.lastName }}
      </option>
    </select>
    <br />
    <br />

    <label>Job:</label>
    <select v-model="jobId">
      <option
        v-for="job in jobs"
        :key="job.efJobId"
        v-bind:value="job.efJobId"
        :on-change="IsModelAlreadyInJob()"
      >
        {{ job.customer }} - {{ job.location }}
      </option>
    </select>
    <br />
    <br />

    <button :disabled="isDisabled" type="submit">Add Model to Job</button>
    <br />
  </form>
  <p>{{ error }}</p>
</template>

<script>
import { getModels } from "../../Services/UserService.js";
import { getJob, getJobs, postModelToJob } from "../../Services/JobService.js";

export default {
  async created() {
    this.models = await getModels();
    if (this.models !== []) {
      this.model = this.models[0];
      this.jobs = await getJobs();
      if (this.jobs !== []) {
        this.jobId = this.jobs[0].efJobId;
      }
    }
  },
  data() {
    return {
      models: [],
      jobs: [],
      jobId: 0,
      model: {
        firstName: "",
        lastName: "",
        email: "",
        phoneNo: "",
      },
      error: "",
      isDisabled: false,
    };
  },
  methods: {
    async ModelToJob() {
      const isPosted = await postModelToJob(this.jobId, this.model.efModelId);
      if (isPosted) {
        this.error = "Model has been added to the job!";
        this.isDisabled = true;
      }
    },
    // Checks if a model is already on a job.
    // Gets the currently selected job and checks
    // if the currently selected user is on the job.
    // Is fire every time select elements are changed.
    async IsModelAlreadyInJob() {
      if (this.jobId !== 0) {
        const job = await getJob(this.jobId);
        let onJob = false;
        if (job !== null) {
          job.models.forEach((element) => {
            if (element.email === this.model.email) {
              onJob = true;
            }
          });
          if (onJob) {
            this.error = "Model is already on the job.";
            this.isDisabled = true;
          } else {
            this.error = "";
            this.isDisabled = false;
          }
        }
      }
    },
  },
};
</script>

<style>
</style>