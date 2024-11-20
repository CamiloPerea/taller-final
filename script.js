// Referencias a los elementos del DOM
const taskInput = document.getElementById('task-input');
const addTaskButton = document.getElementById('add-task-button');
const taskList = document.getElementById('task-list');

// Función para agregar una tarea
function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('Por favor, ingresa una tarea.');
        return;
    }

    // Crear un nuevo ítem de la lista
    const taskItem = document.createElement('li');
    taskItem.className = 'task-item';

    const taskSpan = document.createElement('span');
    taskSpan.textContent = taskText;

    const editButton = document.createElement('button');
    editButton.textContent = 'Editar';
    editButton.className = 'edit-button';
    editButton.onclick = () => editTask(taskSpan);

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Eliminar';
    deleteButton.className = 'delete-button';
    deleteButton.onclick = () => deleteTask(taskItem);

    // Agregar los elementos al ítem
    taskItem.appendChild(taskSpan);
    taskItem.appendChild(editButton);
    taskItem.appendChild(deleteButton);

    // Agregar el ítem a la lista
    taskList.appendChild(taskItem);

    // Limpiar el campo de entrada
    taskInput.value = '';
}

// Función para editar una tarea
function editTask(taskSpan) {
    const newTaskText = prompt('Edita tu tarea:', taskSpan.textContent);
    if (newTaskText !== null && newTaskText.trim() !== '') {
        taskSpan.textContent = newTaskText.trim();
    }
}

// Función para eliminar una tarea
function deleteTask(taskItem) {
    taskList.removeChild(taskItem);
}

// Evento para agregar una tarea al presionar el botón
addTaskButton.addEventListener('click', addTask);

// Permitir agregar tareas al presionar "Enter"
taskInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        addTask();
    }
});
