function mergeSort(inputList) {
  const { length } = inputList
  // Base case for recursion (infinite loop without this!)
  if (length <= 1) return inputList

  console.log(`mergeSort called with a list of length ${length}: ${inputList}`)

  const middleIndex = Math.floor(length / 2)
  let left = inputList.slice(0, middleIndex)
  let right = inputList.slice(middleIndex, length)

  return merge(mergeSort(left), mergeSort(right))
}

function merge(left, right) {
  console.log(`Merging two lists of length ${left.length} and ${right.length}`)
  
  return [...left, ...right]
}

// Implement a merge sort for a list of integers. Your solution must run in O(n*logn) time for a list of length n.

// Input: unsorted list of integer values, e.g., [1, 9, -32, 4]
// Output: sorted list of integer values, e.g., [-32, 1, 4, 9]

// The starter code contains the scaffolding for a working merge sort algorithm. It recursively divides
// the list then puts it back together, but all of the sorting-specific logic is missing.

// Test cases:
const unsortedList = [1, 97, 36, -4, 0, 124, 3000]
console.log(mergeSort(unsortedList)) // -4, 0, 1, 36, 97, 124, 3000
