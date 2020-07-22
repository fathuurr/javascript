// function jumlah(...angka) {
//   let total = 0;
//   for (const a of angka) {
//     total += a;
//   }
//   return total;

//   return angka.reduce(
//     (accumulator, currentValue) => accumulator + currentValue
//   );
// }
// console.log(jumlah(1, 2, 3, 4, 5));

// array destructuring
// const kelompok1 = [
//   'Fathurrahman',
//   'Danang Abu Hafid',
//   'Fitto Ajira',
//   'Hardiansyah',
//   'Felix',
// ];
// const [ketua, wakil, ...kelompok] = kelompok1;
// console.log(wakil);

// object destructuring
// const myTeam = {
//   pm: 'Fathurrahman',
//   frontEnd1: 'Fitto',
//   ux: 'Hardiansyah',
//   backEnd: 'Fitto',
//   devOps: 'Danang',
// };
// const { pm, ...team } = myTeam;
// console.log(pm);

// filtering
function filterBy(type, ...values) {
  return values.filter((v) => typeof v === type);
}
console.log(filterBy('string', 1, 2, 'Fathurrahman', false, 'Danang', true));
