function isSorted(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i - 1] > arr[i]) {
      return false
    }
  }
  return true
}
console.log(isSorted([]))
console.log(isSorted([-Infinity, -5, 0, 3, 9]))
console.log(isSorted([3, 9, -3, 10]))
