// callback
// Callback
// Synchronous callback
// function halo(nama) {
//   alert(`Halo ${nama}`);
// }
// function tampilkanPesan(callback) {
//   const nama = prompt('Masukkan nama');
//   callback(nama);
// }
// tampilkanPesan((nama) => {
//   alert(`Halo ${nama}`);
// });

// Asynchronous Callback
function getDataSiswa(url, succes, error) {
  let xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        succes(xhr.response);
      } else if (xhr.status === 404) {
        error();
      }
    }
  };
  xhr.open('get', url);
  xhr.send();
}
getDataSiswa(
  'data/siswa.json',
  (results) => {
    const mhs = JSON.parse(results);
    mhs.forEach((m) => console.log(m.nama));
  },
  () => {}
);
