// const tampilNama = (nama) => {
//   return `Halo, ${nama}`;
// };
// console.log(tampilNama('Fathurrahman'));

// const tampilNama = (nama, waktu) => {
//   return `Selamat ${waktu}  ${nama}`;
// };
// console.log(tampilNama('Fathur', 'Malam'));

// const tampilNama = (nama) => `Hallo ${nama}`;
// console.log(tampilNama('Fathurrahman'));

// const siswa = ['Danang', 'Fathurrahman', 'Fitto'];
// const jumlahHuruf = siswa.map((nama) => {
//   return nama.length;
// });
// console.log(jumlahHuruf);

// const jumlahHuruf = siswa.map((nama) => ({
//   nama: nama,
//   jmlHuruf: nama.length,
// }));
// console.table(jumlahHuruf);

// const Siswa = function () {
//   this.nama = 'Fathurrahman';
//   this.umur = 17;
//   this.sayHello = function () {
//     console.log(`Halo nama saya ${this.nama} umur saya ${this.umur}`);
//   };
// };
// const fathurrahman = new Siswa();

// const Siswa = function () {
//   this.nama = 'Fathurrahman';
//   this.umur = 17;
//   this.sayHello = function () {
//     console.log(`Halo nama saya ${this.nama} umur saya ${this.umur}`);
//   };
//   setInterval(() => {
//     console.log(this.umur++);
//   }, 1000);
// };
// const fathurrahman = new Siswa();

const box = document.querySelector('.box');
box.addEventListener('click', function () {
  let satu = 'size';
  let dua = 'caption';

  if (this.classList.contains(satu)) {
    [satu, dua] = [dua, satu];
  }

  this.classList.toggle(satu);
  setTimeout(() => {
    this.classList.toggle(dua);
  }, 500);
});
