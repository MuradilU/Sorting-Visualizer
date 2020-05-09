export function replace(array, index, value) {
    return new Promise(resolve => {
        setTimeout(() => {
            array.splice(index, 1, value);
            resolve(array);
        }, 1)
    });
}

export function swap(array, left, right) {
    return new Promise(resolve => {
        setTimeout(() => {
            var temp = array[left];
            array.splice(left, 1, array[right]);
            array.splice(right, 1, temp);
            resolve(array);
        }, 1)
    });
}
