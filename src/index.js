const menuBtnRefOpen = document.querySelector('[data-menu-open]');
const menuBtnRefClose = document.querySelector('[data-menu-close]');
const mobileMenuRef = document.querySelector('[data-menu]');

const openModalBtn = document.querySelector('[data-modal-open]');
const closeModalBtn = document.querySelector('[data-modal-close]');
const modalRef = document.querySelector('[data-modal]');

menuBtnRefOpen?.addEventListener('click', function () {
  console.log('open menu');
  document.body.classList.add('menu-open');
  mobileMenuRef.classList.add('is-open');
});
menuBtnRefClose?.addEventListener('click', function () {
  console.log('close menu');
  document.body.classList.remove('menu-open');
  mobileMenuRef.classList.remove('is-open');
});

openModalBtn?.addEventListener('click', function () {
  document.body.classList.add('modal-open');
  modalRef.classList.remove('is-hidden');
});
closeModalBtn?.addEventListener('click', function () {
  document.body.classList.remove('modal-open');
  modalRef.classList.add('is-hidden');
});