// Destructuring Array
// const perkenalan = ['Halo', 'nama', 'saya', 'Fathurrahman'];
// const [salam, satu, dua, nama] = perkenalan;

// console.log(salam);

// Skipping Items
// const perkenalan = ['Halo', 'nama', 'saya', 'Fathurrahman'];
// const [salam, , , nama] = perkenalan;
// console.log(nama);

// return value pada function
// function coba() {
//   return [1, 2];
// }
// const [a, b] = coba();
// console.log(a, b);

// Rest Parameter
// const [a, ...values] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// console.log(a);
// console.log(values);

// Destructuring Object
// const siswa = {
//   nama: 'Fathurrahman',
//   kelas: 11,
//   umur: 17,
// };

// const { nama, kelas, umur } = siswa;
// console.log(nama, kelas, umur);

// Assignment tanpa deklarasi object
// ({ nama, kelas, umur } = {
//   nama: 'Fathurrahman',
//   kelas: 11,
//   umur: 17,
// });
// console.log(nama, kelas, umur);

// Assign ke variabel baru
// const siswa = {
//   nama: 'Fathurrahman',
//   kelas: 11,
//   umur: 17,
// };

// const { nama: n, kelas: k, umur: u } = siswa;
// console.log(n, k, u);

// memberikan default value
// const siswa = {
//   nama: 'Fathurrahman',
//   kelas: 11,
//   umur: 17,
//   email: 'fathurrahman0423@gmail.com',
// };
// const { nama, kelas, umur, email = 'example@email.com' } = siswa;
// console.log(email);

// memberi nilai default + assign variable baru
// const siswa = {
//   nama: 'Fathurrahman',
//   kelas: 11,
//   umur: 17,
//   email: 'fathurrahman0423@gmail.com',
// };
// const { nama: n, kelas: k, umur: u, email: e = 'example@email.com' } = siswa;
// console.log(e);

// Rest Parameter
// const siswa = {
//   nama: 'Fathurrahman',
//   kelas: 11,
//   umur: 17,
//   email: 'fathurrahman0423@gmail.com',
// };
// const { nama, ...values } = siswa;
// console.log(values);

// mengambil field pada object, setelah dikirim sebagai parameter untuk function
const siswa = {
  id: 526989278092,
  nama: 'Fathurrahman',
  kelas: 11,
  umur: 17,
  email: 'fathurrahman0423@gmail.com',
};
function getIdSiswa({ id }) {
  return id;
}
console.log(getIdSiswa(siswa));
