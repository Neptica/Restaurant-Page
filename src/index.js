import "./style.css";
import home from "./home.js";
import menu from "./menu.js";
import locations from "./locations.js";
import about from "./about.js";

(function () {
  const navbar = document.getElementById("navbar");
  const functions = [home, menu, locations, about];
  const children = navbar.children;
  for (let i = 0; i < children.length; i++) {
    console.log("hello");
    console.log[functions[i]];
    children[i].addEventListener("click", functions[i]);
  }
})();
