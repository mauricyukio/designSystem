const documentationLink = document.querySelector('#documentation-link');

documentationLink.addEventListener('click', function toggleLightMode() {
  setTimeout(() => {
    document.querySelector('body').classList.add('light-mode');
  }, 2000);
});
