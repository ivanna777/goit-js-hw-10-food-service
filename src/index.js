import menu from '../src/menu.json';
import './styles.css';

const compiledTemplate = require("../src/menu.hbs");

const menuContainer = document.querySelector('.js-menu');
const menuMarkup = createMenuMarkup(menu);

menuContainer.insertAdjacentHTML('beforeend', menuMarkup);

function createMenuMarkup(menu) {
  return menu.map(compiledTemplate).join('')
}
console.log(menuContainer)

const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  };

const bodyRef = document.querySelector('.body-theme');
const checkboxRef = document.querySelector('#theme-switch-toggle');

checkboxRef.addEventListener('change', themeToggle);

function themeToggle() {
if(checkboxRef.checked) {
    localStorage.setItem('theme', Theme.DARK);
    bodyRef.classList.remove(Theme.LIGHT);
    bodyRef.classList.add(Theme.DARK);
  } else {
    localStorage.setItem('theme', Theme.LIGHT);
    bodyRef.classList.remove(Theme.DARK);
    bodyRef.classList.add(Theme.LIGHT);
  }
}

