const array = [1, 2, 3, 4, 5, 7, 8, 9, 10] //Assuming there are 1 to 100 integers
let missing = []
let reference = 1
for (let num of array) {
  if (num !== reference) {
    missing.push(reference)
  }
  reference = reference + 1
}
console.log(missing)
