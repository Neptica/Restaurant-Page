export default (function () {
  const content = document.getElementById("content");
  content.innerHTML = "";
  const p = document.createElement("h1");
  p.textContent = "Locations";
  content.appendChild(p);
});
