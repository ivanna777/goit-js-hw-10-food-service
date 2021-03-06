// import menuTpl from '../src/menu.hbs';
// import menu from '../src/menu.json';
import './styles.css';
// const compiledTemplate = require("./template.handlebars");
// console.log(menuTpl(menu[5]))
const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  };

const bodyRef = document.querySelector('.body-theme');
const checkboxRef = document.querySelector('#theme-switch-toggle');

const localTheme = localStorage.getItem("theme");

checkboxRef.addEventListener('change', themeToggle);

if(localTheme === Theme.DARK) {
    bodyRef.classList.remove(Theme.LIGHT);
    bodyRef.classList.add(Theme.DARK);

  } 
function themeToggle() {
if(localTheme !== Theme.DARK) {
    localStorage.setItem('theme', Theme.DARK);
    bodyRef.classList.remove(Theme.LIGHT);
    bodyRef.classList.add(Theme.DARK);

  } else {
    localStorage.setItem('theme', Theme.LIGHT);
    bodyRef.classList.remove(Theme.DARK);
    bodyRef.classList.add(Theme.LIGHT);
  }
}

