var swiper = new Swiper(".swiper-container-mySwiper", {
  slidesPerView: 2,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

var modal = document.querySelector(".modal");
var closeButtons = document.querySelectorAll(".close-modal");
// set open modal behaviour
document.querySelector(".cart-button").addEventListener("click", function () {
  modal.classList.toggle("modal-dimmed");
});
// set close modal behaviour
for (i = 0; i < closeButtons.length; ++i) {
  closeButtons[i].addEventListener("click", function () {
    modal.classList.toggle("modal-dimmed");
  });
}
// close modal if clicked outside content area
document.querySelector(".modal-wrap").addEventListener("click", function () {
  modal.classList.toggle("modal-dimmed");
});
// prevent modal inner from closing parent when clicked
document.querySelector(".modal-dimmed").addEventListener("click", function (e) {
  e.stopPropagation();
});
