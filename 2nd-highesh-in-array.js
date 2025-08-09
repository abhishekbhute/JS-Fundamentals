const arr = [2, 3, 6, 8, 4, 1, 4, 8, 9];

function secondLargest(ar) {
    let distinct = [...new Set(ar)]
    if (distinct.length < 2) {
        return 'null'
    }

    distinct.sort((a, b) => b - a)

    return distinct[1]
}

function second() {
    let first = -Infinity;
    let second = -Infinity;
    for (const num of arr) {
        if (num > first) {
            second = first
            first = num
        } else if (num > second && num < first) {
            second = num
        }
    }
    return second
}
console.log(secondLargest(arr))
console.log(second())