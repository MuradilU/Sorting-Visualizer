import { replace } from '../utils/mutators'

async function mergeSort(array, left, right) {
    if (right > left) {
        let mid = Math.floor((left + right) / 2);
        await mergeSort(array, left, mid);
        await mergeSort(array, mid + 1, right);

        await merge(array, left, mid, right);
    }
}

async function merge(array, left, mid, right) {
    let leftArray = array.slice(left, mid + 1),
        rightArray = array.slice(mid + 1, right + 1),
        origIndex = left;

    while (leftArray.length && rightArray.length) {
        if (leftArray[0] >= rightArray[0]) {
            await replace(array, origIndex, rightArray.shift());
            origIndex++;
        }
        else {
            await replace(array, origIndex, leftArray.shift());
            origIndex++;
        }
    }

    await replaceSubArray(array, origIndex, leftArray.length ? leftArray : rightArray);
}

async function replaceSubArray(array, start, subArray) {
    while(subArray.length) {
        await replace(array, start, subArray.shift());
        start++;
    }
}

export default mergeSort;
