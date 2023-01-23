<template>
  <Header />

  <div class="container">
    <AddForm />
    <TodoList />
  </div>

</template>

<script setup>
import Header from './components/Header.vue'
import AddForm from './components/AddForm.vue'
import TodoList from './components/TodoList.vue'


</script>

<div>
  
</div>
  
  <style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.container {
  width: 80%;
  margin: 0 auto;
}
</style>






<!-- <div class="container">
  <p>nummer: {{ counter }}</p>
  <p>{{ text }}</p>

  <button @click="counter ++" >+</button>
  <button @click="decrement(5)">-</button>
</div> -->



<!-- <script>
import Header from './components/Header.vue'
  export default {
    components: { Header },

    data() {
      return {
        counter: 0,
        text: '<img src="" onerror="alert("haha")" />'
      }
    },

    methods: {
      decrement(value) {
        this.counter -= value
      }
    }
  }
</script> -->