<template>
  <div id="app">
    <SortingVisualizer/>
  </div>
</template>

<script>
import SortingVisualizer from './components/SortingVisualizer.vue'

export default {
  name: 'App',
  components: {
    SortingVisualizer
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
  justify-content: center;
}
.visualizer-container {
  margin: 0 auto;
  display: flex;
  align-items: flex-end;
  border: 2px solid grey;
}
.bar {
  display: inline-block;
  background-color: coral;
}
</style>
