// Modal form

var searchLink = document.querySelector(".search-link");
var modalForm = document.querySelector(".modal-form");

searchLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  if (modalForm.classList.contains("modal-hide")) {
    modalForm.classList.remove("modal-hide");
    modalForm.classList.add("modal-show"); // добавляет анимацию
  } else {
    modalForm.classList.add("modal-hide");
    modalForm.classList.remove("modal-show");
  }
});
