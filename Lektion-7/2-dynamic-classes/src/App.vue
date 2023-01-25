<template>
  <div class="container">
    <ExampleOne />
  </div>
</template>

<script setup>
import ExampleOne from './components/ExampleOne.vue';


</script>

<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
.container {
  width: 70%;
  margin: 3rem auto;
}
.green { color: green; }
.red { color: red; }
</style>