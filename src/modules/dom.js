import { createTask } from "./logic";

const taskMenu = document.getElementById('tasks');

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