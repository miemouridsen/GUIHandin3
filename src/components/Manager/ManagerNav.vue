<template>
    <div>
    <router-link to="/manager/addModel">Add a new model</router-link>
    </div>
    <div>
    <router-link to="/manager/seeJobs">See all jobs</router-link>
    </div>
    <div>
        <router-link to="/manager/addManager">Add new manager</router-link>
    </div>
    <router-view></router-view>
</template>

<script>
export default {
    setup() {
        
    }, data() {
        
    }, methods: {

    }
}
</script>

<style scoped>

</style>