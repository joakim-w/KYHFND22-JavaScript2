<template>
  <!-- <div class="col"> -->
    <div class="card h-100">
      <img :src="imgURL" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title"> {{ title }} </h5>
        <p class="card-text">{{ body }}</p>
      </div>
    </div> 
  <!-- </div> -->
</template>

<script setup>
  // defineProps(['imgURL', 'title', 'body'])
  defineProps({
    title: {
      type: String,
      required: false,
      default: 'En rubrik'
    },
    body: {
      type: String,
      default: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam id perferendis dolores aspernatur harum nemo dolorem rem distinctio quisquam obcaecati pariatur consectetur nulla laborum dicta minus, ut ipsam ratione corporis.'
    },
    imgURL: {
      type: String,
      default: ''
    }
  })
</script>

<style scoped>

</style>