<template>
  <div>
      <h1>Sorting Visualizer</h1>
      <div v-for="(algorithm, i) in algorithms" :key="i">
          <input type="radio" :id="algorithm.id" name="sortAlgorithm" :value="algorithm.id" v-model="sortAlgorithm">
          <label :for="algorithm.id">{{ algorithm.name }}</label>
      </div>
      <label for="length">Array Length</label><br>
      <input type="range" id="length" min="5" max="200" v-model="arrayLength"><br>
      <button @click="sort">Sort</button><br>
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
                marginRight: margin + 'px',
                backgroundColor: colorArray[i]
            }">
                <span v-if="array.length <= 20">{{ height }}</span>
            </div>
      </div>
  </div>
</template>

<script>
import bubbleSort from '../algorithms/bubbleSort'
import mergeSort from '../algorithms/mergeSort'
import insertionSort from '../algorithms/insertionSort'
import binaryInsertionSort from '../algorithms/binaryInsertionSort'

export default {
    name: 'SortingVisualizer',
    data: function() {
        return {
            sortAlgorithm: 'bubble',
            algorithms: [
                { id: 'bubble', name: 'Bubble Sort' },
                { id: 'merge', name: 'Merge Sort' },
                { id: 'insertion', name: 'Insertion Sort' },
                { id: 'binary', name: 'Binary Insertion Sort' }
            ],
            array: Array,
            colorArray: Array,
            containerHeight: 400,
            containerWidth: 800,
            heightScale: Number,
            barWidth: Number,
            arrayLength: 20,
            margin: Number,
            colorMap: new Map([
                ['comparing', '#80FF72'],
                ['replacing', '#E63946'],
                ['regular', '#58e4f3']
            ])
        }
    },
    mounted: function() {
        this.initVisualizer()
    },
    methods: {
        initVisualizer: function() {
            this.array = [...Array(this.arrayLength)].map(() => Math.ceil(Math.random() * this.arrayLength));
            this.colorArray = [...Array(this.arrayLength)].map(() => this.colorMap.get('regular'));
            // this.array = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
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
                case 'insertion':
                    await insertionSort(this.array);
                    break;
                case 'binary':
                    await binaryInsertionSort(this.array);
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