'use strict';

const imageWrapper = document.querySelector('.main-image__wrapper');
const controls = document.querySelectorAll('.main-control');

imageWrapper.dataset.images.split(',').forEach(imageURI => {
    const imageURL = `${window, location.protocol}//${window.location.host}/assets/images/main_image_states/${imageURI}.png`;
    const image = `
        <img src="${imageURL}" data-name="${imageURI}" class="main-image ${imageURI != 'default' ? 'unvisible' : ''}" />
    `;
    if (imageURI != 'default') {
        document.querySelector(`.main-control[data-name="${imageURI}"]`)
            .insertAdjacentHTML('beforeend', image);
        if (window.innerWidth < 768) {
        }
    }
    imageWrapper.insertAdjacentHTML('beforeend', image);
});

const cards = document.querySelectorAll('.main-card');
cards.forEach((card, i) => {
    card.querySelector('.main-card_enumeration').textContent = '0' + ++i;
});

document.querySelectorAll('.main-control[data-name]').forEach(control => {

    control.addEventListener('click', _e => {

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

const
    rights = document.getElementById('rights'),
    rightsText = document.getElementById('rights-text'),
    rightsYear = document.getElementById('rights_year'),
    rightsCompany = document.getElementById('rights_company'),
    rightsWording = document.getElementById('rights_wording');

rightsYear.textContent = (new Date()).getFullYear();

let activeImageName = 'default';
document.addEventListener('mousemove', _e => {
    if (window.innerWidth > 768) {
        const
            control = document.elementFromPoint(_e.x, _e.y),
            changeImage = imageName => {
                imageWrapper.querySelector(`.main-image[data-name="${activeImageName}"]`)
                    .classList.add('unvisible');
                imageWrapper.querySelector(`.main-image[data-name="${imageName}"]`)
                    .classList.remove('unvisible');
                activeImageName = imageName;
            };

        if (control.closest('.main-control')) {
            if (activeImageName != control.dataset.name) {
                changeImage(control.dataset.name)
            }
        } else {
            if (activeImageName != 'default') {
                changeImage('default')
            }
        }
    }
});
