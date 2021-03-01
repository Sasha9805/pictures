import WOW from 'wow.js';
import modals from './modules/modals';

window.addEventListener('DOMContentLoaded', () => {

  "use strict";

  new WOW().init();

  modals();
});