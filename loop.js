// const number = 3;

// //creating a multiplication table
// for (let i = 1; i <= 10; i++) {
//   const result = i * number;
//   console.log(`${number} * ${i} = ${result}`);
// }

const number = 10;
let counter = 1;
while (counter <= 10) {
    const result = number + " * " + counter + " = " + number * counter;
    console.log(result);
    counter++;
}