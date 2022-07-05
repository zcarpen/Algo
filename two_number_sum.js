function twoNumberSum(array, targetSum) {
    const differences = {};
    array.forEach((num, idx) => {
      if (differences[targetSum - num] === undefined) {
        differences[targetSum - num] = idx
      }
    })
    for (let i = 0; i < array.length; i++) {
        debugger;
        if (differences[array[i]] && differences[array[i]] !== i) {
            return [array[differences[array[i]]], array[i]]
        }
    }    
  }