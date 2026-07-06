"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnsOpenModal = document.querySelectorAll(".show-modal");

const unHideModalAndOverlay = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const hideModalAndOverlay = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener("click", unHideModalAndOverlay);

btnCloseModal.addEventListener("click", hideModalAndOverlay);
overlay.addEventListener("click", hideModalAndOverlay);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    hideModalAndOverlay();
  }
});
