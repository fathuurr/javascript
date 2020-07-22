const angka = [8, 2, -1, 3, -2, 7, -4, 9, -6, -7];

// for
// const newAngka = [];
// for (let i = 0; i < angka.length; i++) {
//   if (angka[i] >= 3) {
//     newAngka.push(angka[i]);
//   }
// }

// console.log(newAngka);

// filter
// const newAngka = angka.filter((params) => {
//   return params >= 3;
// });
// console.log(newAngka);

// map
// const newAngka = angka.map((params) => {
//   return params * 2;
// });
// console.log(newAngka);

// reduce
// const newAngka = angka.reduce((accumulator, currentValue) => {
//   return accumulator + currentValue;
// });
// console.log(newAngka);

// method chaining
const result = angka
  .filter((a) => a > 5)
  .map((a) => a * 3)
  .reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  });
console.log(result);
