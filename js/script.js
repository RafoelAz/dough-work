const burgerMenuButton = document.querySelector(".icon-menu");
const body = document.querySelector("body");
const menuBody = document.querySelector(".menu__list");
const menu = document.querySelector(".menu");

if (burgerMenuButton) {
  burgerMenuButton.addEventListener("click", function () {
    toggleMenu();
    document.addEventListener("click", handleClickOutsideMenu);

    function handleClickOutsideMenu(e) {
      const target = e.target;
      const its_menu = target == menu || menu.contains(target);

      if (!its_menu) {
        toggleMenu();
        document.removeEventListener("click", handleClickOutsideMenu);
      }
    }
  });
}

function toggleMenu() {
  burgerMenuButton.classList.toggle("active");
  body.classList.toggle("lock");
  menuBody.classList.toggle("active");
}
