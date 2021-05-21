export const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
// REFS
export const bodyRef = document.querySelector('body');
export const toolbarRef = document.querySelector('.theme-switch__toggle');
  // DEFAULT
export const addToolbarListener = toolbarRef.addEventListener('change', onChangingToolbar);
export const defaultTheme = bodyRef.classList.add(Theme.LIGHT);
export const previousTheme = localStorage.getItem('previousTheme');

// FN
export function onChangingToolbar(evt) {
  bodyRef.classList.toggle(Theme.LIGHT);
  bodyRef.classList.toggle(Theme.DARK);
   
  if (evt.currentTarget.checked) {
    localStorage.setItem('previousTheme', Theme.DARK)
  } else {
    localStorage.setItem('previousTheme', Theme.LIGHT)
  }
}
if (previousTheme===Theme.DARK) {
  toolbarRef.checked = true;
  bodyRef.classList.add(Theme.DARK)
  }