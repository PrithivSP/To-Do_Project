// Selectors

const toDoInput = document.querySelector('.todo-input');
const toDoBtn = document.querySelector('.todo-add-btn');
const toDoList = document.querySelector('.todo-list');

// EventListener
toDoBtn.addEventListener('click', addToDo);

// Functions


function addToDo(event) {
    
    event.preventDefault();

    //! ToDo Div
   const toDoDiv = document.createElement('div');
   toDoDiv.classList.add('toDos');

   //! Create Element
   const newToDo = document.createElement('li');
   newToDo.classList.add('todo-item');
   newToDo.innerText = toDoInput.value ;
   toDoDiv.appendChild(newToDo);

   //! Completed Button
   const CompletedBtn = document.createElement('button');
   CompletedBtn.innerHTML = '<i class="fas fa-check"></i>';
   CompletedBtn.classList.add('complete-Btn');
   toDoDiv.appendChild(CompletedBtn);

   CompletedBtn.addEventListener('click', CompletedTask);

   function CompletedTask (event) {
    toDoDiv.style['backgroundColor'] = "#21E758";
    newToDo.style['textDecoration'] = 'line-through';
   }

   //! Delete Button
   const DeleteBtn = document.createElement('button');
   DeleteBtn.innerHTML = '<i class="fas fa-trash"></i>';
   DeleteBtn.classList.add('Delete-Btn');
   toDoDiv.appendChild(DeleteBtn);

   DeleteBtn.addEventListener('click', DeletingTask);

   function DeletingTask (event) {
    toDoDiv.remove();
   }

   //! Append to List container
   toDoList.appendChild(toDoDiv);

   //! clear ToDo Input
   toDoInput.value= "";
}