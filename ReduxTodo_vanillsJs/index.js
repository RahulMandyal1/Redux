let rootEle = document.querySelector("ul");
let inputBox = document.querySelector(".userinput");
let todos = [];
let store = Redux.createStore(reducer);

function reducer(preState = todos, action) {
  switch (action.type) {
    case "addTodo":
      const newTodo = { title: action.value, isDone: false };
      console.log(preState.concat(newTodo));
      return (preState = preState.concat(newTodo));

    case "isDone":
      let allTodos = preState;
      allTodos[action.index].isDone = !allTodos[action.index].isDone;
      return allTodos;

    case "deleteTodo":
      return preState.splice(action.index);
  }
}

// once user press the enter add todo in the alltodos array
inputBox.addEventListener("keyup", (event) => {
  if (event.keyCode === 13) {
    store.dispatch({ type: "addTodo", value: event.target.value });
    event.target.value = "";
  }
});

// to delete a todo
function DeleteTodo(event) {
  let index = Number(event.target.dataset.id);
  store.dispatch({ typegit: "deleteTodo", index });
}

// to complete  the todo
function handleCheck(event) {
  let index = Number(event.target.dataset.id);
  store.dispatch({ type: "isDone", index });
}

// funtion  to create the userinterface
function createUi() {
  rootEle.innerHTML = " ";
  inputBox.value = "";
  const todos = store.getState();
  todos.forEach((eachTodo, index) => {
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

store.subscribe(() => {
  createUi();
});
