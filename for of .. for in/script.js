// for.. of

// String
// const siswa = ['Fathurrahman', 'Danang', 'Fitto'];

// for (let i = 0; i < siswa.length; i++) {
//   console.log(siswa[i]);
// }

// siswa.forEach((murid) => console.log(murid));

// for (const s of siswa) {
//   console.log(s);
// }

// String
// const nama = 'Fathurrahman';
// for (const name of nama) {
//   console.log(name);
// }

// const siswa = ['Fathurrahman', 'Danang', 'Fitto'];

// siswa.forEach((s, i) => {
//   console.log(`${s} adalah siswa ke- ${i + 1}`);
// });

// for (const [i, s] of siswa.entries()) {
//   console.log(`${s} adalah siswa ke- ${i + 1}`);
// }

// NodeList using for..of
// const liNama = document.querySelectorAll('.nama');
// liNama.forEach((n) => {
//   console.log(n.textContent); // using forEach
// });
// for (n of liNama) {
//   console.log(n.textContent);
// }

// arguments

// function jumlahkanAngka() {
//   let jumlah = 0;
//   for (a of arguments) {
//     jumlah += a;
//   }
//   return jumlah;
// }
// console.log(jumlahkanAngka(1, 2, 3, 4, 5));

// for .. in

const siswa = {
  nama: 'Fathurrahman',
  kelas: 11,
  umur: 17,
};

for (const n in siswa) {
  console.log(siswa[n]);
}
