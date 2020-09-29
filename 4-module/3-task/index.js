/**
 * Метод устанавливает необходимые по условию аттрибуты таблице
 * @param {Element} table
 */
function highlight(table) {

  let theadCells = table.querySelectorAll('thead td');
  let tbodyCells = table.querySelectorAll('tbody td');
  let indexCellStatus;
  let indexCellAge;
  let indexCellGender;

  for (const item of theadCells) {

    if( item.textContent == 'Gender' ) {

      indexCellGender = item.cellIndex;

    } else if ( item.textContent == 'Age' ){

      indexCellAge = item.cellIndex;

    } else if ( item.textContent == 'Status' ) {

      indexCellStatus = item.cellIndex;

    }

  }

  for (const item of tbodyCells) {

    if (item.cellIndex == indexCellStatus) {

      if (item.hasAttribute('data-available')) {

        if (item.dataset.available == 'true' ) {

          item.closest('tr').classList.add('available');

        } else {

          item.closest('tr').classList.add('unavailable');

        }
        
      }

      if (item.dataset.available == null)  {
        item.closest('tr').setAttribute('hidden', true);
      }

    }

    if ( item.cellIndex == indexCellGender ) {

      if ( item.textContent == 'm'  ) {

        item.closest('tr').classList.add('male');

      } else {
        item.closest('tr').classList.add('female');
      }

    }

    // if ( item.cellIndex == indexCellStatus && item.hasAttribute('data-available') && item.dataset.available == 'true' ) {
    //
    //   item.closest('tr').classList.add('available');
    //
    // } else if ( item.cellIndex == indexCellStatus && item.hasAttribute('data-available') && item.dataset.available == 'false' ) {
    //
    //   item.closest('tr').classList.add('unavailable');
    //
    // }
    //
    // if ( item.cellIndex == indexCellStatus && item.dataset.available == null ) {
    //
    //   item.closest('tr').setAttribute('hidden', true);
    //
    // }

    // if ( item.cellIndex == indexCellGender && item.textContent == 'm' ) {
    //
    //   item.closest('tr').classList.add('male');
    //
    // } else if ( item.cellIndex == indexCellGender && item.textContent == 'f' ) {
    //
    //   item.closest('tr').classList.add('female');
    //
    // }

    if (item.cellIndex == indexCellAge &&  +item.textContent < 18) {
      item.closest('tr').style.textDecoration = 'line-through';
    }


  }

}
