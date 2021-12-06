<template>
  <div class="navbar">
    <router-link to="/manager/addModel">Add a new model</router-link>
    <router-link to="/manager/seeJobs">See all jobs</router-link>
    <router-link to="/manager/addModelToJob">Add model to job</router-link>
    <router-link to="/manager/addManager">Add new manager</router-link>
  </div> <br /> <br /> <br />
  <router-view></router-view>
</template>

<script>
export default {
  setup() {},
  data() {},
  methods: {},
};
</script>

<style scoped>
/* Navbar navigation styling from w3schools.com */

/* Add a black background color to the top navigation */
.navbar {
  overflow: hidden;
  width: 10rem;
  display: inline;
}

.navbar:after {
  clear: both;
}

.navbar ul {
  list-style-type: none;
  display: inline;
}

/* Style the links inside the navigation bar */
.navbar a {
  float: left;
  color: black;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 1.1rem;
  display: inline;
}

/* Change the color of links on hover */
.navbar a:hover {
  background-color: #04aa6d;
  color: black;
}
</style>