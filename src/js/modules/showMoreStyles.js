import { getResource } from '../services/requests';

const showMoreStyles = (trigger, styles) => {

  const cards = document.querySelector(styles),
        btn = document.querySelector(trigger);

  // cards.forEach(card => {
  //   card.classList.add('animated', 'fadeInUp');
  // });

  // btn.addEventListener('click', () => {
  //   cards.forEach(card => {
  //     card.classList.remove('hidden-lg', 'hidden-md', 'hidden-sm', 'hidden-xs');
  //     card.classList.add('col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');
  //   });

  //   btn.remove();
  // });

  btn.addEventListener('click', function() {
    // getResource('http://localhost:3000/styles')
    getResource('assets/db.json')
      // .then(res => createCards(res))
      .then(res => createCards(res.styles))
      .catch(err => {
        if (!cards.lastElementChild.classList.contains('status')) {
          let box = document.createElement('div');
          box.classList.add('status');
          box.style.color = 'red';
          box.style.fontSize = '25px';
          box.innerHTML = 'Не удалось загрузить данные, попробуйте позже';
          cards.append(box);
          setTimeout(() => {
            box.remove();
          }, 3000);
        }
      });

    this.remove();
  });

  function createCards(response) {
    response.forEach(({src, title, link}) => {

      let card = document.createElement('div');
      card.classList.add('animated', 'fadeInUp', 'col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');

      card.innerHTML = `
        <div class="styles-block">
          <img src=${src} alt="style">
          <h4>${title}</h4>
          <a href=${link}>Подробнее</a>
        </div>
      `;

      cards.append(card);
    });
  }

};

export default showMoreStyles;