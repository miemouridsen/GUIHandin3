<template>
    <table>
        <tr>
            <th>Customer</th>
            <th>Location</th>
            <th>Start Date</th>
            <th>Length</th>
            <th>Comments</th>
            <th>Models</th>
        </tr>
        <tr v-for="job in jobs" :key="job.efjobId">
            <td>{{job.customer}}</td>
            <td>{{job.location}}</td>
            <td>{{job.startDate}}</td>
            <td>{{job.days}}</td>
            <td>{{job.comments}}</td>
            <td>{{job.jobModels}}</td>
        </tr>
    </table>
</template>

<script>
import {getJobs} from "../../Services/JobService.js"

export default {
    async created() {
        this.jobs = await getJobs();
    },
    data() {
        return {
            jobs: []
        }
    }
}
</script>

<style scoped>
    table {
    width: 100%;
    overflow-x: auto;
    overflow-y: auto;
    }

    th {
    height: 50;
    background-color: #04AA6D;
    }

    td, th {
    text-align: left;
    padding: 20px;
    border-bottom: 1px solid #ddd;
    }

    tr:hover {
    background-color: grey;
    }
</style>