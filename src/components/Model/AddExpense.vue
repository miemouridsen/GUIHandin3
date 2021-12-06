<template>
    <select>
        <option v-for="job in jobs" v-bind:key="job.efjobId">
            <p>{{job.customer}}</p>
        </option>   
    </select>

    <br>
    <form> 
        <label>Expense description</label>
        <input type="text" v-model="newExpense.text" required>
        <label>price for job</label>
        <input type="number" v-model="newExpense.amount" required>
        <label>date</label>
        <input type="date" v-model="newExpense.date" required>
    </form>

    <button v-on:click = "addExpense"> Add New Expense </button>
</template>

<script>
import { addNewExpense } from "../../Services/ExpenseService.js";
import {getJobs} from "../../Services/JobService.js"
import {getUser} from "../../Services/LoginService.js"
export default {
    async created() {
        this.jobs = await getJobs();
        this.newExpense.modelId = await getUser().modelId;
        },
    data() {
        return { 
            newExpense: {
                modelId: 0,
                jobId: 0,
                date: "2021-12-06T11:45:18.890Z",
                text: "",
                amount: 0,
            },
            jobs:[] 
        }
        
    },
    methods: {
        async addExpense() {
            await addNewExpense(this.newExpense);
        }
    }

}
</script>

<style>

</style>