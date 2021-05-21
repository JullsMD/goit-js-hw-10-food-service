export const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  };
  // REFS
  export const bodyRef = document.querySelector('body');
  export const toolbarRef = document.querySelector('theme-switch__toggle');
    // DEFAULT
  export const addToolbarListener = toolbarRef.addEventListener('change', onChangingToolbar);
  export const defaultTheme=()=> bodyRef.classList.add(Theme.LIGHT)
  
  export function onChangingToolbar() {
    bodyRef.classList.toggle(Theme.LIGHT);
    bodyRef.classList.toggle(Theme.DARK);
  }