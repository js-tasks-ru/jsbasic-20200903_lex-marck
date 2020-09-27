/**
 * @param {HTMLTableElement} table
 * @return {void}
 */
function makeDiagonalRed(table) {
  let count = 0;
  let row = table.querySelectorAll('tr');
  let items = table.querySelectorAll('td');

  let rowLength = row.length;
  let itemsLength = items.length;

  let itemsInRow = itemsLength /  rowLength;

  for(const el of items) {

    if(items[count] !== undefined) {
      items[count].style.backgroundColor = 'red';
    }

    count += (itemsInRow + 1);
  }

}
