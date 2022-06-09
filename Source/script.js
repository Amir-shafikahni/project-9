let $ = document;
let body = document.body;

/////////////////////////////////
let emptyBoxError = $.querySelector(".empty-filled-error");
let ulElem = $.querySelector(".list-group");
let input = $.getElementById("newTodoInput");
let newtodoTrashIcon;
let newTodoSpan;
let newTodoLi;

body.addEventListener("keydown", function () {
  input.focus();
});

input.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    if (!input.value) {
      event.preventDefault();
      emptyBoxError.style.display = "block";
    } else {
      // to add a todo /////////////
      event.preventDefault();
      emptyBoxError.style.display = "none";

      newtodoTrashIcon = $.createElement("i");
      newtodoTrashIcon.classList = "fa-solid fa-trash-can";

      newTodoSpan = $.createElement("span");
      newTodoSpan.innerHTML = input.value;

      newTodoLi = $.createElement("li");
      newTodoLi.append(newTodoSpan, newtodoTrashIcon);

      ulElem.append(newTodoLi);

      input.value = null;

      // to delete a todo /////////////
      let trashIcons = $.querySelectorAll(".fa-trash-can");
      trashIcons.forEach(function (Icon) {
        Icon.addEventListener("click", function () {
          Icon.parentElement.remove();
        });
      });
    }
  }
});
