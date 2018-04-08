function findUniq(arr) {
  // do magic
//   sort the array passed in
var sort = arr.sort();
// loop through checking if the integer at the current position matches the next

if (sort[0] === sort[1]) {
// remove repeats, leaving only the stray
  return sort[sort.length-1]
}  else {
  return sort[0]

}
}
