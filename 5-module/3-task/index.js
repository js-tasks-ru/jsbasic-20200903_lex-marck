function initCarousel() {
  const btns = document.querySelectorAll('.carousel__arrow');
  const prevBtn = document.querySelector('.carousel__arrow_left');
  const nextBtn = document.querySelector('.carousel__arrow_right');
  const slides = document.querySelectorAll('.carousel__slide');
  const slideWidth = document.querySelector('.carousel__slide').clientWidth;
  let carouselInnerElem = document.querySelector('.carousel__inner');
  const maxTranslateWidth = slideWidth*(slides.length - 1);
  let cssWidth = 0;

  prevBtn.style.display = 'none';

  for (const item of btns ) {

    item.addEventListener('click', function () {

      if ( item.classList.contains('carousel__arrow_right') ) {

        cssWidth += slideWidth;

        if( cssWidth == maxTranslateWidth ) {
          nextBtn.style.display = 'none';
        }

        prevBtn.style.display = '';

        carouselInnerElem.style.transform = 'translateX(-'+ cssWidth +'px)';

      } else {
        cssWidth -= slideWidth;

        if( cssWidth == 0 ) {
          prevBtn.style.display = 'none';
        }
        nextBtn.style.display = '';
        carouselInnerElem.style.transform = 'translateX(-'+ cssWidth +'px)';
      }
    });
  }
}
