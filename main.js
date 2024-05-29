const form = document.querySelector(".form");
const taskCount = document.querySelector(".task-count");
const task_container = document.querySelector(".task-container");
let taskArray = [];

// Submit Form
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const input = e.target[0];

  input.value !== ""
    ? createTask(input.value)
    : alertTask("Please enter a task!", "danger");

  input.value = "";
});

// Create Task
const createTask = (value) => {
  console.log(value);

  taskArray.push(value);

  taskCount.innerHTML = taskArray.length;

  const task = document.createElement("div");

  task.classList.add("task");

  task.innerHTML = `
    <div class="task-info">
        <div class="task-check-btn" onclick="checkTask(this)"></div>
        <span class="task-title">${value}</span>
    </div>

    <div class="task-info">
        <button class="task-edit-btn btn" onclick="editTask(this)">
            <i class="fa-solid fa-pen-to-square"></i>
        </button>

        <button class="task-delete-btn btn" onclick="deleteTask(this)">
            <i class="fa-solid fa-trash-can"></i>
        </button>
    </div>
    `;

  task_container.appendChild(task);

  alertTask("Task added successfuly!", "success");
};

// Delete Task
const deleteTask = (event) => {
  const task = event.closest(".task");

  console.log(task);

  const taskTitle = task.querySelector(".task-title").innerHTML;

  taskArray.forEach((task, index) => {
    if (task === taskTitle) {
      taskArray.splice(index, 1);
    }
  });

  console.log(taskArray);

  taskCount.innerHTML = taskArray.length;

  task.remove();

  alertTask("Task deleted!", "danger");

  return taskTitle;
};

// Edit Task
const editTask = (event) => {
  const taskTitle = deleteTask(event);

  alertTask("");

  const input = document.querySelector(".form-input");

  input.value = taskTitle;

  input.focus();

  alertTask("Task edited!", "info");
};

// Check Task
const checkTask = (event) => {
  event.innerHTML = `<i class="fa-solid fa-circle-check"></i>`;
  event.classList.add("checked");
  event.nextElementSibling.classList.add("checked");
};

// Alert Task
const alertTask = (message, className) => {
  const alert = document.querySelector(".alert");

  alert.className = "alert";

  alert.classList.add(className);

  alert.innerHTML = message;

  setTimeout(() => {
    alert.className = "alert";
    alert.innerHTML = "";
  }, 3000);
};
