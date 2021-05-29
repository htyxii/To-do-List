// 初始變數
let list = document.querySelector('#my-todo')
let addBtn = document.querySelector('#addBtn')
let input = document.querySelector('#newTodo')
let completed = document.querySelector('#completed')

// 資料
const todos = ['Hit the gym', 'Read a book', 'Buy eggs', 'Organize office', 'Pay bills']
for (let todo of todos) {
  addItem(todo)
}


// 函式
function addItem (text) {
  let newItem = document.createElement('li')
  newItem.innerHTML = `
    <label for="todo">${text}</label>
    <i class="delete fa fa-trash"></i>
  `
  list.appendChild(newItem)
}


function MoveAndDelete(todolist) {
  let target = event.target
  if (target.classList.contains('delete')) {
    let parentElement = target.parentElement
    parentElement.remove()
    numberCount()
  } else if (target.tagName === 'LABEL') { 
    target.classList.toggle('checked')
    todolist.append(target.parentElement)
    numberCount()
  }
}

function numberCount() {
  list.children[0].innerHTML = `Tasks: ${list.children.length - 1}`
  completed.children[0].innerHTML = `Completed: ${completed.children.length - 1}`
}

function inputValidation() {
  let inputValue = input.value
  if (inputValue.length > 0) {
    addItem(inputValue)
    numberCount()
    input.value = ''
    input.classList.remove("error", "errorPH")
    input.placeholder = "Add Task..."
  } else {
    input.placeholder = "This field is required."
    input.classList.add("error", "errorPH");
  }
}


// Create
addBtn.addEventListener("click", inputValidation)

input.addEventListener("keypress", function () {
  if (event.keyCode === 13) {
    inputValidation()
  }
})


// Delete and check
list.addEventListener('click', function (event) {
  MoveAndDelete(completed)
})


completed.addEventListener('click', function (event) {
  MoveAndDelete(list)
})

