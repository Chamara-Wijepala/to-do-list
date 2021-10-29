import { appendTask } from "./manage-task-logic";
import { projectStorage, activeProjectId } from "./manage-project-logic";

const taskMenu = document.getElementById('task-menu');
const taskTemplate = document.getElementById('task-template');
const taskInput = document.getElementById('task-input');

//Creates and appends task elements to taskMenu
//for every task object in activeProjectId.tasks
export function renderTaskList() {
    clearTaskList();
    const selectedProject = projectStorage.find(project => project.id === activeProjectId);
    selectedProject.tasks.forEach(task => {
        const taskElement = document.importNode(taskTemplate.content, true);
        const taskName = taskElement.querySelector('p');
        taskName.innerText = task.name;
        const checkBox = taskElement.querySelector('input');
        checkBox.id = task.id;
        checkBox.checked = task.priority;
        const label = taskElement.querySelector('label');
        label.htmlFor = task.id;
        label.append(task.priority ? 'High' : 'Normal');
        
        taskMenu.appendChild(taskElement);
    });
};
function clearTaskList() {
    taskMenu.textContent = '';
};

export function processTaskForm() {
    let taskName = taskInput.value;
    if (taskName === null || taskName === '') return;
    taskInput.value = null;
    appendTask(taskName);
};