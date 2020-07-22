// 1. HTML Fragment
// const siswa = {
//   nama: 'Fathurrahman',
//   umur: 17,
//   alamat: 'Bekasi',
// };

// const el = `
//     <div class="">
//     <h2> ${siswa.nama} </h2>
//     <span> ${siswa.alamat} </span>
//     </div>
// `;

// 2. Looping
// const siswa = [
//   {
//     nama: 'Fathurrahman',
//     umur: 17,
//   },
//   {
//     nama: 'Danang Abu Hafid',
//     umur: 17,
//   },
//   {
//     nama: 'Fitto Ajira',
//     umur: 17,
//   },
// ];

// const el = `
// <div class="">
// ${siswa
//   .map(
//     (value) => `
// <ul class="">
// <li class=""> ${value.nama} </li>
// <li class=""> ${value.umur} </li>
// </ul>
// `
//   )
//   .join('')}
// </div>
// `;

// 3. Conditional
// const lagu = {
//   penyanyi: 'Ustad Jamal',
//   judul: 'Waqtu Syahr',
//   feat: 'ustad saiful ',
// };

// const el = `
// <div class="siswa">
//     <ul>
//     <li> ${lagu.penyanyi} </li>
//     <li> ${lagu.judul} ${lagu.feat ? `(feat.${lagu.feat})` : ''} </li>
//     </ul>
// </div>
// `;

// 4. Nested
// HTML Fragments

const mhs = {
  nama: 'Fathurrahman',
  semester: 5,
  mataKuliah: [
    'Rekayasa Web',
    'Analisis dan Perancangan Sistem Informasi',
    'Pemrograman sistem Interaktif',
    'Pemrograman Sistem Berorientasi Objek',
  ],
};

function cetakMataKuliah(mataKuliah) {
  return `<ol>
  ${mataKuliah.map((mk) => `<li> ${mk} </li>`).join('')}
  </ol>`;
}

const el = `
<div class="">
  <h2> ${mhs.nama} </h2>
  <span> ${mhs.semester} </span>
  <h4>Mata Kuliah : </h4>
  ${cetakMataKuliah(mhs.mataKuliah)}
</div>
`;

document.body.innerHTML = el;
