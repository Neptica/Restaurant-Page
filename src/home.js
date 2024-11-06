export default (function () {
  const content = document.getElementById("content");
  content.innerHTML = "";
  function initCard() {
    const card = document.createElement("div");
    card.classList.add("main");
    content.appendChild(card);
    const p = document.createElement("h1");
    p.textContent = "Home";
    card.appendChild(p);
  }
  initCard();
});
