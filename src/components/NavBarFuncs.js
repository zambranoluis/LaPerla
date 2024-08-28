
function handleClickMenu () {
  console.log('Click en boton menu');
  const menu = document.getElementById('menu');
  const close = document.getElementById('close');
  const aside = document.getElementById('aside');
  menu.classList.toggle('hidden');
  close.classList.toggle('hidden');

  aside.classList.toggle('hidden');

};

function handleClickClose () {
  console.log('Click en boton cancel');
  const menu = document.getElementById('menu');
  const close = document.getElementById('close');
  const aside = document.getElementById('aside');
  menu.classList.toggle('hidden');
  close.classList.toggle('hidden');

  aside.classList.toggle('hidden');
};

export {

  handleClickMenu,
  handleClickClose
}
