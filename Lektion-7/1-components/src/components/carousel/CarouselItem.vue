<template>
  <div class="carousel-item active">
    <img :src="imgURL" class="d-block w-100" alt="...">
  </div>
</template>

<script setup>
  defineProps(['imgURL'])

</script>

<style scoped>

</style>