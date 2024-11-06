import "./style.css";
import home from "./home.js";
import menu from "./menu.js";
import locations from "./locations.js";
import about from "./about.js";

(function () {
  initButtons();

  function openOption() {
    const opt = this.textContent;
    switch (opt.toLowerCase()) {
      case "home":
        home();
        break;
      case "menu":
        menu();
        break;
      case "locations":
        locations();
        break;
      case "about":
        about();
        break;
    }

    const navbar = document.getElementById("navbar");
    const children = navbar.children;
    for (const button of children) {
      button.classList.remove("active");
    }
    this.classList.add("active");
  }

  function initButtons() {
    const navbar = document.getElementById("navbar");
    const children = navbar.children;

    for (let i = 0; i < children.length; i++) {
      children[i].addEventListener("click", openOption);
    }
    children[0].click();
  }
})();
