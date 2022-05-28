(() => {
  const menuBtnRefOpen = document.querySelector('[data-menu-open]');
  const menuBtnRefClose = document.querySelector('[data-menu-close]');
  const mobileMenuRef = document.querySelector('[data-menu]');
  const openModalBtn = document.querySelector('[data-modal-open]');
  const closeModalBtn = document.querySelector('[data-modal-close]');
  const modal = document.querySelector('[data-modal]');

  menuBtnRefOpen.addEventListener('click', openMenu('true'));
  menuBtnRefClose.addEventListener('click', openMenu('false'));
  
  openModalBtn?.addEventListener('click', toggleModal);
  closeModalBtn?.addEventListener('click', toggleModal);

  function openMenu(doOpen) {
    console.log('openMenu - doOpen=' + doOpen);
    if (doOpen) {
      console.log('opening menu');
      document.body.classList.toggle('menu-open');
      mobileMenuRef.classList.toggle('is-open');
    } else {
      console.log('closing menu');
      document.body.classList.remove('menu-open');
      mobileMenuRef.classList.remove('is-open');
    }
  }

  function toggleModal() {
    document.body.classList.toggle('modal-open');
    modal.classList.toggle('is-hidden');
  }
})();