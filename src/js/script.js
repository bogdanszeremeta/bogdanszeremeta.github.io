var hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.menu'),
    closeElem = document.querySelector('.menu__close'),
    menuLink = document.querySelectorAll('.menu__link');

hamburger.addEventListener('click', function() {
    menu.classList.add('menu__active');
});

closeElem.addEventListener('click', function() {
    menu.classList.remove('menu__active');

});

menuLink.forEach(function(link) {
    link.addEventListener('click', function() {
        menu.classList.remove('menu__active');
    });
});

