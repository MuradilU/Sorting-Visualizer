import { replace } from '../utils/mutators'

async function mergeSort(array, left, right, speed) {
    if (right > left) {
        let mid = Math.floor((left + right) / 2);
        await mergeSort(array, left, mid);
        await mergeSort(array, mid + 1, right);

        await merge(array, left, mid, right, speed);
    }
}

async function merge(array, left, mid, right, speed) {
    let leftArray = array.slice(left, mid + 1),
        rightArray = array.slice(mid + 1, right + 1),
        origIndex = left;

    while (leftArray.length && rightArray.length) {
        if (leftArray[0] >= rightArray[0]) {
            await replace(array, origIndex, rightArray.shift(), speed);
            origIndex++;
        }
        else {
            await replace(array, origIndex, leftArray.shift(), speed);
            origIndex++;
        }
    }

    await replaceSubArray(array, origIndex, leftArray.length ? leftArray : rightArray, speed);
}

async function replaceSubArray(array, start, subArray, speed) {
    while(subArray.length) {
        await replace(array, start, subArray.shift(), speed);
        start++;
    }
}

export default mergeSort;
