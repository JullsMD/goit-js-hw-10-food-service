export const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
// REFS
export const bodyRef = document.querySelector('body');
export const toolbarRef = document.querySelector('.theme-switch__toggle');
  // DEFAULT
export const addToolbarListener = toolbarRef.addEventListener('change', onChangingToolbar);

export const previousTheme = localStorage.getItem('previousTheme');

// FN
export function onChangingToolbar(evt) {

  bodyRef.classList.toggle(Theme.DARK);
   
  if (evt.currentTarget.checked) {
    localStorage.setItem('previousTheme', Theme.DARK)
    bodyRef.classList.remove(Theme.LIGHT) 
  } else {
    localStorage.setItem('previousTheme', Theme.LIGHT)
    bodyRef.classList.add(Theme.LIGHT);
  }
}
if (previousTheme===Theme.DARK) {
  toolbarRef.checked = true;
  bodyRef.classList.add(Theme.DARK)

  }
if(previousTheme!==Theme.DARK){
    toolbarRef.checked = false;
    bodyRef.classList.add(Theme.LIGHT) 
  } 