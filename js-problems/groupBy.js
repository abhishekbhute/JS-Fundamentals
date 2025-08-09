const arr = [{ name: 'orange', category: 'fruit' }, { name: 'apple', category: 'fruit' }, { name: 'venue', category: 'car' }, { name: 'brezza', category: 'car' }]

function groupBy(arr, key) {
    return arr.reduce((acc, obj) => {
        (acc[obj[key]] ||= []).push(obj)
        return acc
    }, {})
}
console.log(groupBy(arr, 'category'))


// Great question! ||= is a logical OR assignment operator introduced in ES2021 (ES12). It's a shorthand for this common pattern:

// ✅ Instead of writing:
// js
// Copy
// Edit
// if (!obj[key]) {
//   obj[key] = [];
// }
// Or:
// js
// Copy
// Edit
// obj[key] = obj[key] || [];
// You can now write:
// js
// Copy
// Edit
// obj[key] ||= [];