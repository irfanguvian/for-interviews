const isPalindrom = (str) => {
  return str.split('').reverse().join('') === str
}

const longestPalindrom = (string) => {
  let longest = ''
  for (let i = 0; i < string.length; i++) {
    temp = string[i]
    for (let j = i + 1; j < string.length; j++) {
      temp += string[j]
      if (isPalindrom(temp)) {
        if (longest.length < temp.length) {
          longest = temp
        }
      }
    }
  }
  return longest
}

let string = 'maammasu'

console.log(longestPalindrom(string))
