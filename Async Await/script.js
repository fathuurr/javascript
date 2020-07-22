function cobaPromise() {
  return new Promise((resolve, rejected) => {
    const waktu = 7000;
    if (waktu < 5000) {
      setTimeout(() => {
        resolve('Ok');
      }, waktu);
    } else {
      rejected('Kelamaan!');
    }
  });
}
// const coba = cobaPromise();
// coba.then((coba) => console.log(coba)).catch((coba) => console.log(coba));

async function cobaAsync() {
  try {
    const coba = await cobaPromise();
    console.log(coba);
  } catch (err) {
    console.error(err);
  }
}
cobaAsync();
