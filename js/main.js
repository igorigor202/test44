window.onload = function () {
  "use strict";

  let body = document.getElementById('body');

  //menu open
  let toggleMenuBtns = document.querySelectorAll('.menu-toggle');
  if (toggleMenuBtns) {
    toggleMenuBtns.forEach(element => {
      element.onclick = function () {
        const lockPaddingValue = window.innerWidth - document.querySelector('.body').offsetWidth + 'px';
        let menuItem = document.getElementById('menu');
        menuItem.classList.toggle('_open');
        const lockPaddingValue2 = window.innerWidth - document.querySelector('.body').offsetWidth + 15 + 'px';
        menuItem.style.paddingRight = lockPaddingValue2;


        body.classList.toggle('_fixed');
        body.style.paddingRight = lockPaddingValue;
      }
    });
  }

  //menu open--end
};