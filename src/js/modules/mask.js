const mask = selector => {

  let setCursorPosition = (pos, elem) => {
    elem.focus();
    elem.selectionStart = elem.selectionEnd = pos;

    // if (elem.setSelectionRange) {
    //   elem.setSelectionRange(pos, pos);
    // } else if (elem.createTextRange) {
    //   let range = elem.createTextRange();
    //   range.collapse(true);
    //   range.moveStart('character', pos);
    //   range.moveEnd('character', pos);
    //   range.select();
    // }
  };
  
  function createMask(event) {
    let matrix = '+7 (___) ___ __ __',
        i = 0,
        def = matrix.replace(/\D/g, ''),
        val = this.value.replace(/\D/g, '');

    if (def.length >= val.length) {
      val = def;
    }

    console.log('val= ' + val);
    console.log('def= ' + def);

    this.value = matrix.replace(/./g, function(a) {
      return /[_\d]/.test(a) && i < val.length ? val[i++] : i >= val.length ? '' : a;
    });

    if (event.type == 'blur') {
      if (this.value.length == '2') {
        this.value = '';
      }
    } else {
      console.log(this.value.length);
      setCursorPosition(this.value.length, this);
    }
  }

  let inputs = document.querySelectorAll(selector);

  inputs.forEach(item => {
    item.addEventListener('input', createMask);
    item.addEventListener('focus', createMask);
    item.addEventListener('blur', createMask);
    item.addEventListener('click', function() {
      setCursorPosition(this.value.length, this);
    });
  });

};

export default mask;