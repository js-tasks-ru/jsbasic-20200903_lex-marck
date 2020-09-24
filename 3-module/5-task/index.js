/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */
function getMinMax(str) {
  let arr = str.split(',');
  let strWithSpace = arr.join(' ');
  let arrWithSpace = strWithSpace.split(' ');
  let arrNum = [];

  for (const item of arrWithSpace) {

    if (!isNaN(+item) && +item !== " ") {
      arrNum.push(item);
    }
  }

  arrNum.sort((a, b) => a - b);

  let result = {
    min: +arrNum[0],
    max: +arrNum[arrNum.length - 1]
  }

  return result;
}
