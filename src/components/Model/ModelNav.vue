<template>
    <div class="navbar">
        <router-link to="/model/addExpense">Add New Expense</router-link>
        <router-link to="/model/seeJobs">See Jobs</router-link>
    </div>
    <br />
    <br />
    <br />
    <router-view></router-view>
</template>

<script>
export default {
    setup() {
        
    },
}
</script>