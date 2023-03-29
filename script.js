'use strict';

window.addEventListener('DOMContentLoaded', function() { 
    let width = document.querySelector('.sizes-width');
    let height = document.querySelector('.sizes-height');

    width.innerHTML = document.documentElement.clientWidth + 'px'; 
    height.innerHTML = document.documentElement.clientHeight + 'px'; 


    let offsetWidth = document.querySelector('.offset-width');
    let offsetHeight = document.querySelector('.offset-height');

    offsetWidth.innerHTML = window.screen.availWidth + 'px'; 
    offsetHeight.innerHTML = window.screen.availHeight + 'px'; 

});


