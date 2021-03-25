import { postData } from '../services/requests';

const forms = () => {

  const form = document.querySelectorAll('form'),
        inputs = document.querySelectorAll('input'),
        textarea = document.querySelectorAll('textarea'),
        select = document.querySelectorAll('select'),
        upload = document.querySelectorAll('[name="upload"]'),
        sumBlock = document.querySelector('.calc-price');

  const message = {
    loading: 'Загрузка...',
    failure: 'Что-то пошло не так...',
    success: 'Спасибо! Скоро мы с вами свяжемся',
    spinner: 'assets/img/spinner.gif',
    ok: 'assets/img/ok.png',
    fail: 'assets/img/fail.png',
  };

  const path = {
    designer: 'assets/server.php',
    question: 'assets/question.php'
  };

  const clearInputs = () => {
    inputs.forEach(item => {
      item.value = '';
    });

    textarea.forEach(item => {
      item.value = '';
    });

    select.forEach(item => {
      item.options[0].selected = true;
    });

    upload.forEach(item => {
      item.previousElementSibling.textContent = 'Файл не выбран';
    });

    sumBlock.textContent = 'Для расчета нужно выбрать размер картины и материал картины';
  };

  upload.forEach(item => {
    item.addEventListener('input', () => {
      let arr = item.files[0].name.split('.');
      let dots = arr[0].length > 5 ? '...' : '.';
      const name = arr[0].slice(0, 5) + dots + arr[1];
      item.previousElementSibling.textContent = name;
    });
  });

  form.forEach(item => {
    item.addEventListener('submit', event => {

      event.preventDefault();

      let phone = item.querySelector('[name="phone"]');
      if (phone && phone.value.length != 18) {
        phone.focus();
        return;
      }

      let statusMessage = document.createElement('div');
      statusMessage.classList.add('status');
      item.parentNode.append(statusMessage);

      item.classList.add('animated', 'fadeOutUp');
      setTimeout(() => {
        item.style.display = 'none';
      }, 400);

      let statusImg = document.createElement('img');
      statusImg.src = message.spinner;
      statusImg.classList.add('animated', 'fadeInUp');
      statusMessage.append(statusImg);

      let textMessage = document.createElement('div');
      textMessage.textContent = message.loading;
      statusMessage.append(textMessage);

      const formData = new FormData(item);
      if (item.classList.contains('calc-form')) {
        let price = sumBlock.textContent;
        if (isFinite(price)) {
          formData.append('sum', price);
        }
      }
      let api = item.closest('.popup-design') || 
                item.classList.contains('calc-form') || 
                item.dataset.form !== undefined ? path.designer : path.question;
      console.log(api);

      postData(api, formData)
        .then(res => {
          console.log(res);
          statusImg.src = message.ok;
          textMessage.textContent = message.success;
        })
        .catch(() => {
          statusImg.src = message.fail;
          textMessage.textContent = message.failure;
        })
        .finally(() => {
          clearInputs();
          setTimeout(() => {
            statusMessage.remove();
            item.style.display = 'block';
            item.classList.remove('fadeOutUp');
            item.classList.add('fadeInUp');
          }, 5000);
        });
    });
  });
};

export default forms;