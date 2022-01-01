arr = [1, 2, 5, 43, 7, 9, 4]
for (i = 0; i < arr.length; i++) {
  for (j = 0; j < arr.length; j++) {
    if (arr[j] > arr[j + 1]) {
      temp = arr[j + 1]
      arr[j + 1] = arr[j]
      arr[j] = temp
    }
  }
}

console.log(arr)
