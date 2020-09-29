/**
 * showSalary
 * @param {Array} users - данные о пользователях
 * @param {number} age - максимальный возраст
 * @returns {string}
 */
function showSalary(users, age) {
  let arr = [];
  let newArr = [];

  for (const item of users) {
    if(item.age <= age) {
      let result = [];
      result.push(item.name);
      result.push(item.balance);
      arr.push(result);
    }
  }

  for (const item of arr) {
    newArr.push(item.join(`, `));
  }
  let result =  newArr.join(`\n`);

  return `${result}`;
}

