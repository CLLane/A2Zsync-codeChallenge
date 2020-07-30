//Setting up the logic problem
const randomArray = (max, length) => randomNumbers = Array.from({ length }, () => Math.floor(Math.random() * max))

let randomNumbers = randomArray(10, 5)
let randomSum = Math.floor(Math.random() * randomNumbers.length) + 1


console.log(randomNumbers)
console.log(randomSum)

//Solution to logic problem//

let sumArray = () => randomNumbers.reduce((acc, cv, i) => {
  randomNumbers.forEach((num, index) => {
    if ((cv + num) === randomSum && index !== i) {
      acc = true
    }
  });
  return acc;
}, false);

sumArray()