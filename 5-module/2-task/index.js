function toggleText() {
  const btn = document.querySelector('.toggle-text-button');
  const block = document.querySelector('#text');

  btn.addEventListener('click', function (e) {
    e.preventDefault();

    if ( block.hasAttribute('hidden')) {
      block.removeAttribute('hidden');
    } else {
      block.setAttribute('hidden', true);
    }

  });
}
