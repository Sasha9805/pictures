const scrolling = upSelector => {

  const upElem = document.querySelector(upSelector);

  window.addEventListener('scroll', () => {
    if (document.documentElement.scrollTop > 1650) {
      upElem.classList.remove('fadeOut');
      upElem.classList.add('animated', 'fadeIn');
      // upElem.style.display = 'block';
    } else {
      upElem.classList.remove('fadeIn');
      upElem.classList.add('fadeOut');
      // upElem.style.display = 'none';
    }
  });

  // raf scrolling
  let links = document.querySelectorAll('a[href^="#"]'),
      speed = 0.2;

  const html = document.documentElement,
        body = document.body;

  links.forEach(link => {
    link.addEventListener('click', function(event) {
      event.preventDefault();
      
      if (link.getAttribute('href').length == 1) {
        return;
      }

      let widthTop = Math.round(html.scrollTop || body.scrollTop),
          hash = this.hash,
          toBlock = document.querySelector(hash).getBoundingClientRect().top,
          start = null;

      requestAnimationFrame(step);

      function step(time) {
        if (start === null) {
          start = time;
        }

        let progress = time - start,
            r = toBlock < 0 ? Math.max(widthTop - progress / speed, widthTop + toBlock) : Math.min(widthTop + progress / speed, widthTop + toBlock);
        
        window.scrollTo(0, r);

        if (r !== widthTop + toBlock) {
          requestAnimationFrame(step);
        } else {
          location.hash = hash;
        }
      }
    });
  });

  // setInterval scrolling
  // const html = document.documentElement,
  //       body = document.body;

  // const calcScroll = () => {
  //   upElem.addEventListener('click', function(event) {
  //     let scrollTop = Math.round(html.scrollTop || body.scrollTop);

  //     if (this.hash !== '') {
  //       event.preventDefault();
  //       let hashElement = document.querySelector(this.hash),
  //           hashElementTop = 0;

  //       // while(hashElement.offsetParent) {
  //       //   hashElementTop += hashElement.offsetTop;
  //       //   hashElement = hashElement.offsetParent;
  //       // }

  //       // hashElementTop = Math.round(hashElementTop);
  //       hashElementTop = hashElement.getBoundingClientRect().top + window.pageYOffset;

  //       smoothScroll(scrollTop, hashElementTop, this.hash);
  //     }
  //   });

  //   const smoothScroll = (from, to, hash) => {
  //     let timeInterval = 1,
  //         prevScrollTop,
  //         speed;

  //     if (to > from) {
  //       speed = 30;
  //     } else {
  //       speed = -30;
  //     }

  //     let move = setInterval(function() {
  //       let scrollTop = Math.round(html.scrollTop || body.scrollTop);

  //       if (
  //         prevScrollTop === scrollTop ||
  //         (to > from && scrollTop >= to) ||
  //         (to < from && scrollTop <= to)
  //       ) {
  //         clearInterval(move);
  //         history.replaceState(history.state, document.title, location.href.replace(/#.*$/g, '') + hash);
  //         window.scrollTo(0, to);
  //       } else {
  //         // html.scrollTop += speed;
  //         // body.scrollTop += speed;
  //         window.scrollBy(0, speed);
  //         prevScrollTop = scrollTop;
  //       }
  //     }, timeInterval);
  //   };
  // };

  // calcScroll();

};

export default scrolling;