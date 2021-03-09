const filter = (listSelector, wrapperSelector, noSelector, allSelector, activeClass) => {

  const menu = document.querySelector(listSelector),
        items = menu.querySelectorAll('li'),
        wrapper = document.querySelector(wrapperSelector),
        markAll = wrapper.querySelectorAll(allSelector),
        no = document.querySelector(noSelector);

  // const menu = document.querySelector('.portfolio-menu'),
  //       items = menu.querySelectorAll('li'),
  //       btnAll = menu.querySelector('.all'),
  //       btnLovers = menu.querySelector('.lovers'),
  //       btnChef = menu.querySelector('.chef'),
  //       btnGirl = menu.querySelector('.girl'),
  //       btnGuy = menu.querySelector('.guy'),
  //       btnGrandmother = menu.querySelector('.grandmother'),
  //       btnGranddad = menu.querySelector('.granddad'),
  //       wrapper = document.querySelector('.portfolio-wrapper'),
  //       markAll = wrapper.querySelectorAll('.all'),
  //       markLovers = wrapper.querySelectorAll('.lovers'),
  //       markChef = wrapper.querySelectorAll('.chef'),
  //       markGirl = wrapper.querySelectorAll('.girl'),
  //       markGuy = wrapper.querySelectorAll('.guy'),
  //       no = document.querySelector('.portfolio-no');

  const typeFilter = markType => {
    markAll.forEach(item => {
      item.style.display = 'none';
      item.classList.remove('animated', 'fadeIn');
    });

    no.style.display = 'none';
    no.classList.remove('animated', 'fadeIn');

    if (markType) {

      markType.forEach(item => {
        wrapper.style.height = '324.59px';
        setTimeout(() => {
          wrapper.style.height = '';
          item.style.display = '';
          item.classList.add('animated', 'fadeIn');
        }, 0);
        // item.style.display = '';
        // item.classList.add('animated', 'fadeIn');
      });

    } else {

      no.parentNode.style.height = '342px';
      setTimeout(() => {
        no.parentNode.style.height = '';
        no.style.display = 'block';
        no.classList.add('animated', 'fadeIn');
      });
      // no.style.display = 'block';
      // no.classList.add('animated', 'fadeIn');
      
    }
  };

  menu.addEventListener('click', event => {
    let target = event.target;

    if (target && target.tagName == 'LI') {

      items.forEach(item => {
        item.classList.remove(activeClass);
      });

      target.classList.add(activeClass);

      let liClass = Array.from(target.classList).find(className => className != activeClass);

      if (liClass == 'grandmother' || liClass == 'granddad') {
        liClass = null;
      }

      let blockImg = wrapper.querySelectorAll(`.${liClass}`);

      typeFilter(blockImg.length == 0 ? null : blockImg);
    }
  });

  // btnAll.addEventListener('click', () => {
  //   typeFilter(markAll);
  // });

  // btnLovers.addEventListener('click', () => {
  //   typeFilter(markLovers);
  // });

  // btnGirl.addEventListener('click', () => {
  //   typeFilter(markGirl);
  // });

  // btnGuy.addEventListener('click', () => {
  //   typeFilter(markGuy);
  // });

  // btnChef.addEventListener('click', () => {
  //   typeFilter(markChef);
  // });

  // btnGrandmother.addEventListener('click', () => {
  //   typeFilter();
  // });

  // btnGranddad.addEventListener('click', () => {
  //   typeFilter();
  // });

};

export default filter;