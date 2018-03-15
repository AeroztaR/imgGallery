"use strict";

let doc = document,
    current = doc.querySelector("#current"),
    images = doc.querySelectorAll(".images img"),
    opacity = 0.5;

// first img opacity
images[0].style.opacity = opacity;

images.forEach(img => img.addEventListener("click", imgClick));

function imgClick(e){
    // reset opacity
    images.forEach(img => (img.style.opacity = 1));

    // change img src
    current.src = e.target.src;

    // add fadeIn class
    current.classList.add('fadeIn');

    // remove fadeIn after .5 sec
    setTimeout(() => current.classList.remove('fadeIn'), 500);

    // change opacity 
    e.target.style.opacity = opacity;
}
