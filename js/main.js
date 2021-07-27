'use strict';

{
  const open = document.getElementById('open');
  const overlay = document.querySelector('.overlay');
  const close = document.getElementById('close');
  const menus = document.getElementsByClassName('menu');

  open.addEventListener('click', ()=>{
    overlay.classList.add('show');
    open.classList.add('hide');
  });

  close.addEventListener('click', ()=>{
    overlay.classList.remove('show');
    open.classList.remove('hide');
  });


  for(let i = 0; i < menus.length; i++){
    menus[i].addEventListener('click', ()=>{
      overlay.classList.remove('show');
      open.classList.remove('hide');
    });
  }
}