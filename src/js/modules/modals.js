const modals = () => {

  let btnPressed = false;

  function bindModal(triggerSelector, modalSelector, closeSelector, destroy = false) {

    const trigger = document.querySelectorAll(triggerSelector),
          modal = document.querySelector(modalSelector),
          close = document.querySelector(closeSelector),
          windows = document.querySelectorAll('[data-modal]'),
          scroll = calcScroll(),
          gift = document.querySelector('.fixed-gift');

    windows.forEach(window => {
      window.classList.add('animated', 'fadeIn');
    });

    trigger.forEach(item => {

      item.addEventListener('click', event => {

        if (event.target) {
          event.preventDefault();
        }

        btnPressed = true;

        if (destroy) {
          item.remove();
        }

        windows.forEach(window => {
          window.style.display = '';
        });

        modal.style.display = 'block';

        document.body.style.overflow = 'hidden';
        document.body.style.marginRight = scroll + 'px';
        gift.style.left = parseInt(getComputedStyle(gift).left) - scroll + 'px';
      });

    });

    close.addEventListener('click', () => {

      windows.forEach(window => {
        window.style.display = '';
      });

      modal.style.display = '';

      document.body.style.overflow = '';
      document.body.style.marginRight = '';
      gift.style.left = '';
      
    });

    modal.addEventListener('click', event => {

      if (event.target == event.currentTarget) {

        windows.forEach(window => {
          window.style.display = '';
        });

        modal.style.display = '';

        document.body.style.overflow = '';
        document.body.style.marginRight = '';
        gift.style.left = '';
      }

    });
  }

  function showModalByTime(selector, time) {
    setTimeout(() => {
      let display,
          gift = document.querySelector('.fixed-gift');

      document.querySelectorAll('[data-modal]').forEach(item => {
        if (getComputedStyle(item).display != 'none') {
          display = true;
        }
      });

      // display = Array.from(document.querySelectorAll('[data-modal]')).some(item => {
      //   return getComputedStyle(item).display != 'none';
      // });

      if (!display) {
        document.querySelector(selector).style.display = 'block';
        document.body.style.overflow = 'hidden';
        document.body.style.marginRight = calcScroll() + 'px';
        gift.style.left = parseInt(getComputedStyle(gift).left) - calcScroll() + 'px';
      }
      
    }, time);
  }

  function calcScroll() {
    let div = document.createElement('div');
    div.style.width = '50px';
    div.style.height = '50px';
    div.style.overflowY = 'scroll';
    div.style.visibility = 'hidden';
    document.body.append(div);
    let scrollWidth = div.offsetWidth - div.clientWidth;
    div.remove();

    return scrollWidth;
  }

  function openByScroll(selector) {
    window.addEventListener('scroll', () => {
      let scrollHeight = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
      if (!btnPressed && (window.pageYOffset + document.documentElement.clientHeight == scrollHeight)) {
        document.querySelector(selector).click();
      }
    });
  }

  bindModal('.button-design', '.popup-design', '.popup-design .popup-close');
  bindModal('.button-consultation', '.popup-consultation', '.popup-consultation .popup-close');
  bindModal('.fixed-gift', '.popup-gift', '.popup-gift .popup-close', true);

  showModalByTime('.popup-consultation', 3000);

  openByScroll('.fixed-gift');
};

export default modals;