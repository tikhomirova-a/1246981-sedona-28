// Modal form

var searchLink = document.querySelector(".search-link");
var modalForm = document.querySelector(".modal-form");

searchLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  if (modalForm.classList.contains("modal-hide")) {
    modalForm.classList.remove("modal-hide");
    modalForm.classList.add("modal-show"); // добавляет анимацию
  } else {
    modalForm.classList.add("modal-hide"); // скрывает форму
    modalForm.classList.remove("modal-show");
    modalForm.classList.remove("modal-error");
  }
});

var inputs = modalForm.querySelectorAll("input");
var buttonSearch = modalForm.querySelector(".search-form-button");

buttonSearch.addEventListener("click", function (evt) {
  modalForm.classList.remove("modal-error");
  modalForm.offsetWidth = modalForm.offsetWidth; // позволяет убрать и снова добавить .modal-error
  for (var i = 0; i < inputs.length; i++) {
    if (inputs[i].value == "") {
      evt.preventDefault();
      modalForm.classList.add("modal-error");
    }
  }
});
