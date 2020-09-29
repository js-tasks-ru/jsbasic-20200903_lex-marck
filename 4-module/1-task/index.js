/**
 * Генерация HTML списка друзей
 * @param {Object[]} friends
 * @return {HTMLUListElement}
 */
function makeFriendsList(friends) {
  const list = document.createElement('ul');

  for( const item of friends) {
    let listItem = document.createElement('li');
    let content = item.firstName +" "+  item.lastName;
    listItem.append(content);
    list.appendChild(listItem);
  }

  return list;
}
