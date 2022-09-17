let hambergerMneu = document.getElementById('hambergerMenu');
let XMark = document.getElementById('XMark');
let floatMenu = document.getElementById('floatMenu');

function hambergerMenuHandler(params) {
  hambergerMneu.classList.toggle('hidden');
  XMark.classList.toggle('hidden');
  floatMenu.classList.toggle('invisible');
}

function toggleDarkMode() {
  document.documentElement.classList.toggle('dark');
}
