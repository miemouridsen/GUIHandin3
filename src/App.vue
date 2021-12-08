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

/* Navbar navigation styling from https://www.w3schools.com/howto/howto_css_responsive_form.asp */

/* Style inputs, select elements and textareas */
input,
select,
textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  resize: vertical;
}

input:invalid {
  border-bottom-color: red;
}

/* Style the label to display next to the inputs */
label {
  padding: 12px 12px 12px 0;
  display: inline-block;
}

/* Style the submit button */
button[type="submit"] {
  background-color: #04aa6d;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin: 1rem;
}

button:disabled {
  opacity: 30%;
}

/* Style the container */
.login {
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
}

</style>
