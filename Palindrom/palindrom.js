const isPalindrom = (string) => {
  let counter = string.length - 1
  let newString = ''
  while (counter >= 0) {
    newString += string[counter]
    counter--
  }
  return string === newString
}
let str = 'malayala'
let hasil = isPalindrom(str)
console.log(hasil)
