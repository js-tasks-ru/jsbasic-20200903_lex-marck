/**
 * @param {string} str
 * @returns {string}
 */
function camelize(str) {
  let count = 0;
  const arrStr = str.split('');
  let newArr = [];
  let indexes = [];

  arrStr.forEach(function(){
    if(arrStr[count] === '-' && arrStr[count+1] !== undefined) {
      indexes.push(count+1);
    }
    count++;
  });

  for (const item of indexes) {
    let capLetter = arrStr[item].toUpperCase();
    arrStr.splice(item, 1, capLetter);
  }

  for (const item of arrStr) {
    if(item !== '-') {
      newArr.push(item);
    }
  }

  return newArr.join('');
}
