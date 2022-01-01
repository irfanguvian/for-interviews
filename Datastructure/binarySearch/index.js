let binarySearch = (arr, value) => {
  length = arr.length
  middle = Math.floor(length / 2)

  while (length - 1 > middle) {
    if (value === arr[middle]) {
      return middle + 1
    } else if (value < arr[middle]) {
      middle -= Math.floor((length - middle) / 2)
    } else {
      middle += Math.floor((length - middle) / 2)
    }
  }
}

test_list = [1, 3, 9, 11, 15, 19, 29, 30, 45, 60, 120, 130, 150, 1000]
test_val1 = 150
test_val2 = 15
console.log(binarySearch(test_list, test_val1))
console.log(binarySearch(test_list, test_val2))
