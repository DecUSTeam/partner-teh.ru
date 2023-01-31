'use strict';

const imageWrapper = document.querySelector('.main-image__wrapper');
const controls = document.querySelectorAll('.main-control');

imageWrapper.dataset.images.split(',').forEach(imageURI => {
    const imageURL = `${window,location.protocol}//${window.location.host}/assets/images/main_image_states/${imageURI}.png`;
    const image = new Image();
    image.src = imageURL;
    image.dataset.name = imageURI;
    image.classList.add('main-image');
    if(imageURI != 'default') {
        if(window.innerWidth < 768)
            document.querySelector(`.main-control[data-name="${imageURI}"]`).insertAdjacentElement('beforeend', image);
    } else
        imageWrapper.insertAdjacentElement('beforeend', image);
})

const cards = document.querySelectorAll('.main-card');
cards.forEach((card, i) => {
    card.querySelector('.main-card_enumeration').textContent = '0' + ++i;
});

document.querySelectorAll('.main-control[data-name]').forEach(control => {

    control.addEventListener('click', _e  => {

        let name = control.dataset.name;

        const scrollTarget = document.getElementById(name);

        // const topOffset = document.querySelector('.scrollto').offsetHeight;
        const topOffset = 0; // если не нужен отступ сверху
        const elementPosition = scrollTarget.getBoundingClientRect().top;
        const offsetPosition = elementPosition - topOffset;

        window.scrollBy({
            top: offsetPosition,
            behavior: 'smooth'
        });
    });
});
