function getMaxSubSum(arr) {
    let max = Number.NEGATIVE_INFINITY;
    let sum = Number.NEGATIVE_INFINITY;
    let l = 0;

    while (l < arr.length) {
        sum += arr[l]
        max = Math.max(max, sum)
        l++
        if (sum < 0) {
            sum = 0
        }

    }
    return max
}
console.log(getMaxSubSum([2, -1, 2, 3, -9]))