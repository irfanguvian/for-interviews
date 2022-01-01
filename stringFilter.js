const filter = /[<>%\$?#]/g // avoid spesial character
const filter2 = /[a-zA-Z0-9\s]/g //alphanumeric
let str = 's#yasi #gak >??gitu'
let hasil = str
  .replace(filter, '')
  .split(' ')
  .map((item, index) => {
    let hasil = item[0].toUpperCase()
    item = item.split('')
    item.shift()
    return (hasil += item.join(''))
  })

let hasil2 = str.replace(filter2, '')
console.log(hasil2)
