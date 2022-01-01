const mergeArray = (a, b) => {
  const c = []
  while (a.length && b.length) {
    c.push(a[0] > b[0] ? b.shift() : a.shift())
  }

  while (a.length) {
    c.push(a.shift())
  }
  while (b.length) {
    c.push(b.shift())
  }

  return c
}

const mergeSort = (arr) => {
  if (arr.length < 2) return arr
  const middle = Math.floor(arr.length / 2)
  const arrLeft = arr.slice(0, middle)
  const arrRight = arr.slice(middle, arr.length)
  const sort_l = mergeSort(arrLeft)
  const sort_r = mergeSort(arrRight)
  return mergeArray(sort_l, sort_r)
}

arr = [1, 5, 6, 2, 39, 8]
console.log(mergeSort(arr))
