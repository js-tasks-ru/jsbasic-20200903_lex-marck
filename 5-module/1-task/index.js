function hideSelf() {

  const btn = document.querySelector('.hide-self-button');

  btn.addEventListener('click', function (e) {
    e.preventDefault();
    btn.setAttribute('hidden', true);
  });

}
