(() => {
  const menuIcon = document.querySelector(".cabecalho__menu-hamburguer");
  const menuItems = document.querySelector(".lista-menu");

  menuIcon.addEventListener("click", () => {
    menuItems.classList.toggle("show");
  });
})();
