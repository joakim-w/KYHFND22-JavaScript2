<template>
  <div>
    <Navbar />
    <Carousel />
    <div class="container my-5">
      <CardDeck />
    </div>
    <Footer />
  </div>
</template>

<script setup>
import Navbar from './components/navigation/Navbar.vue';
import Carousel from './components/carousel/Carousel.vue'
import CardDeck from './components/cards/CardDeck.vue';
import Footer from './components/navigation/Footer.vue'
</script>

<style scoped>

</style>