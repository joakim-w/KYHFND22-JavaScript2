<template>
  <div class="row row-cols-1 row-cols-md-3 g-4">
  <div class="col">
    <Card title="card 1" body="hej ehje hjalks fjlkasjf jkldsak" imgURL="https://images.unsplash.com/photo-1674504502895-3ac04ab2943e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" />
  </div>
  <div class="col">
    <Card imgURL="" title=" kort 2" body="blaha blaha tjoho det står nätt kul här" />
  </div>
  <div class="col">
    <Card class="bg-dark" />
  </div>

  </div>
</template>

<script setup>
import Card from './Card.vue';
</script>

<style scoped>

</style>