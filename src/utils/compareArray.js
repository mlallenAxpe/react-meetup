export default function compareArray(arrayA, arrayB){
  if(arrayA === undefined || arrayB === undefined) return false
  if(arrayA.length !== arrayB.length) return false
  for(let i = 0; i < arrayA.length; i++) {
    if(arrayA[i] !== arrayB[i]) return false
  }
  return true
}