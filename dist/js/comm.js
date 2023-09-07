
/**
 * 검색창 제어
 */
// 검색창 요소(.search) 찾기.
const searchEl = document.querySelector(".search");
const searchInputEl = searchEl.querySelector("input");
// 검색창 요소를 클릭하면 실행.
searchEl.addEventListener("click", function () {
  searchInputEl.focus();
});
// 검색창 요소 내부 실제 input 요소에 포커스되면 실행.
searchInputEl.addEventListener("focus", function () {
  searchEl.classList.add("focused");
  searchInputEl.setAttribute("placeholder", "통합검색");
});
// 검색창 요소 내부 실제 input 요소에서 포커스가 해제(블러)되면 실행.
searchInputEl.addEventListener("blur", function () {
  searchEl.classList.remove("focused");
  searchInputEl.setAttribute("placeholder", "");
});

$(function () {
  // tabs
  const tabEl = $(".tab-item");
  const tabTit = tabEl.find(".tit");

  // tab-item 옆 .on 삭제
  tabEl.removeClass("on");
  // .tab-item:first-child에게 .on 추가
  // $(".tab-item:first-child").addClass("on");
  tabEl.first().addClass("on");

  // .tab-item .tit을 클릭했을 때
  tabTit.on("click", function () {
    // .tab-item .on 삭제
    tabEl.removeClass("on");
    // 방금 클릭한 나(this)의 부모(parent()에게 .on 추가
    $(this).parents().addClass("on");
  });
});

