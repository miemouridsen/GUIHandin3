<template>
  <router-view></router-view>
</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

*, *:before, *:after {
  box-sizing: border-box;
}

body {
  max-width: 1000px;
  margin: auto;
}

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
