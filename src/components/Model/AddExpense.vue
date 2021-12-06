<template>
    <p>add expense</p>
    <button>Add New Expense</button>
</template>

<script>
import { addNewExpense } from "../../Services/ExpenseService.js";

export default {
    data() {
        return { 
            newExpense: {
                modelId: 0,
                jobId: 0,
                date: "2021-12-06T11:45:18.890Z",
                text: "",
                amount: 0,
            }
        }
    },
    methods: {
        async addExpense() {
            await addNewExpense(this.newExpense);
        },
        // async getModelsJobs() {
        //     await getJobs();
        // }
    }

}
</script>

<style>

</style>