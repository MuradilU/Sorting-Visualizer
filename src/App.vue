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
body {
  margin: 0;  
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  justify-content: center;
}
button {
  display: inline-block;
  padding: 0.6em 0.8em;
  background: transparent;
  color: #fff;
  font-family: sans-serif;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  text-align: center;
  transition: 0.3s;
}
button:hover {
  background: #FF69B4;
  border-color: #FF69B4;
}
button:disabled {
  border: 1px solid #ff3333;
  background-color: #ff3333;
}
.visualizer-container {
  margin: 5em auto;
  display: flex;
  align-items: flex-end;
  justify-content: center;
}
.bar {
  display: inline-block;
}
.nav {
  display: flex;
  flex-wrap: wrap;
  min-height: 70px;
  padding: 5px;
  padding: 0 2em;
  align-items: center;
  background-color: #1ccfa6;
}
.controls {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin: 1em 0;
}
.controls > * {
  min-width: calc(33% - (30rem * 2));
  max-width: 100%;
  flex-grow: 1;
  flex-basis: calc( calc(30rem - 100%) * 999);
}
.sort-checkbox {
  display: none;
}
.sort-label {
  padding: 0.6em 0.8em;
  cursor: pointer;
  color: #D3D3D3;
  font-size: 16px;
  font-weight: bold;
  transition: 0.3s;
}
.sort-label:hover {
  color: #fff;
}
.sort-checkbox:checked + .sort-label {
  color: #fff;
}
.sort-algs {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}
.sort-algs > * {
  min-width: calc(33% - (25rem * 2));
  max-width: 100%;
  flex-grow: 1;
  flex-basis: calc( calc(25rem - 100%) * 999);
}
.slider-container {
  min-width: 20%;
}
.slider {
  -webkit-appearance: none;
  width: 100%;
  border-radius: 1em;
  height: 20px;
  background: #d3d3d3;
  outline: none;
  opacity: 0.7;
  -webkit-transition: .3s;
  transition: opacity .3s;
}
.slider:hover {
  opacity: 1;
}
.slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background: #686868;
  cursor: pointer;
}
.slider::-moz-range-thumb {
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background: #686868;
  cursor: pointer;
}
.slider-label {
  margin: 0 0.5em 0 1.2em;
  color: #D3D3D3;
  font-size: 1em;
  font-weight: bold;
}
.sort {
  border: 1px solid #fff;
  border-radius: 5px;
}
.reset {
  margin: 0em 1.5em;
  border: none;
  border-radius: 5px;
}
</style>
