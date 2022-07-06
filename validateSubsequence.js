const isValidSubsequence = (arr1, arr2) => {
    let subIdx = 0;
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] === arr2[subIdx]) {
            if (subIdx === arr2.length - 1) {
                return true
            }
            subIdx++
        }
    }
    return false;
}

console.log(isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [5, 1, 22, 25, 6, -1, 8, 10]))