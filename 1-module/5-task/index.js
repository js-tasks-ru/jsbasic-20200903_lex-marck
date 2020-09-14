/**
 * truncate
 * @param {string} str
 * @param {number} maxlength
 * @returns {string}
 */

function truncate(str, maxlength) {
  if (str.length > maxlength) {
    let shortString = str.slice(0, maxlength-1);
    let newStr = shortString+"…";
    return newStr;
  } else {
    return str;
  }
}
