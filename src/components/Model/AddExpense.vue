<template>
    <select v-model="newExpense.jobId">
        <option v-for="job in jobs" v-bind:value="job.efJobId" v-bind:key="job.efJobId">
            <p>{{ job.customer }}</p>
        </option>   
    </select>

    <form @submit.prevent="addExpense"> 
        <label>Expense Description</label>
        <input type="text" v-model="newExpense.text" required/>
        <label>Price of Expense</label>
        <input type="number" v-model="newExpense.amount" required/>
        <label>Date</label>
        <input type="date" v-model="newExpense.date" required/>
        <input type="submit" value="Add New Expense"/>
    </form>
</template>

<script>
import { addNewExpense } from "../../Services/ExpenseService.js";
import { getJobs } from "../../Services/JobService.js"
import { getUser } from "../../Services/LoginService.js"

export default {
    async created() {
        this.jobs = await getJobs();
        var user = await getUser();
        this.newExpense.modelId = parseInt(user.ModelId);
        },
    data() {
        return { 
            newExpense: {
                modelId: 0,
                jobId: 0,
                date: "",
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