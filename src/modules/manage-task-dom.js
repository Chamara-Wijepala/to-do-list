import { createTask } from "./manage-task-logic";
import { projectStorage, activeProjectId } from "./manage-project-logic";

const taskMenu = document.getElementById('task-menu');
const taskTemplate = document.getElementById('task-template');

//Creates and appends task elements to taskMenu
//for every task object in activeProjectId.tasks
export function renderTaskList() {
    clearTaskList();
    const selectedProject = projectStorage.find(project => project.id === activeProjectId);
    selectedProject.tasks.forEach(task => {
        const taskElement = document.importNode(taskTemplate.content, true);
        const taskName = taskElement.querySelector('p');
        taskName.id = task.id;
        taskName.innerText = task.name;
        taskMenu.appendChild(taskElement);
    });
};
function clearTaskList() {
    taskMenu.textContent = '';
};

export function addTask() {
    let task = document.createElement('div');
    task.className = 'task';
    taskMenu.appendChild(task);

    addTaskProperties(task);
};

function addTaskProperties(task) {
    let propertyArray = getTaskProperties();

    let title = document.createElement('p');
    title.innerText = propertyArray[0];
    task.appendChild(title);

    let date = document.createElement('p');
    date.innerText = propertyArray[1];
    task.appendChild(date);

    let priority = document.createElement('p');
    priority.innerText = propertyArray[2];
    task.appendChild(priority);
};

function getTaskProperties() {
    let properties = Object.keys(createTask());

    return properties;
};

export function removeTask() {
    taskMenu.removeChild(taskMenu.childNodes[0]);
};