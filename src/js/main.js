import WOW from 'wow.js';
import modals from './modules/modals';
import sliders from './modules/sliders';
import forms from './modules/forms';
import mask from './modules/mask';
import checkTextInputs from './modules/checkTextInputs';
import showMoreStyles from './modules/showMoreStyles';
import calc from './modules/calc';

window.addEventListener('DOMContentLoaded', () => {

  "use strict";

  new WOW().init();

  modals();

  sliders('.feedback-slider-item', 'horizontal', '.main-prev-btn', '.main-next-btn');
  sliders('.main-slider-item', 'vertical');

  forms();

  mask('input[name="phone"]');

  checkTextInputs('input[name="name"], [name="message"]');

  showMoreStyles('.button-styles', '.styles .row');

  calc('#size', '#material', '#options', '.promocode', '.calc-price');
});