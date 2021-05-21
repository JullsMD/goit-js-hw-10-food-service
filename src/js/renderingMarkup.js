import menu from './menu.json';
import card from '../templates/card.hbs';

export const menuListRef = document.querySelector('js-menu');
export const insertionMarkup = menuListRef.insertAdjacentHTML('beforeend', card(menu));