// Destructuring

// function penjumlahanPerkalian(a, b) {
//   return [a + b, a * b];
// }

// const [jumlah, kali] = penjumlahanPerkalian(2, 5);
// console.log(jumlah);
// console.log(kali);

// function kalkulasi(a, b) {
//   return {
//     tambah: a + b,
//     kurang: a - b,
//     kali: a * b,
//     bagi: a / b,
//   };
// }
// const { bagi, kali, kurang, tambah } = kalkulasi(2, 10);
// console.log(kali);

// Destructuring function argument

const siswa1 = {
  nama: 'Fathurrahman',
  kelas: 11,
  umur: 17,
  nilai: {
    uas: 70,
    uts: 80,
    uh: 90,
  },
};
function cetakSiswa({ nama, umur, nilai: { uas, uts, uh } }) {
  return `Halo nama saya ${nama} dan umur saya ${umur} tahun dan nilai Ulangan Harian saya adalah ${uh}`;
}
console.log(cetakSiswa(siswa1));
