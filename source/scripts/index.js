'use strict';

const
    cards = document.querySelectorAll('.main-card'),
    controls = document.querySelectorAll('.main-control'),
    imageWrapper = document.querySelector('.main_image__wrapper'),
    footerDate = document.getElementById('rights_text--date');

footerDate.textContent = (new Date).getUTCFullYear()

controls.forEach(control => {
    imageWrapper.insertAdjacentHTML('beforeend', `<img data-name="${control.dataset.name}" class="main_image--state" src="assets/images/main/${control.dataset.name}.png" />`);
});
cards.forEach((card, iter) => {
    card.querySelector('.main-card_number').textContent = '0' + ++iter;
});

const defaultImage = document.querySelector('img[data-name="default"]')
let activeImage = defaultImage;
document.addEventListener('mousemove', _e => {
    const
        control = document.elementFromPoint(_e.x, _e.y),
        changeImage = image => {
            imageWrapper.classList.add('clear');
            setTimeout(() => {
                activeImage.classList.remove('visible');
                activeImage = image;
                image.classList.add('visible');
                imageWrapper.classList.remove('clear');
            }, 200)
        }

    if(control.closest('.main-control')) {
        const targetImage = document.querySelector(`img[data-name="${control.dataset.name}"]`);

        if(targetImage != activeImage)
            changeImage(targetImage);

    } else if(activeImage != defaultImage)
        changeImage(defaultImage);
});

document.addEventListener('click', _e => {
    const control = _e.target.closest('.main-control');
    if (control) {
        const
            scrollTo = control.dataset.to,
            scrollTarget = document.getElementById(scrollTo),
            topOffset = control.offsetHeight,
            elemPosition = scrollTarget.getBoundingClientRect().top,
            offsetPosition = elemPosition - topOffset;

        window.scrollBy({
            top: offsetPosition,
            behavior: 'smooth'
        })
    }
});
