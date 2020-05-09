import { replace } from '../utils/mutators'

async function binaryInsertionSort(array) {
    let value, sortedIndex, locToInsert;
    for (let i = 1; i < array.length; i++) {
        value = array[i];
        sortedIndex = i - 1;
        locToInsert = binarySearch(array, value, 0, sortedIndex);

        while (sortedIndex >= locToInsert) {
            await replace(array, sortedIndex + 1, array[sortedIndex]);
            sortedIndex--;
        }
        await replace(array, locToInsert, value);
    }
}

function binarySearch(array, value, left, right) {
    let mid = Math.floor((left + right) / 2);

    if (value == array[mid])
        return mid + 1;

    if (left >= right)
        return array[left] >= value ? left : left + 1;

    if (value < array[mid]) {
        return binarySearch(array, value, left, mid - 1);
    }
    else {
        return binarySearch(array, value, mid + 1, right);
    }
}

export default binaryInsertionSort;
