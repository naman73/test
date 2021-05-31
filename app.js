const todoBtn = document.querySelector(".sub-btn");
const todoInput = document.querySelector(".todo-input");
const tList = document.querySelector(".list");

todoBtn.addEventListener("click", addTodo);

function addTodo(event){
    // default action that belongs to the event will not occur
        event.preventDefault();
        console.log("add todo button clicked");
        
        const todoDiv = document.createElement("div");
        todoDiv.classList.add("todo");
        
        const todoItem = document.createElement("li");
        todoItem.innerText= todoInput.value;
        todoItem.classList.add("new-todo");
        todoDiv.appendChild(todoItem);

        const doneBtn = document.createElement('button');
        doneBtn.innerHTML='<i class="fa fa-check-circle"></i>';
        doneBtn.classList.add("done-btn");
        todoDiv.appendChild(doneBtn);

        
        const deleteBtn = document.createElement('button');
        deleteBtn.innerHTML='<i class="fa fa-close"></i>';
        deleteBtn.classList.add("delete-btn");
        todoDiv.appendChild(deleteBtn);

        tList.appendChild(todoDiv);
        todoInput.value="";
}