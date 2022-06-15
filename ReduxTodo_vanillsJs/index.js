let rootEle = document.querySelector("ul");
let inputBox = document.querySelector(".userinput");
const allTodos = [];

// funtion  to create the userinterface
function createUi() {git a
  rootEle.innerHTML = " ";
  inputBox.value = "";
  allTodos.forEach((eachTodo, index) => {
    let li = document.createElement("li");
    let input = document.createElement("input");
    input.type = "checkbox";
    input.checked = eachTodo.isDone ? true : false;
    input.setAttribute("data-id", index);
    input.addEventListener("input", handleCheck);
    // if we check the input then isCompleted  value is to be true
    let p = document.createElement("p");
    p.innerText = eachTodo.title;

    let span = document.createElement("span");
    // when click event triggred on cancle button we will delete that particular todo
    span.addEventListener("click", DeleteTodo);
    span.innerHTML = ` <i class="fas fa-window-close close-btn" data-id = ${index}></i>`;
    li.append(input, p, span);
    rootEle.append(li);
    return rootEle;
  });
}

// once user press the enter add todo in the alltodos array
inputBox.addEventListener("keyup", (event) => {
  if (event.keyCode === 13) {
    rootEle.innerHTML = " ";
    allTodos.push({ title: event.target.value, isDone: false });
    createUi();
  }
});

// to delete a todo
function DeleteTodo(event) {
  let index = Number(event.target.dataset.id);
  allTodos.splice(index, 1);
  createUi();
}

// to complete  the todo
function handleCheck(event) {
  let index = Number(event.target.dataset.id);
  allTodos[index].isDone = !allTodos[index].isDone;
  createUi();
}
