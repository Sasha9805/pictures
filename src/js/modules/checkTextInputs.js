const checkTextInputs = selector => {

  const txtInputs = document.querySelectorAll(selector);

  txtInputs.forEach(item => {
    item.addEventListener('keypress', event => {
      if (event.key && event.key.match(/[^а-яё 0-9]/ig)) {
        event.preventDefault();
      }
    });
    item.addEventListener('input', () => {
      if (item.value.match(/[a-z]/ig)) {
        item.value = '';
      }
    });
  });

};

export default checkTextInputs;