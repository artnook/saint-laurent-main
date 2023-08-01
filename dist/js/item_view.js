var swiper = new Swiper(".swiper-container-mySwiper", {
  slidesPerView: 2,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

var modal = document.querySelector("#modal");
var openButton = document.querySelector(".cart-go-button");
var closeButton = document.querySelector(".close-modal");
var modalWrap = document.querySelector(".modal-container");

// cart-go-button을 클릭하면 모달이 나타나도록 이벤트 리스너를 추가합니다.
openButton.addEventListener("click", function () {
  modal.classList.add("open");
});

// x 버튼을 클릭하면 모달이 닫히도록 이벤트 리스너를 추가합니다.
closeButton.addEventListener("click", function () {
  modal.classList.remove("open");
});

// 모달 바깥 부분을 클릭하면 모달이 닫히도록 이벤트 리스너를 추가합니다.
modalWrap.addEventListener("click", function (e) {
  // 클릭이 모달 내부에서 발생했는지를 확인합니다.
  if (e.target.classList.contains("modal-container")) {
    modal.classList.remove("open");
  }
});
