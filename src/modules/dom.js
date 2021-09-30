import { createTask } from "./logic";

const taskMenu = document.getElementById('tasks');

export function addTask() {
    let task = document.createElement('div');
    task.className = 'task';
    taskMenu.appendChild(task);
};