const sortedSquaredArray = (array) => {
    let start = 0;
    let end = array.length - 1;
    let squaredArray = [];

    while (start <= end) {
        if (Math.abs(array[start]) >= Math.abs(array[end])) {
            squaredArray.unshift(array[start] ** 2);
            start++
        } else {
            squaredArray.unshift(array[end] ** 2);
            end--
        }
    }

    return squaredArray;
}

console.log(sortedSquaredArray([1, 2, 3, 5, 6, 8, 9]))
console.log(sortedSquaredArray([-10, -5, 0, 5, 10]))