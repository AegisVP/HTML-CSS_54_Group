
const openMenuBtnRefList = document.querySelectorAll('[data-menu-open]');
const closeMenuBtnRefList = document.querySelectorAll('[data-menu-close]');
const mobileMenuRef = document.querySelector('[data-menu]');

const openModalBtnList = document.querySelectorAll('[data-modal-open]');
const openModalFrmList = document.getElementsByTagName('form');
const closeModalBtnList = document.querySelectorAll('[data-modal-close]');
const modalRef = document.querySelector('[data-modal]');

if (openMenuBtnRefList.length) for (openMenuBtnRef of openMenuBtnRefList) {openMenuBtnRef.addEventListener('click', openMenu);};
if (closeMenuBtnRefList.length) for (closeMenuBtnRef of closeMenuBtnRefList) {closeMenuBtnRef.addEventListener('click', closeMenu);};
if (openModalFrmList.length) for (openModalFrm of openModalFrmList) {openModalFrm.addEventListener('submit', openModalForm);}
if (openModalBtnList.length)for (openModalBtn of openModalBtnList) {openModalBtn.addEventListener('click', openModal);};
if (closeModalBtnList.length) for (closeModalBtn of closeModalBtnList) {closeModalBtn.addEventListener('click', closeModal);};

function openModalForm(form) {
  form?.preventDefault();
  openModal();
  this.reset();
}
function openModal() {
  document.body.classList.add('modal-open');
  modalRef.classList.remove('is-hidden');
}
function closeModal() {
  document.body.classList.remove('modal-open');
  modalRef.classList.add('is-hidden');
}

function openMenu() {
  document.body.classList.add('menu-open');
  mobileMenuRef.classList.add('is-open');
}
function closeMenu() {
  document.body.classList.remove('menu-open');
  mobileMenuRef.classList.remove('is-open');
}