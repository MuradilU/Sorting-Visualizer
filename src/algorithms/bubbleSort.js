import { swap } from '../utils/mutators'

async function bubbleSort(array, speed, colorArray, colorMap) {
    var length = array.length
    for (var i = 0; i < length; i++) {
        for (var j = 0; j < length - i - 1; j++) {
            colorArray.splice(j, 1, colorMap.get("comparing"));
            if (array[j] > array[j+1]) {
                colorArray.splice(j+1, 1, colorMap.get("replacing"));
                await swap(array, j, j+1, speed);
                colorArray.splice(j, 1, colorMap.get("regular"));
            }
            colorArray.splice(j, 1, colorMap.get("regular"));
        }
        colorArray.splice(j, 1, colorMap.get("regular"));
    }

    return array;
}

export default bubbleSort;
