// spread operator
// memecah iterables menjadi single element
// const siswa = ['Fathurrahman', 'Danang', 'Fitto'];
// console.log(...siswa);

// menggabungkan 2 array atau lebih
// const siswa = ['Fathurrahman', 'Danang', 'Fitto'];
// const guru = ['Bu Wiwit', 'Pak Pram', 'Pak Fajri'];
// const orang = [...siswa, ...guru];
// console.log(orang);

//  meng-copy array
// const siswa = ['Fathurrahman', 'Danang', 'Fitto'];
// const siswa1 = [...siswa];
// siswa1[0] = 'Alvito';
// console.log(siswa);

// const liSiswa = document.querySelectorAll('li');
// console.log(liSiswa);
// const siswa = [];
// for (let i = 0; i < liSiswa.length; i++) {
//   siswa.push(liSiswa[i].textContent);
// }
// console.log(siswa);
// const siswa = [...liSiswa].map((s) => s.textContent);
// console.log(siswa);

const nama = document.querySelector('.nama');
const huruf = [...nama.textContent].map((h) => `<span> ${h} </span>`).join('');
nama.innerHTML = huruf;
