const $ = (selector) => document.querySelector(selector);

const body = $("body");
const headerBtnMenu = $("#btn-menu");
const headerNavList = $("#header-nav-list");
const headerOverlay = $("#header-nav-overlay");

function changePositionScroll() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

headerBtnMenu.addEventListener("click", () => {
  headerBtnMenu.classList.toggle("is-active");
  headerNavList.classList.toggle("is-active");
  headerOverlay.classList.toggle("is-active");
  body.classList.toggle("block-scroll");
  changePositionScroll();
});
headerOverlay.addEventListener("click", () => {
  headerBtnMenu.classList.toggle("is-active");
  headerNavList.classList.toggle("is-active");
  headerOverlay.classList.toggle("is-active");
  body.classList.toggle("block-scroll");
});
