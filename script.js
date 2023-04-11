'use strict';

window.addEventListener('DOMContentLoaded', function() { 
    let box = document.querySelector('.box');
    let width = document.querySelector('.sizes-width');
    let height = document.querySelector('.sizes-height');
    let screenWidth = document.querySelector('.screen-width');
    let screenHeight = document.querySelector('.screen-height');

    
        
    screenWidth.innerHTML = window.screen.width + 'px'; 
    screenHeight.innerHTML = window.screen.height + 'px'; 
    console.log(window.screen);
    
    
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


