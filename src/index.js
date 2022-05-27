(() => {
  const menuBtnRef = document.querySelector('[data-menu-button]');
  const mobileMenuRef = document.querySelector('[data-menu]');
  const openModalBtn = document.querySelector('[data-modal-open]');
  const closeModalBtn = document.querySelector('[data-modal-close]');
  const modal = document.querySelector('[data-modal]');

  menuBtnRef.addEventListener('click', toggleMenu);
  openModalBtn.addEventListener('click', toggleModal);
  closeModalBtn.addEventListener('click', toggleModal);

  function toggleMenu() {
    document.body.classList.toggle('menu-open');
    menuBtnRef.classList.toggle('is-open');
    mobileMenuRef.classList.toggle('is-open');
  }

  function toggleModal() {
    document.body.classList.toggle('modal-open');
    modal.classList.toggle('is-hidden');
  }
})();