<template>
    <form @submit.prevent="ModelToJob">

        <label>Model:</label>
        <select v-model="modelId">
            <option v-for="model in models" :key="model.efModelId" v-bind:value="model.efModelId">{{model.firstName}} {{model.lastName}}</option>
        </select> <br /> <br />
        
        <label>Job:</label>
        <select v-model="jobId">
            <option v-for="job in jobs" :key="job.efjobId" v-bind:value="job.efJobId">{{job.customer}} - {{job.location}}</option>
        </select> <br /> <br />
        
        <button type="submit"> Add Model to Job </button> <br />
    </form>
</template>

<script>
import { getModels } from "../../Services/UserService.js";
import { getJobs, postModelToJob } from "../../Services/JobService.js"

export default {
    async created() {
        this.models = await getModels();
        this.jobs = await getJobs();
    }, data() {
        return {
            models: [],
            jobs: [],
            jobId: 0,
            modelId: 0,
        }
    }, methods: {
        async ModelToJob() {
            alert(this.modelId + " " + this.jobId);
            postModelToJob(this.jobId, this.modelId);
        }
    }
}
</script>

<style>

</style>