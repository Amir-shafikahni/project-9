let $ = document;
let body = document.body;

function deleteTodo() {
  let trashIcons = $.querySelectorAll(".fa-trash-can");
  trashIcons.forEach(function (Icon) {
    Icon.addEventListener("click", function () {
      Icon.parentElement.remove();
    });
  });
}

/////////////////////////////////
let ulElem = $.querySelector(".list-group");
let emptyBoxError = $.querySelector(".empty-filled-error")
let newtodoTrashIcon;
let newTodoSpan;
let newTodoLi;

deleteTodo();

let input = $.getElementById("newTodoInput");
input.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
      if(input.value === ""){
        event.preventDefault();
        emptyBoxError.style.display = "block"
      }else{
        emptyBoxError.style.display = "none"
        event.preventDefault();
        newtodoTrashIcon = document.createElement("i");
        newtodoTrashIcon.classList.add("fa-solid", "fa-trash-can");
        newTodoSpan = document.createElement("span");
        newTodoSpan.innerHTML = input.value;
        newTodoLi = document.createElement("li");
        newTodoLi.append(newTodoSpan, newtodoTrashIcon);
        ulElem.append(newTodoLi);
        input.value = null;
    
        deleteTodo();
      }
  }
});
