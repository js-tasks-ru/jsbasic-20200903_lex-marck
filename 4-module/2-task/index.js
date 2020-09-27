/**
 * @param {HTMLTableElement} table
 * @return {void}
 */
function makeDiagonalRed(table) {
  let count = 0;
  let row = document.querySelectorAll('tr');
  let items = document.querySelectorAll('td');

  let rowLength = row.length;
  let itemsLength = items.length;

  let itemsInRow = itemsLength /  rowLength;

  for(const key in items) {

    if(items[count] !== undefined) {
      items[count].style.backgroundColor = 'red';
    }

    count += (itemsInRow + 1);
  }
  
}
