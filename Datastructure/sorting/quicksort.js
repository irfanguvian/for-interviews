const quicksort = (arr) => {
  qs(arr, 0, arr.length - 1)
  return arr
}

const qs = (arr, l, r) => {
  if (l >= r) {
    return
  }

  pivot = pivotIndex(arr, l, r)
  qs(arr, l, pivot - 1)
  qs(arr, pivot + 1, r)
}

const pivotIndex = (arr, l, r) => {
  pivot = arr[r]
  i = l - 1
  for (j = l; j < r; j++) {
    if (arr[j] < pivot) {
      i += 1
      temp = arr[i]
      arr[i] = arr[j]
      arr[j] = temp
    }
  }
  temp = arr[i + 1]
  arr[i + 1] = arr[r]
  arr[r] = temp
  return i + 1
}

test = [21, 4, 1, 3, 9, 20, 25, 6, 21, 14]
console.log(quicksort(test))
