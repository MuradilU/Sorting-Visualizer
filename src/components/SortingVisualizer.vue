<template>
  <div>
      <div class="nav">
        <!-- <span class="title">Sorting Visualizer</span> -->
        <div class="sort-alg" v-for="(algorithm, i) in algorithms" :key="i">
            <input class="sort-checkbox" type="radio" :id="algorithm.id" name="sortAlgorithm" :value="algorithm.id" v-model="sortAlgorithm">
            <label class="sort-label" :for="algorithm.id">{{ algorithm.name }}</label>
        </div>
        <span class="slider-label">Length:</span>
        <div class="slider-container">
            <input class="slider" type="range" id="length" min="5" max="200" v-model="arrayLength">
        </div>
        <span class="slider-label">Speed:</span>
        <div class="slider-container">
            <input class="slider" type="range" id="speed" min="1" max="1000" v-model="speedSlider">
        </div>
        <button class="reset" @click="initVisualizer">Reset</button>
        <button class="sort" @click="sort" :disabled="sorting">Sort</button>
      </div>
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
            sorting: false,
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
            speedSlider: 200,
            sortSpeed: 800,
            margin: Number,
            colorMap: new Map([
                ['comparing', '#80FF72'],
                ['replacing', '#E63946'],
                ['searching', '#0099ff'],
                ['regular', '#ff99cc']
            ])
        }
    },
    mounted: function() {
        this.initVisualizer()
    },
    methods: {
        initVisualizer: function() {
            this.sorting = false;

            // Init random array
            this.array = [...Array(this.arrayLength)].map(() => Math.ceil(Math.random() * this.arrayLength));
            this.colorArray = [...Array(this.arrayLength)].map(() => this.colorMap.get('regular'));

            // Scale the bar width and height using the current array length
            var max = Math.max(...this.array);
            this.heightScale = this.containerHeight / max;
            this.barWidth = this.containerWidth / this.array.length;
            this.margin = (this.barWidth * 0.15) / 2;
        },
        sort: async function() {
            this.sorting = true;
            console.log("Before algo", this.sortSpeed);
            switch(this.sortAlgorithm) {
                case 'bubble':
                    await bubbleSort(this.array, this.sortSpeed, this.colorArray, this.colorMap);
                    break;
                case 'merge':
                    // console.log(this.sortSpeed);
                    await mergeSort(this.array, 0, this.array.length - 1, this.sortSpeed);
                    break;
                case 'insertion':
                    await insertionSort(this.array, this.sortSpeed);
                    break;
                case 'binary':
                    await binaryInsertionSort(this.array, this.sortSpeed);
                    break;
            }
            this.sorting = false
        }
    },
    watch: {
        arrayLength: function(newLength) {
            this.arrayLength = parseInt(newLength);
            this.initVisualizer();
        },
        speedSlider: function(newSpeed) {
            this.sortSpeed = 1000 - parseInt(newSpeed);
        }
    }
}
</script>

<style>

</style>