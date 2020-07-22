// Promise
// object yang merepresentasikan keberhasilan / kegagalan dari sebuah event yg asynchronous dimasa yang akan datang
// janji ( terpenuhi / ingkar )
// states (fulfilled / rejected / pending)
// callback ( resolved / rejected / finally )
// aksi ( then / catch )

// contoh 1
// let ditepati = false;
// const janji1 = new Promise((resolve, rejected) => {
//   if (ditepati) {
//     resolve('Ditepati nih');
//   } else {
//     rejected('Ingkar ..');
//   }
// });

// janji1
//   .then((response) => console.log(`Ok ! ${response}`))
//   .catch((response) => console.log(`Not Ok ! ${response}`));

// contoh 2
// let ditepati = false;
// const janji2 = new Promise((resolve, rejected) => {
//   if (ditepati) {
//     setTimeout(() => {
//       resolve('Ditepati');
//     }, 2000);
//   } else {
//     setTimeout(() => {
//       resolve('ngga ditepati setelah beberapa waktu');
//     }, 2000);
//   }
// });

// console.log('Mulai');
// console.log(janji2.then(() => console.log(janji2)));
// janji2
//   .finally(() => console.log('Selesai menunggu'))
//   .then((response) => console.log(`Ok ! ${response}`))
//   .catch((response) => console.log(`Not Ok ! ${response}`));
// console.log('Selesai');

// contoh 3

const film = new Promise((resolve) => {
  setTimeout(() => {
    resolve([
      {
        film: 'Avengers',
        pemeran: 'Robert downey',
      },
    ]);
  }, 1000);
});
const cuaca = new Promise((resolve) => {
  setTimeout(() => {
    resolve([
      {
        kota: 'Jakarta',
        suhu: '36',
        kondisi: 'Panas',
      },
    ]);
  }, 500);
});

Promise.all([film, cuaca])
  // .then((response) => console.log(response));
  .then((response) => {
    const [film, cuaca] = response;
    console.log(film);
    console.log(cuaca);
  });
