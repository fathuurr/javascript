const nama = 'Fathurrahman';
const umur = 17;
const email = 'fathurrahman0423@gmail.com';
// function coba(strings, ...values) {
//   //   let result = '';
//   //   strings.forEach((str, i) => {
//   //     result += `${str} ${values[i] || ''}`;
//   //   });
//   //   return result;

//   return strings.reduce(
//     (result, str, i) => `${result}${str}${values[i] || ''}`,
//     ''
//   );
// }
// const str = coba`Halo nama saya ${nama} umur saya ${umur} tahun `;
// console.log(str);

// Highlight
function highlight(strings, ...values) {
  return strings.reduce(
    (result, str, i) =>
      `${result}${str}<span class="hl">${values[i] || ''}</span>`,
    ''
  );
}
const str = highlight`Halo nama saya ${nama} umur saya ${umur} tahun dan email saya adalah ${email} `;
document.body.innerHTML = str;
