const accordion = (triggerSelector, itemsSelector) => {

  const btns = document.querySelectorAll(triggerSelector);

  btns.forEach(btn => {
    btn.addEventListener('click', function() {

      this.classList.toggle('ui-accordion-header-active');
      this.nextElementSibling.classList.toggle('ui-accordion-content-active');

      if (this.classList.contains('ui-accordion-header-active')) {
        this.nextElementSibling.style.maxHeight = this.nextElementSibling.scrollHeight + 80 + 'px';

        btns.forEach(btn => {
          if (btn !== this) {
            btn.classList.remove('ui-accordion-header-active');
            btn.nextElementSibling.classList.remove('ui-accordion-content-active');
            btn.nextElementSibling.style.maxHeight = '';
          }
        });
        
      } else {
        this.nextElementSibling.style.maxHeight = '';
      }
    });
  });

  // С помощью css-стилей
  // const btns = document.querySelectorAll(triggerSelector),
  //       blocks = document.querySelectorAll(itemsSelector);

  // blocks.forEach(block => block.classList.add('animated', 'fadeInDown'));

  // btns.forEach(btn => {
  //   btn.addEventListener('click', function() {
  //     if (!this.classList.contains('ui-accordion-header-active')) {

  //       btns.forEach(btn => {
  //         btn.classList.remove('ui-accordion-header-active');
  //       });

  //       this.classList.add('ui-accordion-header-active');
  //     }
  //   });
  // });

};

export default accordion;