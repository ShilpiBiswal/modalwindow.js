'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnclosemodal = document.querySelector('.close-modal');
const btnsopenmodal = document.querySelectorAll('.show-modal');
console.log(btnsopenmodal);

for (let i = 0; i < btnsopenmodal.length; i++) {
  btnsopenmodal[i].addEventListener('click', function () {
    //console.log('button clicked');
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  });
}

const closemodal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
btnclosemodal.addEventListener('click', closemodal);
overlay.addEventListener('click', closemodal);
//handling esc events
document.addEventListener('keydown', function (e) {
  //console.log('a key was pressed');
  console.log(e.key);
  if(e.key==='Escape') {
    if(!modal.classList.contains('hidden')){
      closemodal();
    }
  }
});
