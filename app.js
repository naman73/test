const todoBtn = document.querySelector(".sub-btn");
const todoInput = document.querySelector(".todo-input");
const tList = document.querySelector(".list");

todoBtn.addEventListener("click", addTodo);
tList.addEventListener("click", deleteTodoItem);

function deleteTodoItem(nt){
    const item =nt.target;
    if(item.classList[0]==='delete-btn'){
        const deleteit=item.parentElement;
        deleteit.remove();
    }

    if(item.classList[0]==='done-btn')
    {
        const deleteit=item.parentElement;
        deleteit.innerText= deleteit.innerText  + ' done!';
        deleteit.classList.toggle("completed");
    }
}

function addTodo(event){
    // default action that belongs to the event will not occur
    // if (todoInput.value !="")
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
