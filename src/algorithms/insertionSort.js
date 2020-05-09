import { replace } from '../utils/mutators'

async function insertionSort(array) {
    let value, sortedIndex, locToInsert;
    for (let i = 1; i < array.length; i++) {
        value = array[i];
        sortedIndex = i - 1;
        locToInsert = linearSearch(array, value, 0, sortedIndex);

        while (sortedIndex >= locToInsert) {
            await replace(array, sortedIndex + 1, array[sortedIndex]);
            sortedIndex--;
        }
        await replace(array, locToInsert, value);
    }
}

function linearSearch(array, value, left, right) {
    if (value < array[left])
        return left;
    if (left == right)
        return array[left] >= value ? left : left + 1;
    if (value >= array[left] && value < array[left + 1])
        return left + 1;
    
    return linearSearch(array, value, left + 1, right);
}

export default insertionSort;