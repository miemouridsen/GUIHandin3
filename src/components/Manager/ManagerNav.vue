<template>
  <div class="navbar">
    <router-link to="/manager/addModel">Add a new model</router-link>
    <router-link to="/manager/seeJobs">See all jobs</router-link>
    <router-link to="/manager/addJob">Add new job</router-link>
    <router-link to="/manager/addModelToJob">Add model to job</router-link>
    <router-link to="/manager/removeModelFromJob">Remove model from job</router-link>
    <router-link to="/manager/addManager">Add new manager</router-link>
  </div> <br /> <br /> <br />
  <router-view></router-view>
</template>

<script>
export default {
};
</script>

<style scoped>

</style>