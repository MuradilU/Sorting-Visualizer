import { swap } from '../utils/mutators'

async function bubbleSort(array) {
    var length = array.length
    for (var i = 0; i < length; i++) {
        for (var j = 0; j < length - i - 1; j++) {
            if (array[j] > array[j+1]) {
                await swap(array, j, j+1);
            }
        }
    }

    return array;
}

export default bubbleSort;
