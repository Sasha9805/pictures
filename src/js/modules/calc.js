const calc = (size, material, options, promocode, result) => {

  const sizeBlock = document.querySelector(size),
        materialBlock = document.querySelector(material),
        optionsBlock = document.querySelector(options),
        promocodeBlock = document.querySelector(promocode),
        resultBlock = document.querySelector(result);

  let sum = 0;

  const calcFunc = () => {
    sum = Math.round(sizeBlock.value * materialBlock.value + +optionsBlock.value);

    if (!sizeBlock.value || !materialBlock.value) {
      resultBlock.textContent = 'Пожалуйста, выберите размер и материал картины';
    } else if (promocodeBlock.value == 'IWANTPOPART') {
      resultBlock.textContent = Math.round(sum * 0.7);
    } else {
      resultBlock.textContent = sum;
    }
  };

  sizeBlock.addEventListener('change', calcFunc);
  materialBlock.addEventListener('change', calcFunc);
  optionsBlock.addEventListener('change', calcFunc);

  promocodeBlock.addEventListener('input', calcFunc);

  // Запрос на сервер при получении данных для value элементов option

  // const getAndSetOptionValues = async (url, select, id) => {

  //   let res = await fetch(url);

  //   let { prices } = await res.json();

  //   select.options.forEach((option, index) => {
  //     if (index) {
  //       option.value = prices[id][index - 1];
  //     }
  //   });

  //   return prices;
  // };

  // sizeBlock.addEventListener('change', function() {
  //   setTimeout(() => console.log(11));
  //   // getAndSetOptionValues('http://localhost:3000/prices', this, size.slice(1))
  //   getAndSetOptionValues('assets/db.json', this, size.slice(1))
  //     .then(prices => {
  //       calcFunc();
  //     });
  //   // fetch('assets/db.json')
  //   //   .then(res => res.json())
  //   //   .then(({prices}) => {
  //   //     console.log(prices);
  //   //     this.options.forEach((option, index) => {
  //   //       option.value = prices.size[index];
  //   //     });
  //   //     calcFunc();
  //   //     console.log(1);
  //   //   });

  //   // calcFunc();
  // });

  // materialBlock.addEventListener('change', function() {
  //   getAndSetOptionValues('assets/db.json', this, material.slice(1))
  //     .then(prices => {
  //       calcFunc();
  //     });
  // });

  // optionsBlock.addEventListener('change', function() {
  //   getAndSetOptionValues('assets/db.json', this, options.slice(1))
  //     .then(prices => {
  //       calcFunc();
  //     });
  // });

};

export default calc;