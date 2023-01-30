'use strict';

const cards = document.querySelectorAll('.main-card');

cards.forEach((card, iter) => {
    card.querySelector('.main-card_number').textContent = '0' + ++iter;
});


document.addEventListener('mousemove', _e => {
    const control = document.elementFromPoint(_e.x, _e.y);
    const image = document.querySelector('.main_image');
    const changeSrc = src => {
        image.classList.add('clear');
        setTimeout(() => {
            image.src = `assets/images/${src}.png`;
            setTimeout(() => image.classList.remove('clear'), 50);
        }, 200);
    }
    if(control.classList.contains('main-control')) {
        if(image.src != `${document.URL}assets/images/${control.dataset.name}.png`) {
            changeSrc(control.dataset.name)
        }
    } else {
        if(image.src != `${document.URL}assets/images/home.png`) {
            changeSrc('home');
        }
    }
});
