import WOW from 'wow.js';
import modals from './modules/modals';
import sliders from './modules/sliders';
import forms from './modules/forms';

window.addEventListener('DOMContentLoaded', () => {

  "use strict";

  new WOW().init();

  modals();

  sliders('.feedback-slider-item', 'horizontal', '.main-prev-btn', '.main-next-btn');
  sliders('.main-slider-item', 'vertical');

  forms();
});