const drop = () => {
  
  const fileInputs = document.querySelectorAll('[name="upload"]');

  ['dragenter', 'dragleave', 'dragover', 'drop'].forEach(eventName => {
    fileInputs.forEach(input => {
      input.addEventListener(eventName, preventDefaults);
    });
  });

  function preventDefaults(event) {
    event.preventDefault();
    event.stopPropagation();
  }

  function highlight(item) {
    item.closest('.file_upload').style.backgroundColor = 'rgba(0,0,0,0.3)';
  }

  function unhighlight(item) {
    item.closest('.file_upload').style.backgroundColor = '';
  }

  ['dragenter'].forEach(eventName => {
    fileInputs.forEach(input => {
      input.addEventListener(eventName, () => highlight(input));
    });
  });

  ['dragleave', 'drop'].forEach(eventName => {
    fileInputs.forEach(input => {
      input.addEventListener(eventName, () => unhighlight(input));
    });
  });

  fileInputs.forEach(input => {
    input.addEventListener('drop', event => {
      input.files = event.dataTransfer.files;

      const arr = input.files[0].name.split('.');
      let dots = arr[0].length > 6 ? "..." : '.';
      const name = arr[0].slice(0, 6) + dots + arr[1];
      input.previousElementSibling.textContent = name;

      if (input.closest('[data-form]')) {
        let form = document.querySelector('[data-form]');
        let btn = document.createElement('button');
        form.append(btn);
        btn.click();
        btn.remove();
        btn = null;
      }
    });
  });

};

export default drop;