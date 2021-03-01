const modals = () => {

  function bindModal(triggerSelector, modalSelector, closeSelector, closeClickOverlay = true) {

    const trigger = document.querySelectorAll(triggerSelector),
      modal = document.querySelector(modalSelector),
      close = document.querySelector(closeSelector),
      windows = document.querySelectorAll('[data-modal]'),
      scroll = calcScroll();

    trigger.forEach(item => {

      item.addEventListener('click', event => {

        if (event.target) {
          event.preventDefault();
        }

        windows.forEach(window => {
          window.style.display = '';
        });

        modal.style.display = 'block';

        document.body.style.overflow = 'hidden';
        document.body.style.marginRight = scroll + 'px';
      });
    });

    close.addEventListener('click', () => {

      windows.forEach(window => {
        window.style.display = '';
      });

      modal.style.display = '';

      document.body.style.overflow = '';
      document.body.style.marginRight = '';
    });

    modal.addEventListener('click', event => {

      if (event.target == event.currentTarget && closeClickOverlay) {

        windows.forEach(window => {
          window.style.display = '';
        });

        modal.style.display = '';

        document.body.style.overflow = '';
        document.body.style.marginRight = '';
      }

    });
  }

  function showModalByTime(selector, time) {
    setTimeout(() => {
      let display;

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

  bindModal('.button-design', '.popup-design', '.popup-design .popup-close');
  bindModal('.button-consultation', '.popup-consultation', '.popup-consultation .popup-close');

  showModalByTime('.popup-consultation', 3000);
};

export default modals;