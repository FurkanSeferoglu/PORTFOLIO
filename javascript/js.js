const darkModeButton = document.getElementById('dark-mode-button');

darkModeButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

function toggleDarkMode() {
  var body = document.querySelector('body');
  body.classList.toggle('dark-mode');
}

