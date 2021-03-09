const pictureSize = (imgSelector) => {

  const blocks = document.querySelectorAll(imgSelector);

  function showImg(block) {
    const img = block.querySelector('img');
    img.src = img.src.slice(0, -4) + '-1.png';

    block.querySelectorAll('p:not(.sizes-hit)').forEach(item => {
      item.style.display = 'none';
    });
  }

  function hideImg(block) {
    const img = block.querySelector('img');
    img.src = img.src.slice(0, -6) + '.png';

    block.querySelectorAll('p:not(.sizes-hit)').forEach(item => {
      item.style.display = '';
    });
  }

  blocks.forEach(block => {

    block.addEventListener('mouseenter', () => {
      showImg(block);
    });

    block.addEventListener('mouseleave', () => {
      hideImg(block);
    });
  });

};

export default pictureSize;