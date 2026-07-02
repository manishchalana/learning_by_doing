"use strict";

function merge(arr, start, mid, end) {
  let tempArr = [];
  let i = start;
  let j = mid + 1;

  // Create the sorted temp array by comparing elements from left and right halves of the array
  while (i <= mid && j <= end) {
    if (arr[i] <= arr[j]) {
      tempArr.push(arr[i]);
      i++;
    } else {
      tempArr.push(arr[j]);
      j++;
    }
  }

  // Add remaining elements from left half into the temp array
  while (i <= mid) {
    tempArr.push(arr[i]);
    i++;
  }

  // Add remaining elements from right half into the temp array
  while (j <= end) {
    tempArr.push(arr[j]);
    j++;
  }

  // Copy the elements from temp array into the original array
  for (let k = start; k <= end; k++) {
    arr[k] = tempArr[k - start];
  }
}
function mergeSort(arr, start, end) {
  // If start is greater than end, it is an invalid input. so nothing to do in that case
  // If start is equal to end, it means there is only one element in the array, so nothing to do in that case
  if (start >= end) return;
  let mid = Math.floor(start + (end - start) / 2);

  // Sort the first half and second half of the array and then merge them together
  mergeSort(arr, start, mid);
  mergeSort(arr, mid + 1, end);
  merge(arr, start, mid, end);
}
const arrList = [
  [1],
  [2, 1],
  [2, 54, 37, 18, 5],
  [2, 2, 3],
  [],
  [5, 67, 8, -1, 6, 5],
];

for (let arrI = 0; arrI < arrList.length; arrI++) {
  let arr = arrList[arrI];
  mergeSort(arr, 0, arr.length - 1);
  console.log(arr);
}
