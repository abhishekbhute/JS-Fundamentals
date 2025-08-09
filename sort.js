let a = [43, 10, 25, 66]
// console.log(a.sort())

Array.prototype.mySort = function () {
    return mergeSort(this)

    function mergeSort(arr) {
        if (arr.length === 1) {
            return arr
        }

        let middle = Math.floor(arr.length / 2);
        let left = arr.slice(0, middle);
        let right = arr.slice(middle)
        console.log(left, right)

        return merge(
            mergeSort(left), mergeSort(right)
        )
    }

    function merge(left, right) {
        let result = []
        let leftIndex = 0
        let rightIndex = 0

        while (leftIndex < left.length && rightIndex < right.length) {
            if (left[leftIndex] < right[rightIndex]) {
                result.push(left[leftIndex])
                leftIndex++
            } else {
                result.push(right[rightIndex])
                rightIndex++
            }
        }
        return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex))
    }
}

console.log(a.mySort())