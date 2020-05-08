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

function swap(array, left, right) {
    return new Promise(resolve => {
        setTimeout(() => {
            var temp = array[left];
            array.splice(left, 1, array[right]);
            array.splice(right, 1, temp);
            resolve(array);
        }, 1)
    });
}

export default bubbleSort;
