<template>
  <div>
      <h1>Sorting Visualizer</h1>
      <input type="radio" id="bubble" name="sortAlgorithm" value="bubble" v-model="sortAlgorithm">
      <label for="bubble">Bubble Sort</label>
      <input type="radio" id="merge" name="sortAlgorithm" value="merge" v-model="sortAlgorithm">
      <label for="merge">Merge Sort</label><br>
      <label for="length">Array Length</label><br>
      <input type="range" id="length" min="5" max="200" v-model="arrayLength"><br>
      <button @click="sort">Sort</button><br>
      <!-- <span>{{ array }}</span><br> -->
      <div
        class="visualizer-container"
        :style="{
          height: containerHeight + 'px',
          width: containerWidth + 'px'
        }">
          <div 
            v-for="(height, i) in array"
            :key=i
            class="bar"
            :style="{ 
                height: (height * heightScale) + 'px',
                width: barWidth + 'px',
                marginLeft: margin + 'px',
                marginRight: margin + 'px'
            }">
                <span v-if="array.length <= 20">{{ height }}</span>
            </div>
      </div>
  </div>
</template>

<script>
import bubbleSort from '../algorithms/bubbleSort'
import mergeSort from '../algorithms/mergeSort'

export default {
    name: 'SortingVisualizer',
    data: function() {
        return {
            sortAlgorithm: 'bubble',
            array: Array,
            containerHeight: 400,
            containerWidth: 800,
            heightScale: Number,
            barWidth: Number,
            arrayLength: 20,
            margin: Number
        }
    },
    mounted: function() {
        this.initVisualizer()
    },
    methods: {
        initVisualizer: function() {
            this.array = [...Array(this.arrayLength)].map(() => Math.floor(Math.random() * this.arrayLength));
            var max = Math.max(...this.array);
            this.heightScale = this.containerHeight / max;
            this.barWidth = this.containerWidth / this.array.length;
            this.margin = (this.barWidth * 0.15) / 2;
        },
        sort: async function() {
            switch(this.sortAlgorithm) {
                case 'bubble':
                    await bubbleSort(this.array);
                    break;
                case 'merge':
                    await mergeSort(this.array, 0, this.array.length - 1);
                    break;
            }
        }
    },
    watch: {
        arrayLength: function(newLength) {
            this.arrayLength = parseInt(newLength);
            this.initVisualizer();
        }
    }
}
</script>

<style>

</style>