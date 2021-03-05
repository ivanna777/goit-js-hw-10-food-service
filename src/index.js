import './styles.css';

const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  };

const bodyRef = document.querySelector('.body-theme');
const checkboxRef = document.querySelector('#theme-switch-toggle');
checkboxRef.checked = true;

checkboxRef.addEventListener('change', themeToggle);
console.log(checkboxRef)
function themeToggle() {

  if(bodyRef.classList === Theme.DARK) {
    localStorage.setItem("theme", Theme.DARK);
    bodyRef.classList.remove(Theme.LIGHT);
    bodyRef.classList.add(Theme.DARK);
    console.log(localStorage.theme)
  } else {
    localStorage.setItem('theme', Theme.LIGHT);
    bodyRef.classList.remove(Theme.DARK);
    bodyRef.classList.add(Theme.LIGHT);
  }
}
  
