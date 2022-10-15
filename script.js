'use strict';

window.addEventListener('DOMContentLoaded', function() { 
    let width = document.querySelector('.sizes-width');
    let height = document.querySelector('.sizes-height');

    width.innerHTML = document.documentElement.clientWidth + 'px'; 
    height.innerHTML = document.documentElement.clientHeight + 'px'; 

});


