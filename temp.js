//LeftArr and rightArr are sorted!
const merge = (leftArr, rightArr) => {
  const output = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex <= leftArr.length && rightIndex <=
     rightArr.length) {
    const leftEl = leftArr[leftIndex];
    const rightEl = rightArr[rightIndex];

    if (leftEl <= rightEl) {
      output.push(leftEl);
      leftIndex++;
    } else {
      output.push(rightEl);
      rightIndex++;
    }
  }
  return [
    ...output,
    ...leftArr.slice(leftIndex),
    ...rightArr.slice(rightIndex),
  ];
};
console.log([3,6], [2, 4])
console.log(merge([29, 30], [8, 19]));

// recursion
// const mergeSort = (array) => {
//   return array;
// };

// const middleIndex = Math.floor(array.length / 2);
// const leftArr = array.slice(0, middleIndex);
// const rightArr = array.slice(middleIndex);

// return merge(mergeSort(leftArr), mergeSort(rightArr));

// mergeSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]);

// //[1, 4, 2, 8, 345]

//[1, 4, 2] [8, 345]

// [1] [4] [2] [8] [345]

// [1, 4] [2, 8] [345]

// [1, 2, 4, 8] [345]

// [1, 2, 4, 8, 345]
