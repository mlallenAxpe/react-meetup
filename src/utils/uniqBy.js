export default function uniqBy(array) {
  let arr = []
  array.forEach(value => {
    if(!arr.includes(value)) arr.push(value)
  })
  return arr
}