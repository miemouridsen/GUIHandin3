<template>
    <p v-for="job in jobs" :key="job.efjobId"> {{job.location}}</p>
</template>

<script>
import {getJobs} from "../../Services/JobService.js"

export default {
    data() {
        return {
            Jobs: getJobs()
        }
    }
}
</script>

<style>

</style>