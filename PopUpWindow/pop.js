var parent = document.querySelector(".modal-parent");
var btn = document.querySelector(".btn");
var section = document.querySelector("section");
var popx = document.querySelector(".x");

btn.addEventListener("click", appear);
function appear() {
  parent.style.display = "block";
  section.style.filter = "blur(6px)";
}
popx.addEventListener("click", disappearX);
function disappearX() {
  parent.style.display = "none";
  section.style.filter = "blur(0px)";
}
parent.addEventListener("click", disappearParent);
function disappearParent(e) {
  if (e.target.className == "modal-parent") {
    parent.style.display = "none";
    section.style.filter = "blur(0px)";
  }
}
