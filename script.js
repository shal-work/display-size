'use strict';

window.addEventListener('DOMContentLoaded', function() { 
    let box = document.querySelector('.box');
    let width = document.querySelector('.sizes-width');
    let height = document.querySelector('.sizes-height');

    width.innerHTML = document.documentElement.clientWidth + 'px'; 
    height.innerHTML = document.documentElement.clientHeight + 'px'; 

    let sizes = document.querySelector('.sizes');
    let offsetWidth = sizes.querySelector('.offset-width');
    let offsetHeight = sizes.querySelector('.offset-height');

    let rectSizes = sizes.getBoundingClientRect();
    console.log(sizes.getBoundingClientRect());

    offsetWidth.innerHTML = rectSizes.width + 'px'; 
    offsetHeight.innerHTML = rectSizes.height + 'px'; 

});


