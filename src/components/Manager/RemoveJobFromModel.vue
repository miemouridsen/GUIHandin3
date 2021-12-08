<template>
  <form @submit.prevent="RemoveModelFromJob">
    <label>Job:</label>
    <select v-model="job" :on-change="changedModel()">
      <option
        v-for="job in jobs"
        :key="job.efJobId"
        v-bind:value="job"
      >
        {{ job.customer }} - {{ job.location }}
      </option>
    </select>
    <br />
    <br />

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

    <button type="submit">Remove Model to Job</button> <br />
  </form>
</template>

<script>
import { getJob, getJobs } from "../../Services/JobService.js";
import { getModels } from "../../Services/UserService.js";

export default {
  async created() {
    this.jobs = await getJobs();
    if (this.jobs !== []) {
      this.job = this.jobs[0];
      this.allModels = await getModels();
    }
  },
  data() {
    return {
      allModels: [],
      models: [],
      jobs: [],
      model: {},
      job: {},
    };
  },
  methods: {
    async RemoveModelFromJob() {
      await this.RemoveModelFromJob(this.job.efJobId, this.model.efModelId);
    },
    async changedModel() {
      if (this.job !== {}) {
        let tempModels = [];
        let tempAllModels = this.allModels;
        let job = await getJob(this.job.efJobId);
        job.models.forEach((jobElement) => {
          tempAllModels.forEach((modelElement) => {
            if (jobElement.email === modelElement.email) {
              tempModels.push(modelElement);
            }
          });
        });
        this.models = tempModels;
      }
    },
  },
};
</script>

<style>
</style>