'use strict';

window.addEventListener('DOMContentLoaded', function() { 
    let box = document.querySelector('.box');
    let width = box.querySelector('.sizes-width');
    let height = box.querySelector('.sizes-height');

    width.innerHTML = document.documentElement.clientWidth + 'px'; 
    height.innerHTML = document.documentElement.clientHeight + 'px'; 


    let offsetWidth = box.querySelector('.offset-width');
    let offsetHeight = box.querySelector('.offset-height');
    let top = box.querySelector('.top');
    let bottom = box.querySelector('.bottom');

    let wBox = box.getBoundingClientRect();
    console.log(box.getBoundingClientRect());

    offsetWidth.innerHTML = wBox.width + 'px'; 
    offsetHeight.innerHTML = wBox.height + 'px'; 
    top.innerHTML = wBox.top + 'px'; 
    bottom.innerHTML = wBox.bottom + 'px'; 

});


